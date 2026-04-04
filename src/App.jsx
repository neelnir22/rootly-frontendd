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
    path: "admin/link-shortner",
    element: <AdminShortLinksPage />,
  },
  {
    path: "admin",
    element: <AccountPage />,
  },
  {
    path: "admin/settings",
    element: <SettingsPage />,
  },
  {
    path: "short-link",
    element: <CreateShortLinkPage />,
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
