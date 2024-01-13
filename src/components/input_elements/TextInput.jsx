/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './text_input.module.css'

// dependency imports
import { useField,Formik } from 'formik'


// eslint-disable-next-line react/prop-types
const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={styles.text_input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null }
    </div>
  )
}

export default TextInput
