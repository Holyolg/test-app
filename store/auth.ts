import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
	isAuthenticated: boolean;
	setAuthenticated: (auth: boolean) => void;
}

export const useAuthStore = create<AuthStore, [["zustand/persist", unknown]]>(
	persist(
		(set) => ({
			isAuthenticated: false,
			setAuthenticated: (auth: boolean) => set({ isAuthenticated: auth }),
		}),
		{
			name: "auth-storage",
		}
	)
);
