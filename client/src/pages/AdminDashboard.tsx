import { useState } from "react";
import { motion } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  ArrowLeft, 
  RefreshCw, 
  Trash2, 
  Mail, 
  Building2, 
  Package, 
  MessageSquare,
  Calendar,
  Loader2,
  Users,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";
import { Link } from "wouter";
import { useAuth } from "@/contexts/AuthContext";

type SubmissionStatus = "new" | "contacted" | "converted" | "closed";

const statusConfig: Record<SubmissionStatus, { label: string; color: string; icon: React.ReactNode }> = {
  new: { label: "New", color: "bg-blue-500/10 text-blue-500 border-blue-500/20", icon: <Clock className="w-3 h-3" /> },
  contacted: { label: "Contacted", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", icon: <Mail className="w-3 h-3" /> },
  converted: { label: "Converted", color: "bg-green-500/10 text-green-500 border-green-500/20", icon: <CheckCircle className="w-3 h-3" /> },
  closed: { label: "Closed", color: "bg-gray-500/10 text-gray-500 border-gray-500/20", icon: <XCircle className="w-3 h-3" /> },
};

export default function AdminDashboard() {
  const { user, isLoading: authLoading } = useAuth();
  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [submissionToDelete, setSubmissionToDelete] = useState<number | null>(null);

  const { data: submissions, isLoading, refetch } = trpc.demo.list.useQuery(undefined, {
    enabled: !!user,
  });

  const updateStatusMutation = trpc.demo.updateStatus.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Status updated successfully");
        refetch();
      } else {
        toast.error(data.error || "Failed to update status");
      }
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred");
    },
  });

  const deleteMutation = trpc.demo.delete.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Submission deleted successfully");
        setDeleteDialogOpen(false);
        setSubmissionToDelete(null);
        refetch();
      } else {
        toast.error(data.error || "Failed to delete submission");
      }
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred");
    },
  });

  const handleStatusChange = (id: number, status: SubmissionStatus) => {
    updateStatusMutation.mutate({ id, status });
  };

  const handleDelete = () => {
    if (submissionToDelete) {
      deleteMutation.mutate({ id: submissionToDelete });
    }
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Show loading state while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-gold" />
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md text-center">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-gold" />
          </div>
          <h1 className="font-display text-2xl font-bold text-[#0D0D0D] mb-4">
            Admin Access Required
          </h1>
          <p className="text-[#666666] mb-6">
            Please sign in to access the admin dashboard and manage demo submissions.
          </p>
          <Button asChild className="gold-gradient text-[#0D0D0D] font-semibold">
            <a href="/api/auth/login">Sign In</a>
          </Button>
          <div className="mt-4">
            <Link href="/" className="text-sm text-[#666666] hover:text-gold transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Calculate stats
  const stats = {
    total: submissions?.length || 0,
    new: submissions?.filter(s => s.status === "new").length || 0,
    contacted: submissions?.filter(s => s.status === "contacted").length || 0,
    converted: submissions?.filter(s => s.status === "converted").length || 0,
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <header className="bg-dark text-white py-4 px-6 sticky top-0 z-50">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Site</span>
            </Link>
            <div className="h-6 w-px bg-white/20" />
            <h1 className="font-display text-xl font-bold">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/70">Welcome, {user.name || "Admin"}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => refetch()}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#666666]">Total Submissions</p>
                <p className="text-3xl font-bold text-[#0D0D0D]">{stats.total}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#0D0D0D]/5 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#0D0D0D]" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#666666]">New</p>
                <p className="text-3xl font-bold text-blue-500">{stats.new}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#666666]">Contacted</p>
                <p className="text-3xl font-bold text-yellow-500">{stats.contacted}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#666666]">Converted</p>
                <p className="text-3xl font-bold text-green-500">{stats.converted}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Submissions Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100">
            <h2 className="font-display text-xl font-bold text-[#0D0D0D]">Demo Requests</h2>
            <p className="text-sm text-[#666666] mt-1">Manage and track all demo request submissions</p>
          </div>

          {isLoading ? (
            <div className="p-12 text-center">
              <Loader2 className="w-8 h-8 animate-spin text-gold mx-auto mb-4" />
              <p className="text-[#666666]">Loading submissions...</p>
            </div>
          ) : submissions && submissions.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#F8F8F8]">
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold">Email</TableHead>
                    <TableHead className="font-semibold">Organisation</TableHead>
                    <TableHead className="font-semibold">Product</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Date</TableHead>
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow 
                      key={submission.id}
                      className={`hover:bg-[#F8F8F8]/50 cursor-pointer ${selectedSubmission === submission.id ? 'bg-gold/5' : ''}`}
                      onClick={() => setSelectedSubmission(selectedSubmission === submission.id ? null : submission.id)}
                    >
                      <TableCell className="font-medium">{submission.name}</TableCell>
                      <TableCell>
                        <a 
                          href={`mailto:${submission.email}`} 
                          className="text-gold hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {submission.email}
                        </a>
                      </TableCell>
                      <TableCell className="text-[#666666]">
                        {submission.organisation || "—"}
                      </TableCell>
                      <TableCell>
                        {submission.product ? (
                          <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                            {submission.product}
                          </Badge>
                        ) : (
                          <span className="text-[#666666]">—</span>
                        )}
                      </TableCell>
                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <Select
                          value={submission.status}
                          onValueChange={(value) => handleStatusChange(submission.id, value as SubmissionStatus)}
                        >
                          <SelectTrigger className={`w-[130px] h-8 text-xs ${statusConfig[submission.status as SubmissionStatus].color}`}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(statusConfig).map(([value, config]) => (
                              <SelectItem key={value} value={value}>
                                <div className="flex items-center gap-2">
                                  {config.icon}
                                  {config.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-[#666666] text-sm">
                        {formatDate(submission.createdAt)}
                      </TableCell>
                      <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => {
                            setSubmissionToDelete(submission.id);
                            setDeleteDialogOpen(true);
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Expanded Details */}
              {selectedSubmission && submissions.find(s => s.id === selectedSubmission)?.message && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-gray-100 p-6 bg-[#F8F8F8]/50"
                >
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-[#666666] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#0D0D0D] mb-1">Message</p>
                      <p className="text-[#666666]">
                        {submissions.find(s => s.id === selectedSubmission)?.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F8F8F8] flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#666666]" />
              </div>
              <h3 className="font-display text-lg font-semibold text-[#0D0D0D] mb-2">
                No submissions yet
              </h3>
              <p className="text-[#666666]">
                Demo requests will appear here when visitors submit the contact form.
              </p>
            </div>
          )}
        </motion.div>
      </main>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Submission</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this submission? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
