import { useItemsStore } from "../../stores/itemsStore";
import { AddItemForm } from "../AddItemForm/AddItemForm";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

export const Sidebar = () => {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <aside className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </aside>
  );
};
