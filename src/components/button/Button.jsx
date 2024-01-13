/* eslint-disable react/prop-types */
import styles from "./button.module.css";
import ForwardIcon from "../../assets/icons/forwardArrow.svg?react";

/**
 * Button is a reusable component that renders a button element.
 * It accepts several props:
 * - label: The text to display on the button.
 * - onClick: The function to execute when the button is clicked.
 * - variant: The style variant of the button, can be "secondary" or any other value (defaults to "primary").
 * - className: Additional CSS classes to apply to the button.
 * - size: The size of the button, can be "small" or any other value (defaults to "default").
 */

const Button = ({
  label = "SEE PRODUCT",
  onClick,
  variant = "primary",
  className,
  icon=false,
  size = "default",
  onSubmit
}) => {
  

  // defines the class names for the button variants.
  const variantClassNames = {
    primary: styles.primary,
    secondary: styles.secondary,
    borderless: styles.borderless,
  };

  const sizeClassNames = {
    default: styles.default_size,
    small: styles.small_size,
  };

  // defines variant and size variables to be used in the button element.
  const variantType = variantClassNames[variant];
  const sizeType = sizeClassNames[size];

  return (
    <button
      className={`${variantType} ${sizeType} ${className}`}
      onClick={onClick} onSubmit={onSubmit} 
    >
      {label}
      {icon && <ForwardIcon />}
    </button>
  );
};

export default Button;
