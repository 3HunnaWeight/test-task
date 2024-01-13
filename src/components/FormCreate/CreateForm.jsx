import React, {useRef, useState} from 'react';
import { FormRender } from '../FormRendering/FormRender';
import { InputForLink } from './InputForLink';
export const CreateForm = () => {
  const [formConfig, setFormConfig] = useState([]);
  const [formData, setFormData] = useState({});
  const configRef = useRef();
  const dataRef = useRef();
  const fetchConfigAndData = () => {
    if(configRef.current.value && dataRef.current.value){
      fetch(configRef.current.value)
      .then(response => response.json())
      .then(data => setFormConfig(data))
      .catch((error) => {
        alert('Произошла ошибка при загрузке конфигурационного файла.',error);
      });
    fetch(dataRef.current.value)
      .then(response => response.json())
      .then(data => setFormData(data))
      .catch((error) => {
        alert('Произошла ошибка при загрузке файла данных.', error);
        
      });
    }
   else{
    alert('Заполните поля');
   }
   setFormConfig([]);
   setFormData({});
  };
    return (
      <div className='form-creator-wrapper'>
        <InputForLink
          inputRef={configRef}
          link={"https://3hunnaweight.github.io/test-task/config/config.json"}
          label={"URL \"Описание формы\":"}
        />
        <InputForLink
          inputRef={dataRef}
          link={"https://3hunnaweight.github.io/test-task/config/data.json"}
          label={"URL \"Данные\":"}
        />
        <button className='right btn btn-success' onClick={()=>{fetchConfigAndData()}}>Построить форму</button>
        {formConfig.length>0 ?
        <FormRender formConfig={formConfig} formData={formData}/>
        :null  
      }
    </div>
    );
  };