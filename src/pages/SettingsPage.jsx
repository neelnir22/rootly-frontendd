import ProtectedRoute from "@/components/ui/protected-route";
import NavBar from "@/layout/NavBar/NavBar";
import { SettingForm } from "@/layout/Settings/SettingsForm";

function SettingsPage() {
  return (
    <div>
      <ProtectedRoute>
        <NavBar />
        <SettingForm />
      </ProtectedRoute>
    </div>
  );
}

export default SettingsPage;
