import React from 'react';

export const DataInput = ({dataRef}) => {
  return (
    <div className='data-for-form'>
    <label htmlFor="dataFileUrl">URL "Данные":</label>
    <input ref={dataRef} className='input-link'
      type="text"
      id="dataFileUrl"
      defaultValue={"http://localhost:3000/config/data.json"}
    />
  </div>
  )
}
