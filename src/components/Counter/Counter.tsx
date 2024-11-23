type CounterProps = {
  packedItemsAmount: number;
  allItemsAmount: number;
};

export const Counter = ({
  packedItemsAmount,
  allItemsAmount,
}: CounterProps) => {
  return (
    <p>
      <b>{packedItemsAmount}</b> / {allItemsAmount} items packed
    </p>
  );
};
