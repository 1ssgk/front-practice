import React from 'react';
import { useState } from 'react';


export default function CustomSelect(
  {
    data,
    getSelected
  }
) {



  const onChangeHandle =(e) =>{
    getSelected(e.target.value);
  }

  //const checkData = (data && data.size() > 0) ? true : false;
  const checkData = true;
  return (
    <>
      { checkData && (
        <div className="">
          <select className='w-24' onChange={onChangeHandle}>
            <option value="value1">key1</option>
            <option value="value2">key2</option>
            <option value="value3">key3</option>
          </select>
        </div>
      )}
    </>
  );
}

