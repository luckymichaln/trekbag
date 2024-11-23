export type ItemsListState = Item[];

type Item = {
  id: number;
  name: string;
  packed: boolean;
};

type ItemListProps = {
  items: Item[];
  handleRemoveItem: (id: number) => void;
  handleToggleComplete: (id: number) => void;
};

type ItemProps = {
  item: Item;
  onRemoveItem: (id: number) => void;
  onToggleComplete: (id: number) => void;
};

export const ItemsList = ({
  items,
  handleToggleComplete,
  handleRemoveItem,
}: ItemListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onToggleComplete={handleToggleComplete}
          onRemoveItem={handleRemoveItem}
        />
      ))}
    </ul>
  );
};

const Item = ({ item, onToggleComplete, onRemoveItem }: ItemProps) => {
  const handleRemoveItem = () => onRemoveItem(item.id);

  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleComplete(item.id)}
        />
        {item.name}
      </label>
      <button type="button" onClick={handleRemoveItem}>
        ❌
      </button>
    </li>
  );
};
