import ProtectedRoute from "@/components/ui/protected-route";
import { UserShortLinks } from "@/layout/UserShortLinks/UserShortLinks";

function UserShortLinksPage() {
  return (
    <ProtectedRoute>
      <UserShortLinks />;
    </ProtectedRoute>
  );
}

export default UserShortLinksPage;
