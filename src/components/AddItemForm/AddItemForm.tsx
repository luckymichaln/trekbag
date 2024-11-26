import { FormEvent, useRef, useState } from "react";
import { Button } from "../Button/Button";

type AddItemProps = {
  onAddItem: (itemText: string) => void;
};

export const AddItemForm = ({ onAddItem }: AddItemProps) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    if (!value) {
      alert("Value can't be empty");
      inputRef.current?.focus();
      return;
    }

    onAddItem(value);
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        autoFocus
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button label="Add to list" />
    </form>
  );
};
