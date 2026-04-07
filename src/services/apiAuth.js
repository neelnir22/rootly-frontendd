import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL_USERS;
const token = localStorage.getItem("user_token");

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
    return;
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
    return;
  }

  const data = await res.json();
  return { token: data.token, message: data.message };
}

export async function verifyOtp(otp) {
  const res = await fetch(`${backendUrl}/email-verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      otp: otp,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    toast.error(err.message || "something went wrong");
    return;
  }

  const data = await res.json();
  return { token: data.token, message: data.message };
}

export async function manualEmailVerify() {
  const response = await fetch(`${backendUrl}/verify-my-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const err = await response.json();
    toast.error(err.message || "Something Went wrong");
  }
  const data = await response.json();
  toast.success(data.message);
}
