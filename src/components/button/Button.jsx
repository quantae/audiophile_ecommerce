/* eslint-disable react/prop-types */
import styles from "./button.module.css";
import  ForwardIcon from '../../assets/icons/forwardArrow.svg?react';

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
    label= 'SEE PRODUCT', 
    onClick, 
    variant = "primary", 
    className, 
    size = "defaultSize",
    icon
     }) => {

        const handleConlick = () => {

        // only call the onClick prop if it is provided. 
        if (onClick) {
        onClick();
      }
        };

        
        const variantClassNames = {
            primary: styles.primary,
            primaryDark: styles.primary_dark,
            secondary: styles.secondary,
            borderless: styles.borderless,
        };

        const sizeClassNames = {
            defaultSize: styles.default_size,
            small: styles.small_size,
        };

        const variantType =variantClassNames[variant];
        const sizeType = sizeClassNames[size];


    return (
        <button
            className={`${variantType} ${sizeType} ${className}`}
            onClick={onClick}
        >
            {label}
            {icon && <ForwardIcon/>}
        </button>
    );
};

export default Button;
