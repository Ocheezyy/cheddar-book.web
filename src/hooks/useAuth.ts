import { useState } from "react";

export function useAuth() {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || sessionStorage.getItem("token");
  });

  const login = async (email: string, password: string, remember: boolean) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await res.json();
    const accessToken = data.access_token;

    if (remember) {
      localStorage.setItem("token", accessToken);
    } else {
      sessionStorage.setItem("token", accessToken);
    }

    setToken(accessToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setToken(null);
  };

  const getAuthHeader = () => {
    if (!token) return {};
    return { Authorization: `Bearer ${token}` };
  };

  return { token, login, logout, getAuthHeader };
}