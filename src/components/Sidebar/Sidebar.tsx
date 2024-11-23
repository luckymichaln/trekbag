import { AddItemForm } from "../AddItemForm/AddItemForm";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <AddItemForm />
      <ButtonGroup />
    </aside>
  );
};
