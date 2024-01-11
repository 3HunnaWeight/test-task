import React from 'react';

export const Form = ({formConfig, formData}) => {
  return (
    <form className="created-form">
    {formConfig.map((field) => (
      <div key={field.id}>
        <label htmlFor={field.id}>{field.label}:</label>
        {field.type === 'select' ? (
          <select
            id={field.id}
            name={field.id}
            defaultValue={formData[field.id]}
          >
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            defaultValue={formData[field.id] || ''}
          />
        )}
      </div>
    ))}
  </form>
  )
}
