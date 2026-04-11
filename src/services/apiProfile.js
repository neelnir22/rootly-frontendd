import toast from "react-hot-toast";

const backendUrlUser = import.meta.env.VITE_BACKEND_URL_USERS;
const backendUrlProfile = import.meta.env.VITE_BACKEND_URL_USERS_PROFILES;
const token = localStorage.getItem("user_token");

export async function getUserProfile() {
  const userProfileToken = localStorage.getItem("user_token");
  const res = await fetch(`${backendUrlUser}/view-profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userProfileToken}`,
    },
  });
  if (!res.ok) {
    const err = await res.json();
    toast.error(err.message || "something went wrong");
    return;
  }
  const data = await res.json();
  return data;
}

export async function updateUserName(req) {
  const res = await fetch(`${backendUrlProfile}/Name`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      firstName: req?.firstName,
      lastName: req?.lastName,
    }),
  });
  if (!res.ok) {
    const err = await res.json();
    toast.error(err.message || "something went wrong");
    return;
  }
  const data = await res.json();
  return data;
}

export async function updateUserEmail(email) {
  const res = await fetch(`${backendUrlProfile}/email`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: email,
    }),
  });
  if (!res.ok) {
    const err = await res.json();
    toast.error(err.message || "something went wrong");
    return;
  }
  const data = await res.json();
  return data;
}

export async function updateUserUserName(userName) {
  const res = await fetch(`${backendUrlProfile}/userName`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userName: userName,
    }),
  });
  if (!res.ok) {
    const err = await res.json();
    toast.error(err.message || "something went wrong");
    return;
  }
  const data = await res.json();
  return data.message;
}

export async function addLink(link) {
  const res = await fetch(`${backendUrlProfile}/add-links`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      links: link,
    }),
  });
  if (!res.ok) {
    const err = await res.json();
    toast.error(err.message || "something went wrong");
    return;
  }
  const data = await res.json();
  console.log({ data });
  return data;
}
