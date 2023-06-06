import React from 'react';
import { BiSearch } from "react-icons/bi";


export default function Button({text,onClick}) {
  return (
    <button className='bg-zinc-300 px-4 rounded-sm hover:brightness-110' onClick={onClick}>
      <BiSearch className='cursor-pointer'/>
    </button>
  );
}

