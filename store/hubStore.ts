// store/useHubStore.ts
import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:8000";

interface Hub {
  _id: string;
  title: string;
  prompt: string;
  description: string;
  aiContent: any;
  contributors: string[];
  visibility: string;
  slug?: string;
}

interface HubStore {
  hubs: Hub[];
  selectedHub: Hub | null;
  loading: boolean;
  error: string | null;

  fetchHubs: () => Promise<void>;
  fetchHubById: (slugId: string | null) => Promise<void>;
  createHub: (prompt: string) => Promise<void>;
  insertRepo: (data: any) => Promise<void>;
  updateHub: (repoId: string, data: Partial<Hub>) => Promise<void>;
  deleteHub: (repoId: string) => Promise<void>;
  forkRepo: (data: any) => Promise<void>;
}

export const useHubStore = create<HubStore>((set) => ({
  hubs: [],
  selectedHub: null,
  loading: false,
  error: null,

  fetchHubs: async () => {
    try {
      set({ loading: true, error: null });
      const res = await axios.get(`${API_URL}/api/hub`);
      set({ hubs: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  fetchHubById: async (slugId) => {
    try {
      set({ loading: true, error: null });
      const res = await axios.get(`${API_URL}/api/hub/${slugId}`);
      set({ selectedHub: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  createHub: async (prompt) => {
    try {
      set({ loading: true, error: null });
      await axios.post(`${API_URL}/api/hub/create`, { prompt });
      await useHubStore.getState().fetchHubs();
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  insertRepo: async (data) => {
    try {
      set({ loading: true, error: null });
      await axios.post("/api/hub/insert", data);
      await useHubStore.getState().fetchHubs();
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  updateHub: async (repoId, data) => {
    try {
      set({ loading: true, error: null });
      await axios.put(`/api/hub/${repoId}`, data);
      await useHubStore.getState().fetchHubs();
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  deleteHub: async (repoId) => {
    try {
      set({ loading: true, error: null });
      await axios.delete(`/api/hub/${repoId}`);
      await useHubStore.getState().fetchHubs();
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  forkRepo: async (data) => {
    try {
      set({ loading: true, error: null });
      await axios.post(`/api/hub/fork`, data);
      await useHubStore.getState().fetchHubs();
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
