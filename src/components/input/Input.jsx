/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./input.module.css";
import { useField } from "formik";

export const RadioInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.radio_div}>
      <input
        className={`${styles.radio_input} ${className}`}
        {...field}
        {...props}
      />
      <label className={styles.radio_label} htmlFor={props.id || props.name}>
        {label}
      </label>

      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const TextInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.textInput_div}>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className={`${styles.text_input} ${className}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};
