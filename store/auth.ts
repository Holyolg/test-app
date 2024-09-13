import { create } from "zustand";

interface AuthStore {
	isAuthenticated: boolean;
	setAuthenticated: (auth: boolean) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
	isAuthenticated: false,
	setAuthenticated: (auth) => set({ isAuthenticated: auth }),
}));
