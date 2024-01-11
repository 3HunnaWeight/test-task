import React, {useRef, useState} from 'react';
import { FormRender } from '../FormRendering/FormRender';
import { DescriptionInput } from './DescriptionInput';
import { DataInput } from './DataInput';
export const CreateForm = () => {
  const [formConfig, setFormConfig] = useState([]);
  const [formData, setFormData] = useState({});
  const configRef = useRef();
  const dataRef = useRef();
  const fetchConfigAndData = () => {
    if(configRef.current.value && dataRef.current.value){
      fetch(configRef.current.value)
      .then(response => response.json())
      .then(data => setFormConfig(data));
      
    fetch(dataRef.current.value)
      .then(response => response.json())
      .then(data => setFormData(data));
    }
   else{
    alert('Заполните поля');
   }
  };
    return (
      <div className='form-creator-wrapper'>
        <DescriptionInput configRef={configRef} />
        <DataInput dataRef={dataRef} />
        <button className='right btn btn-success' onClick={()=>{fetchConfigAndData()}}>Построить форму</button>
        <FormRender formConfig={formConfig} formData={formData}/>
    </div>
    );
  };