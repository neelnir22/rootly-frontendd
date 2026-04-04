import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL_USERS_PROFILES;
const token = localStorage.getItem("user_token");

export async function createLinkShort(link) {
  const res = await fetch(`${backendUrl}/short-link`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ link: link }),
  });

  if (!res.ok) {
    const err = await res.json();
    toast.error(err.message || "Error creating short link");
  }

  const data = await res.json();
  return { message: data.message, result: data.result };
}
