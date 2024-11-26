import Select from "react-select";
import { EmptyView } from "../EmptyView/EmptyView";
import { useState } from "react";

export type ItemsListState = Item[];

type Item = {
  id: number;
  name: string;
  packed: boolean;
};

type ItemListProps = {
  items: Item[];
  handleRemoveItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
};

type ItemProps = {
  item: Item;
  onRemoveItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export const ItemsList = ({
  items,
  handleToggleItem,
  handleRemoveItem,
}: ItemListProps) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b): number => {
    if (sortBy === "packed") {
      return Number(b.packed) - Number(a.packed);
    }

    if (sortBy === "unpacked") {
      return Number(a.packed) - Number(b.packed);
    }

    return 0;
  });

  return (
    <ul>
      {!items.length ? <EmptyView /> : null}

      {items.length > 1 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option?.value as string)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => (
        <Item
          item={item}
          key={item.id}
          onToggleItem={handleToggleItem}
          onRemoveItem={handleRemoveItem}
        />
      ))}
    </ul>
  );
};

const Item = ({ item, onToggleItem, onRemoveItem }: ItemProps) => {
  const handleRemoveItem = () => onRemoveItem(item.id);

  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button type="button" onClick={handleRemoveItem}>
        ❌
      </button>
    </li>
  );
};
