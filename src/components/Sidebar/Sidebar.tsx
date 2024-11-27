import styles from "./Sidebar.module.scss";

import { useItemsStore } from "../../stores/itemsStore";
import { AddItemForm } from "../AddItemForm/AddItemForm";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

export const Sidebar = () => {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <aside className={styles.sidebar}>
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </aside>
  );
};
