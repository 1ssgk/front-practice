import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuCard({
  menu: { menuId, name, path, actived }
}) {
  /*
    TODO: 좋은 방식인지는 아직 모르겠음. 추후 좋은 방식을 발견하면 수정 할 예정. @@

    메뉴별로 갖게 될 카드
    menu_id 별 MenuCard Component를 생성하고
    subMenus(하위메뉴)가 존재하면 
    MenuList Component를 이용하여 해당 아이디 아랫부분에 List를 이어서 나열한다.

    ->> 변경 ->>
    [기존]
    Menu -> MenuList -> MenuCard 형식에서

    [변경]
    Menu -> MenuCard 형식으로 생략해볼수 있을 것 같아서 생략 해봄

    성공!
  */
  const [isArrowClick, setIsArrowClick] = useState(false);

  const navigate = useNavigate();

  const handleMenuClick = () => navigate(path);


  let hideAndShow = `transition-all ease-out duration-500 overflow-y-hidden ${
    actived ? "max-h-40" : "max-h-0"
  }`;

  return (
    <>
      <div className={hideAndShow}>
        <li key={menuId} className="my-2">
          <div
            className={`flex flex-row text-center`}
            style={{ paddingLeft: 5 }}
          >
          <p className="text-sm cursor-default hover:underline hover:scale-105 hover:font-semibold" title={name} onClick={handleMenuClick}>
            {name}
          </p>
          </div>
        </li>
      </div>
    </>
  );
}
