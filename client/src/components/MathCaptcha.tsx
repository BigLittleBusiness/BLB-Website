import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface MathCaptchaProps {
  onVerified: (verified: boolean) => void;
  className?: string;
}

interface CaptchaChallenge {
  num1: number;
  num2: number;
  operator: "+" | "-" | "×";
  answer: number;
}

function generateChallenge(): CaptchaChallenge {
  const operators: Array<"+" | "-" | "×"> = ["+", "-", "×"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  let num1: number, num2: number, answer: number;
  
  switch (operator) {
    case "+":
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 20) + 1;
      answer = num1 + num2;
      break;
    case "-":
      num1 = Math.floor(Math.random() * 20) + 10;
      num2 = Math.floor(Math.random() * num1);
      answer = num1 - num2;
      break;
    case "×":
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 * num2;
      break;
  }
  
  return { num1, num2, operator, answer };
}

export default function MathCaptcha({ onVerified, className }: MathCaptchaProps) {
  const [challenge, setChallenge] = useState<CaptchaChallenge>(generateChallenge);
  const [userAnswer, setUserAnswer] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  const refreshChallenge = useCallback(() => {
    setChallenge(generateChallenge());
    setUserAnswer("");
    setIsVerified(false);
    setError(false);
    onVerified(false);
  }, [onVerified]);

  useEffect(() => {
    // Reset verification when challenge changes
    setIsVerified(false);
    onVerified(false);
  }, [challenge, onVerified]);

  const handleAnswerChange = (value: string) => {
    setUserAnswer(value);
    setError(false);
    
    // Only allow numbers and negative sign
    if (!/^-?\d*$/.test(value)) return;
    
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue)) {
      if (numValue === challenge.answer) {
        setIsVerified(true);
        onVerified(true);
      } else {
        setIsVerified(false);
        onVerified(false);
      }
    } else {
      setIsVerified(false);
      onVerified(false);
    }
  };

  const handleBlur = () => {
    if (userAnswer && !isVerified) {
      setError(true);
    }
  };

  return (
    <div className={className}>
      <Label className="text-sm font-medium text-[#333333] mb-2 block">
        Security Check
      </Label>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F5] rounded-lg border border-gray-200 min-w-[140px] justify-center">
          <span className="font-mono text-lg font-semibold text-[#0D0D0D]">
            {challenge.num1} {challenge.operator} {challenge.num2} =
          </span>
        </div>
        <Input
          type="text"
          inputMode="numeric"
          pattern="-?[0-9]*"
          value={userAnswer}
          onChange={(e) => handleAnswerChange(e.target.value)}
          onBlur={handleBlur}
          placeholder="?"
          className={`w-20 text-center font-mono text-lg ${
            isVerified 
              ? "border-green-500 bg-green-50" 
              : error 
                ? "border-red-500 bg-red-50" 
                : ""
          }`}
          aria-label="Captcha answer"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={refreshChallenge}
          className="text-[#666666] hover:text-[#0D0D0D]"
          aria-label="Generate new captcha"
        >
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
      {error && (
        <p className="text-sm text-red-500 mt-1">
          Incorrect answer. Please try again.
        </p>
      )}
      {isVerified && (
        <p className="text-sm text-green-600 mt-1">
          ✓ Verified
        </p>
      )}
    </div>
  );
}
