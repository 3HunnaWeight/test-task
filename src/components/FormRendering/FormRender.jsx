import React from 'react';
import { Form } from './Form';
export const FormRender = ({formConfig, formData}) => {
  return (
    <div>
        <h2>Отрисованные данные</h2>
        {formConfig!=undefined && formConfig.length >0
            ?  <Form formConfig={formConfig} formData={formData}/>
            :   <div>Нет данных</div> 
        }
    </div>
  );
};
