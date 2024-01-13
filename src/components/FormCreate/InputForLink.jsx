import React from 'react'

export const InputForLink = ({inputRef,link,label}) => {
  return (
    <div className='data-for-form'>
    <label htmlFor="dataFileUrl">{label}</label>
    <input ref={inputRef} className='input-link'
      type="text"
      id="dataFileUrl"
      defaultValue={link}
    />
  </div>
  )
}
