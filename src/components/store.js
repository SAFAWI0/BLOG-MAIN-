import { create } from "zustand";

export const useAppStore = create((set) => ({
  cart: [],
  isOpen: false,
  setOpen: (isOpen) => set({ isOpen }),
  setCart: (cart) => set({ cart }),
}));
