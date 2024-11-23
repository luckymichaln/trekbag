import { useState } from "react";
import { initialItems } from "../../lib/contants";

type ItemProps = {
  item: Item;
};

type Item = {
  id: number;
  name: string;
  packed: boolean;
};

type ItemsList = Item[];

export const ItemList = () => {
  const [items, setItems] = useState<ItemsList>(initialItems);

  return (
    <ul>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};

const Item = ({ item }: ItemProps) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>
      <button type="button">❌</button>
    </li>
  );
};
