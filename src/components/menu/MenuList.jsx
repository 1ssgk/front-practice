import React from "react";
import MenuCard from "./MenuCard";

export default function MenuList({ menu }) {
  /*
    메뉴를 가변적으로 갖고 싶어서 만들어 봤다.
    문제 - 화살표의 상태를 갖기위해 각각의 컴포넌트를 그려야한다.

    아직 React에 덜 익숙해서 맞는지 모르겠지만 이런 형태로 구현해 봤다.

    Menu 페이지에서 넘어온 menu(전체메뉴 데이터)를 이용하여
    갯수에 따라 MenuCard를 생성한다.
  */

  return (
    <>
      {menu.length > 0 &&
        menu.map((m) => <MenuCard key={m.menuId} menu={m} level={m.level} />)}
    </>
  );
}
