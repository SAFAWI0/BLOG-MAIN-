import { create } from "zustand";

export const useAppStore = create((set) => ({
  cart: [],
  isOpen: false,
  isOpenT: false,
  setOpenT: (isOpenT) => set({ isOpenT }),
  setOpen: (isOpen) => set({ isOpen }),
  setCart: (cart) => set({ cart }),
}));
