import { create } from "zustand";
import axios from "axios";
import api from "@/services/api";
import { AuthStore } from "@/lib/types";

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null, // Check if running in browser
  loading: false,
  error: null,

  // Login with email/password
  login: async (email, password) => {
    set({ loading: true });
    try {
      const res = await api.post("/user/login", {
        email,
        password,
      });

      const { user, token } = res.data;
      localStorage.setItem("token", token);
      set({ user, token, error: null, loading: false });
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Login failed",
        loading: false,
      });
    }
  },

  // Sign up
  signup: async (data) => {
    set({ loading: true });
    try {
      const res = await axios.post("/user/create", data);
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      set({ user, token, loading: false, error: null });
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Signup failed",
        loading: false,
      });
    }
  },

  syncGithubUser: async (sessionUser: any) => {
    set({ loading: true });
    try {
      const res = await api.post("/user/create", {
        name: sessionUser.name,
        email: sessionUser.email,
        avatar: sessionUser.image,
        isGithub: true,
      });
      const { user, accessToken } = res.data.result;
      localStorage.setItem("token", accessToken);
      set({ user, token:accessToken, loading: false, error: null });
    } catch (err: any) {
      console.error("GitHub sync failed: ", err); // Debugging error log
      set({
        error: err.response?.data?.message || "GitHub login failed",
        loading: false,
      });
    }
  },

  fetchCurrentUser: async () => {
    set({ loading: true });
    const token = localStorage.getItem("token"); // Always get the token on every call
    if (!token) {
      set({ user: null, loading: false }); // If no token, set user to null
      return;
    }

    try {
      const res = await api.get("/user/own", {
        headers: { Authorization: `Bearer ${token}` },
      });
      set({ user: res.data, loading: false });
    } catch (err) {
      set({ user: null, loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
