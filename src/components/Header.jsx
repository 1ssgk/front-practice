import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./common/Button";

export default function Header() {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  /* 키워드 입력 시 */
  const handleChange = (e) => setKeyword(e.target.value);

  /* 키워드 검색 시 */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", e);
    /* @@ 보안 :태그 제거,script 문법 제거 */

    /* 검색 화면으로 이동 페이징? 무한 스크롤?*/
    navigate(`/search/${keyword}`);
  };

  /* 로그인 버튼 클릭 시 */
  const loginBtnClick = () => navigate("/signIn");

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link className="flex items-center basis-1/6" to="/">
        <h1>Go To Home</h1>
      </Link>
      {/* <section>
        <form className="flex w-full justify-center" onSubmit={handleSubmit}>
          <input
            className="w-7/12 p-2 outline-none bg-gray-100 text-gray-50"
            placeholder="Search..."
            type="text"
            value={keyword}
            onChange={handleChange}
          />
          <Button text={"Search"} onClick={handleSubmit} />
        </form>
      </section> */}
      <section>
        <Link to="/signIn">
          <button text={"Login"} onClick={loginBtnClick}>
            Login
          </button>
        </Link>
      </section>
    </header>
  );
}
