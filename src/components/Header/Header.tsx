import { useMemo } from "react";
import { useItemsStore } from "../../stores/itemsStore";
import { Counter } from "../Counter/Counter";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  const items = useItemsStore((state) => state.items);
  const itemsAmount = items.length;
  const packedItemsAmount = useMemo(
    () => [...items].filter((item) => item.packed).length,
    [items]
  );

  return (
    <header>
      <Logo />
      <Counter allItems={itemsAmount} itemsPacked={packedItemsAmount} />
    </header>
  );
};
