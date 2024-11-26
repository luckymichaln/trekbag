import { useContext } from "react";
import { AddItemForm } from "../AddItemForm/AddItemForm";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { ItemsContext } from "../../contexts/ItemsContextProvider";

export const Sidebar = () => {
  const { handleAddItem } = useContext(ItemsContext);

  return (
    <aside className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </aside>
  );
};
