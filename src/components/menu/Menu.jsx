import React from 'react';
import MenuCard from './MenuCard';

export default function Menu() {

  var menus = [
    { menuId:1, name:"주문", path:"/order", actived:true },
    { menuId:2, name:"파일업로드", path:"/file/upload", actived:true },
    { menuId:3, name:"파일목록", path:"/file/list", actived:true },
    { menuId:4, name:"채팅목록", path:"/chatting/list", actived:true },
  ];

  return (
    <ul>
      {menus && menus.length > 0 &&
        menus.map((m) => <MenuCard key={m.menuId} menu={m} />)}
    </ul>
  );
}