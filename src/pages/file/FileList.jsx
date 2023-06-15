import React from 'react';
import FileCard from '../../components/file/FileCard';

import CustomSelect from '../../components/common/CustomSelect';
import { useState } from 'react';

export default function FileList() {

  const hasFiles = testList && testList.length > 0;

  const ICON_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";

  //const [selected, setSelected] = useState();
  

  const filterList = [
    {id:1, text:'111', value:'val1'},
    {id:2, text:'222', value:'val2'},
    {id:3, text:'333', value:'val3'},
  ]

  const getSelected = (data)=>{
    //setSelected(data);

    alert('해당 필터로 데이터 정렬해서 가져오기 : '+data)
  }
//flex-row-reverse
  return (
    <section className='h-full max-w-lg min-w-lg justify-center items-center mr-auto ml-auto'>
        <p className='text-2xl text-left font-bold pl-4 pt-4 pb-4 border-b border-gray-300'>
          파일목록
        </p>
        {hasFiles && (
        <div className='flex flex-col h-full justify-center text-lg mt-auto mb-auto'>
          <div className="">
            <div className="p-4 px-8 flex justify-end">
              <CustomSelect data={filterList} getSelected={getSelected}/>
            </div>
            <ul className='p-4 px-8 items-center justify-center'>
              {testList && 
              testList.map((file)=>(
                <FileCard key={file.id} file={file}/>
              ))}
            </ul>
          </div>
        </div>
        )}

    </section>
  );
}



const testList = [
  {
    id : 1,
    title : '000111',
    price : 3000,
    orederDt : '2023-03-01'
  },
  {
    id : 2,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 3,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 4,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 5,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 6,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 7,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 8,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 9,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 10,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  }
]

