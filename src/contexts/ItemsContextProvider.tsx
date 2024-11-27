import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { ItemsListState } from "../components/ItemsList/ItemsList";
import { initialItems } from "../lib/contants";

type ItemsContextType = {
  items: ItemsListState;
  itemsAmount: number;
  packedItemsAmount: number;
  handleAddItem: (itemText: string) => void;
  handleRemoveItem: (id: number) => void;
  handleCompleteAllItems: () => void;
  handleIncompleteAllItems: () => void;
  handleToggleItem: (id: number) => void;
  handleRemoveAllItems: () => void;
  handleResetAllItems: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ItemsContext = createContext<ItemsContextType>(
  {} as ItemsContextType
);

export const ItemsContextProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<ItemsListState>(() => {
    const itemsFromLocalStorage = localStorage.getItem("items");
    const parsedItems = itemsFromLocalStorage
      ? JSON.parse(itemsFromLocalStorage)
      : null;

    return parsedItems || initialItems;
  });

  const packedItemsAmount = useMemo(
    () => [...items].filter((item) => item.packed).length,
    [items]
  );
  const itemsAmount = items.length;

  const handleAddItem = (itemText: string) => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      packed: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveItem = (id: number) => {
    setItems((prev) => {
      return prev.filter((prevItem) => prevItem.id !== id);
    });
  };

  const handleCompleteAllItems = () => {
    setItems((prev) => {
      return prev.map((prevItem) => {
        return { ...prevItem, packed: true };
      });
    });
  };

  const handleIncompleteAllItems = () => {
    setItems((prev) => {
      return prev.map((prevItem) => {
        return { ...prevItem, packed: false };
      });
    });
  };

  const handleToggleItem = (id: number) => {
    setItems((prev) => {
      return prev.map((prevItem) => {
        if (prevItem.id === id) {
          return {
            ...prevItem,
            packed: !prevItem.packed,
          };
        }
        return prevItem;
      });
    });
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetAllItems = () => {
    setItems(initialItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        itemsAmount,
        packedItemsAmount,
        handleAddItem,
        handleRemoveItem,
        handleCompleteAllItems,
        handleIncompleteAllItems,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetAllItems,
      }}
    >
      <main>{children}</main>
    </ItemsContext.Provider>
  );
};
