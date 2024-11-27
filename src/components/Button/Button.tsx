import { clsx } from "clsx";

import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  buttonType?: "secondary";
  onClick?: () => void;
};

export const Button = ({ buttonType, label, onClick }: ButtonProps) => {
  const buttonClass = clsx(styles.btn, {
    [styles.btnSecondary]: buttonType === "secondary",
  });

  return (
    <button onClick={onClick} className={buttonClass}>
      {label}
    </button>
  );
};
