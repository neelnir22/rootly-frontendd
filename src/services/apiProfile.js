import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL_USERS;
const token = localStorage.getItem("user_token");

export async function getUserProfile() {
  const res = await fetch(`${backendUrl}/view-profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const err = await res.json();
    toast.error(err.message || "something went wrong");
    return "";
  }
  const data = await res.json();
  return data;
}
