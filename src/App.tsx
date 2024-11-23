import { useState } from "react";
import { BackgroundHeading } from "./components/BackgroundHeading/BackgroundHeading";
import { Header } from "./components/Header/Header";
import { ItemsList, ItemsListState } from "./components/ItemsList/ItemsList";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { initialItems } from "./lib/contants";
import { AddItemForm } from "./components/AddItemForm/AddItemForm";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import { Logo } from "./components/Logo/Logo";
import { Counter } from "./components/Counter/Counter";

function App() {
  const [items, setItems] = useState<ItemsListState>(initialItems);
  const itemsPacked = items.filter((item) => item.packed);

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

  const handleToggleComplete = (id: number) => {
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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header>
          <Logo />
          <Counter
            packedItemsAmount={itemsPacked.length}
            allItemsAmount={items.length}
          />
        </Header>
        <ItemsList
          items={items}
          handleToggleComplete={handleToggleComplete}
          handleRemoveItem={handleRemoveItem}
        />
        <Sidebar>
          <AddItemForm onAddItem={handleAddItem} />
          <ButtonGroup
            onRemoveAllItems={handleRemoveAllItems}
            onCompleteAllItems={handleCompleteAllItems}
            onIncompleteAllItems={handleIncompleteAllItems}
            onResetAllItems={handleResetAllItems}
          />
        </Sidebar>
      </main>
    </>
  );
}

export default App;
