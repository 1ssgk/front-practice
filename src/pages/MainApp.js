import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/menu/Menu";
export default function MainApp() {
  return (
    <>
      <div className="flex flex-col h-full">
        <section className="flex-2">
          <Header />
        </section>
        <section className="flex-1">
          <div className="flex h-full max-h-full">
            <div className="flex-3 px-2 py-2 inline-block min-w-52 w-52 border-r border-gray-300 ">
              <Menu part={"home"} />
            </div>
            <div className="flex-1">
              <Outlet />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
