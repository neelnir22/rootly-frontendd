import { createBrowserRouter, RouterProvider } from "react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/signup";
import PageNotFound from "./pages/PageNotFound";
import AdminShortLinksPage from "./pages/AdminShortLinksPage";
import { DarkModeProvider } from "./context/DarkModeContext";
import AccountPage from "./pages/AccountPage";
import SettingsPage from "./pages/SettingsPage";
import CreateShortLinkPage from "./pages/CreateShortLinkPage";
import UserShortLinksPage from "./pages/UserShortLinksPage";
import { EmailVerification } from "./pages/EmailVerification";
import ProtectedRoute from "./components/ui/protected-route";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";

import DashboardHome from "./layout/Dashboard/DashboardHome";
import DashboardShortLinks from "./layout/Dashboard/DashboardShortLinks";
import DashboardAnalytics from "./layout/Dashboard/DashboardAnalytics";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute>
        <AccountPage />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "short-links",
        element: <DashboardShortLinks />,
      },
      {
        path: "analytics",
        element: <DashboardAnalytics />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "update-password",
        element: <UpdatePasswordPage />,
      },
    ],
  },
  {
    path: "admin/link-shortner",
    element: <AdminShortLinksPage />,
  },
  {
    path: "short-link",
    element: (
      <ProtectedRoute>
        <CreateShortLinkPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/all-short-link",
    element: <UserShortLinksPage />,
  },
  {
    path: "verify-email",
    element: <EmailVerification />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <Toaster />
        <RouterProvider router={router} />
      </DarkModeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
