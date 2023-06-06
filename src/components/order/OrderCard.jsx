import React from 'react';

import { RiDeleteBin5Fill } from "react-icons/ri";
import { RxReader } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";

export default function OrderCard({
  order,
  order:{ id, title, price, orederDt}
}) {

  console.log('order',order)

  const navigate = useNavigate();

  const detailBtnHandleClick = (e) => navigate(`/order/${id}` , { state :{ order } });

  const deleteBtnHandleClick = (e) =>{
    alert('삭제')
  }



  return (
    <li className="flex justify-between items-center my-7 mx-auto w-80 md:w-96">
      {/* <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} /> */}
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">주문번호 : {title}</p>
          <p className="text-lg">주문일자 : {orederDt}</p>
          <p>₩{price}</p>
        </div>
        <div className="text-2xl flex items-center">
          <RxReader
            className={ICON_CLASS}
            onClick={detailBtnHandleClick}
          />
          <RiDeleteBin5Fill
            className={ICON_CLASS}
            onClick={deleteBtnHandleClick}
          />
        </div>
      </div>
    </li>
  );
}

