import { clsx } from "clsx";

type ButtonProps = {
  label: string;
  type?: "secondary";
};

export const Button = ({ type, label }: ButtonProps) => {
  const buttonClass = clsx("btn", {
    "btn--secondary": type === "secondary",
  });

  return <button className={buttonClass}>{label}</button>;
};
