import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL_USERS;

export async function signUp({
  email,
  password,
  firstName,
  lastName,
  userName,
}) {
  const res = await fetch(`${backendUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    toast.error(err.message || "something went wrong");
    return "";
  }

  const data = await res.json();
  return { token: data.token, message: data.message };
}

export async function login({ email, password }) {
  const res = await fetch(`${backendUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    toast.error(err.message || "something went wrong");
    return "";
  }

  const data = await res.json();
  return { token: data.token, message: data.message };
}
