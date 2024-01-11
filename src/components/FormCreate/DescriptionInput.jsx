import React from 'react';

export const DescriptionInput = ({configRef}) => {
  return (
    <div className='form-description'>
    <label htmlFor="configFileUrl">URL "Описание формы":</label>
    <input ref={configRef} className='input-link'
      type="text"
      id="configFileUrl"
      defaultValue={"https://3hunnaweight.github.io/test-task/config/config.json"}
    />
  </div>
  )
}
