import { createBrowserRouter, RouterProvider } from "react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/signup";
import PageNotFound from "./pages/PageNotFound";
import ShortLinkPage from "./pages/ShortLinkPage";
import { DarkModeProvider } from "./context/DarkModeContext";

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
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "short-link",
    element: <ShortLinkPage />,
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
