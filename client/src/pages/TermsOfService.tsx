/*
 * Terms of Service Page
 * Compliant with Australian Consumer Law and New Zealand Consumer Guarantees Act
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4">
              Terms of Service
            </h1>
            <p className="text-[#666] mb-8">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none text-[#1A1A1A]">
              
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  1. Introduction and Acceptance
                </h2>
                <p>
                  These Terms of Service ("Terms") govern your access to and use of the websites, platforms, and services provided by Big Little Business Pty Ltd (ABN: [To be added]) ("Big Little Business", "we", "us", "our"), including GrantMaestro, Wellness App, and GrantThrive (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms. If you are using the Services on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms, and "you" refers to both you individually and the organisation.
                </p>
                <p>
                  If you do not agree to these Terms, you must not access or use our Services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  2. About Our Services
                </h2>
                <p>
                  Big Little Business provides software-as-a-service (SaaS) solutions designed for local government councils, philanthropic organisations, and not-for-profit entities. Our platforms include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>GrantMaestro</strong> — A grant management and administration platform</li>
                  <li><strong>Wellness App</strong> — A staff wellbeing monitoring and engagement tool</li>
                  <li><strong>GrantThrive</strong> — A community impact and grant application platform</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with reasonable notice where practicable.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  3. Account Registration and Security
                </h2>
                <p>
                  To access certain features of our Services, you may be required to create an account. When registering, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your login credentials confidential and secure</li>
                  <li>Notify us immediately of any unauthorised access to your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate accounts that violate these Terms or are inactive for extended periods.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  4. Subscription and Payment Terms
                </h2>
                <p>
                  Access to our Services may require a paid subscription. The following terms apply to paid subscriptions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Fees:</strong> Subscription fees are as set out in your service agreement or on our website. All fees are quoted in Australian Dollars (AUD) unless otherwise specified.</li>
                  <li><strong>Billing:</strong> Subscriptions are billed in advance on a monthly or annual basis, as selected at the time of purchase.</li>
                  <li><strong>Payment:</strong> Payment is due upon invoice. We accept payment by credit card, direct debit, or bank transfer as specified.</li>
                  <li><strong>GST:</strong> All fees are exclusive of GST unless otherwise stated. GST will be added where applicable.</li>
                  <li><strong>Price Changes:</strong> We may change subscription fees with at least 30 days' notice before the start of your next billing period.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  5. Cancellation and Refunds
                </h2>
                <p>
                  You may cancel your subscription at any time by contacting us or through your account settings. Upon cancellation:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You will retain access to the Services until the end of your current billing period</li>
                  <li>No refunds will be provided for partial billing periods, except as required by law</li>
                  <li>You are responsible for exporting any data you wish to retain before cancellation</li>
                </ul>
                <p className="mt-4">
                  We may offer refunds at our discretion in exceptional circumstances. Any statutory rights you have under the Australian Consumer Law or New Zealand Consumer Guarantees Act are not affected by these Terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  6. Acceptable Use
                </h2>
                <p>
                  You agree to use our Services only for lawful purposes and in accordance with these Terms. You must not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Services in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorised access to any part of the Services or related systems</li>
                  <li>Interfere with or disrupt the integrity or performance of the Services</li>
                  <li>Upload or transmit viruses, malware, or other harmful code</li>
                  <li>Use the Services to send spam, unsolicited communications, or harass others</li>
                  <li>Reverse engineer, decompile, or attempt to extract the source code of the Services</li>
                  <li>Resell, sublicense, or provide access to the Services to third parties without our consent</li>
                  <li>Use the Services in a manner that could damage our reputation or goodwill</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  7. Your Data and Content
                </h2>
                <p>
                  You retain ownership of all data, content, and materials you upload or input into our Services ("Your Content"). By using our Services, you grant us a limited licence to use, store, and process Your Content solely for the purpose of providing the Services to you.
                </p>
                <p>
                  You are responsible for ensuring that Your Content does not infringe the rights of any third party or violate any applicable laws. You represent and warrant that you have all necessary rights and permissions to upload Your Content.
                </p>
                <p>
                  We will handle Your Content in accordance with our <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a> and any applicable data processing agreements.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  8. Intellectual Property
                </h2>
                <p>
                  All intellectual property rights in the Services, including software, designs, logos, trademarks, and documentation, are owned by Big Little Business or our licensors. These Terms do not grant you any rights to use our intellectual property except as expressly permitted.
                </p>
                <p>
                  You may not copy, modify, distribute, sell, or lease any part of our Services or included software, nor may you reverse engineer or attempt to extract the source code, unless permitted by law or with our written consent.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  9. Service Availability and Support
                </h2>
                <p>
                  We strive to provide reliable and continuous access to our Services. However, we do not guarantee that the Services will be uninterrupted, error-free, or available at all times. We may perform scheduled maintenance with reasonable notice where practicable.
                </p>
                <p>
                  Support is available via email at <a href="mailto:support@biglittlebusiness.com" className="text-gold hover:underline">support@biglittlebusiness.com</a>. Response times and support levels may vary depending on your subscription plan.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  10. Consumer Guarantees
                </h2>
                <p>
                  If you are a consumer within the meaning of the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) or the New Zealand Consumer Guarantees Act 1993, you have certain statutory rights that cannot be excluded, restricted, or modified by these Terms.
                </p>
                <p>
                  Our Services come with guarantees that cannot be excluded under the Australian Consumer Law. For major failures with the service, you are entitled to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancel your service contract with us; and</li>
                  <li>A refund for the unused portion, or compensation for its reduced value.</li>
                </ul>
                <p className="mt-4">
                  You are also entitled to be compensated for any other reasonably foreseeable loss or damage. If the failure does not amount to a major failure, you are entitled to have problems with the service rectified in a reasonable time.
                </p>
                <p>
                  Nothing in these Terms is intended to exclude, restrict, or modify any rights you may have under the Australian Consumer Law or New Zealand Consumer Guarantees Act that cannot be excluded, restricted, or modified by agreement.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  11. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, and subject to Section 10 (Consumer Guarantees):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our total liability to you for any claims arising out of or related to these Terms or the Services is limited to the amount you paid us for the Services in the 12 months preceding the claim.</li>
                  <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, business opportunities, or goodwill.</li>
                  <li>We are not liable for any loss or damage arising from circumstances beyond our reasonable control, including internet outages, third-party service failures, or force majeure events.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  12. Indemnification
                </h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Big Little Business and our officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or related to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of the Services</li>
                  <li>Your breach of these Terms</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Your Content or any data you upload to the Services</li>
                  <li>Any infringement of third-party rights by Your Content</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  13. Termination
                </h2>
                <p>
                  We may suspend or terminate your access to the Services immediately if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You breach any provision of these Terms</li>
                  <li>You fail to pay any fees when due</li>
                  <li>We are required to do so by law</li>
                  <li>We reasonably believe your use poses a security risk or may harm other users</li>
                </ul>
                <p className="mt-4">
                  Upon termination, your right to use the Services will cease immediately. We will provide you with a reasonable opportunity to export Your Content before deletion, unless termination is due to a serious breach.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  14. Governing Law and Disputes
                </h2>
                <p>
                  These Terms are governed by the laws of Victoria, Australia. Any disputes arising out of or related to these Terms or the Services will be subject to the exclusive jurisdiction of the courts of Victoria, Australia.
                </p>
                <p>
                  For users in New Zealand, nothing in these Terms limits any rights you may have under New Zealand law, including the Consumer Guarantees Act 1993.
                </p>
                <p>
                  Before initiating any legal proceedings, you agree to first attempt to resolve any dispute by contacting us at <a href="mailto:legal@biglittlebusiness.com" className="text-gold hover:underline">legal@biglittlebusiness.com</a>.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  15. Changes to These Terms
                </h2>
                <p>
                  We may update these Terms from time to time. We will notify you of any material changes by posting the updated Terms on our website and, where appropriate, by email. Your continued use of the Services after such changes constitutes acceptance of the updated Terms.
                </p>
                <p>
                  We encourage you to review these Terms periodically to stay informed of any updates.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  16. General Provisions
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and Big Little Business regarding the Services.</li>
                  <li><strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.</li>
                  <li><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms will not constitute a waiver of that right or provision.</li>
                  <li><strong>Assignment:</strong> You may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights and obligations without restriction.</li>
                  <li><strong>No Agency:</strong> Nothing in these Terms creates any agency, partnership, or joint venture between you and Big Little Business.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-[#0D0D0D] mb-4">
                  17. Contact Us
                </h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <p className="mt-4">
                  <strong>Big Little Business Pty Ltd</strong><br />
                  Email: <a href="mailto:legal@biglittlebusiness.com" className="text-gold hover:underline">legal@biglittlebusiness.com</a><br />
                  Website: <a href="https://www.biglittlebusiness.com" className="text-gold hover:underline">www.biglittlebusiness.com</a>
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
