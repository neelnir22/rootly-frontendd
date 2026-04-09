import ProtectedRoute from "@/components/ui/protected-route";
import { AdminShortLinkDetailsPage } from "@/layout/AdminShortLink/AdminShortLinkDetailsPage";

function AdminShortLinksPage() {
  return (
    <ProtectedRoute>
      <AdminShortLinkDetailsPage />
    </ProtectedRoute>
  );
}

export default AdminShortLinksPage;
