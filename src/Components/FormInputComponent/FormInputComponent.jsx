import React from 'react';
import "./FormInputComponentStyle.scss"

const FormInputComponent = ({ handleChange, label, ...otherProps }) => {
  
 
  
  return (
  <div className='group'>
    <input className='form-input'  onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
)}

export default FormInputComponent;