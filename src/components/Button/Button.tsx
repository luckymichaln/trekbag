import { clsx } from "clsx";

type ButtonProps = {
  label: string;
  buttonType?: "secondary";
  onClick: () => void;
};

export const Button = ({ buttonType, label, onClick }: ButtonProps) => {
  const buttonClass = clsx("btn", {
    "btn--secondary": buttonType === "secondary",
  });

  return (
    <button onClick={onClick} className={buttonClass}>
      {label}
    </button>
  );
};
