import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/contants";
import { Item } from "../components/ItemsList/ItemsList";

export type ItemsState = {
  items: Item[];
  addItem: (itemLabel: string) => void;
  removeItem: (id: number) => void;
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
  toggleItem: (id: number) => void;
  removeAllItems: () => void;
  resetToInitial: () => void;
};

export const useItemsStore = create(
  persist<ItemsState>(
    (set) => ({
      items: initialItems,
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set((state) => ({
          items: state.items.map((item) => {
            return { ...item, packed: true };
          }),
        }));
      },
      markAllAsIncomplete: () => {
        set((state) => ({
          items: state.items.map((item) => {
            return { ...item, packed: false };
          }),
        }));
      },
      toggleItem: (id: number) => {
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                packed: !item.packed,
              };
            }
            return item;
          }),
        }));
      },
      addItem: (itemLabel: string) => {
        const newItem = {
          name: itemLabel,
          id: Date.now(),
          packed: false,
        };
        set((state) => ({ items: [...state.items, newItem] }));
      },
      removeItem: (id: number) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
    }),
    {
      name: "items",
    }
  )
);
