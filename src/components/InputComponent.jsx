/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

function InputComponent({
  type, name, value, onChange, placeholder,
}) {
  const handleChange = (event) => {
    if (name === 'title') {
      const text = event.target.value;
      onChange(text.length <= 50 ? text : value);
    } else {
      onChange(event.target.value);
    }
  };

  const inputProps = {
    name,
    value,
    onChange: handleChange,
    spellCheck: false,
    placeholder,
  };

  return type === 'textarea' ? (
    <textarea {...inputProps} className="input-form-body" rows={5} />
  ) : (
    <input {...inputProps} className="input-form-title" />
  );
}

export default InputComponent;
