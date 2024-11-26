type CounterProps = {
  allItems: number;
  itemsPacked: number;
};

export const Counter = ({ allItems, itemsPacked }: CounterProps) => {
  return (
    <p>
      <b>{allItems}</b> / {itemsPacked} items packed
    </p>
  );
};
