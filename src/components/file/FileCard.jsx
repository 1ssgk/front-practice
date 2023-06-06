import React from "react";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { RxDownload } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { downloadFile } from "../../api/fileClient";

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";

export default function FileCard({
  file,
  file: { id, title, price, orederDt },
}) {
  //console.log('file',file)

  const navigate = useNavigate();

  const downBtnHandleClick = (e) => {
    //alert("다운로드");
    downloadFile("1");
  };

  const deleteBtnHandleClick = (e) => {
    alert("삭제");
  };

  return (
    <li className="flex justify-between items-center my-7 mx-auto min-w-lg max-w-lg w-full">
      {/* <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} /> */}
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-2/8">
          <p className="">날짜</p>
        </div>
        <div className="basis-2/8">
          <p className="">만든이</p>
        </div>
        <div className="basis-1/8">
          <p className=" text-gray-400">Excel(확장자)</p>
        </div>
        <div className="basis-3/8">
          <p className="">이름.Excel</p>
        </div>
        <div className="flex items-center">
          <RxDownload className={ICON_CLASS} onClick={downBtnHandleClick} />
          <RiDeleteBin5Fill
            className={ICON_CLASS}
            onClick={deleteBtnHandleClick}
          />
        </div>
      </div>
    </li>
  );
}
