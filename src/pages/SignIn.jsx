import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doSignIn } from "../api/loginClient";

export default function SignIn() {
  const [loginData, setLoginData] = useState({});
  const [isLoding, setIsLoding] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoding(true);
    
    /* login api */
    doSignIn(loginData) //
    .then((res)=>{
      setTimeout(()=>{
        navigate('/');
      },1000);
      
      
    }) //
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((loginData) => ({ ...loginData, [name]: value }));
  };

  return (
    <section className="h-full flex flex-col items-center justify-center border-2">
      <h2 className="text-3xl">로그인</h2>
      <form
        className="flex flex-col px-12 justify-between"
        onSubmit={handleSubmit}
      >
        <input
          className="my-2 border-black focus:border-cyan-600"
          type="text"
          name="username"
          value={loginData.username ?? ""}
          required
          onChange={handleChange}
          placeholder="아이디"
        />
        <input
          className="my-2"
          type="password"
          name="password"
          value={loginData.password ?? ""}
          required
          onChange={handleChange}
          placeholder="비밀번호"
        />
        <button className="bg-cyan-600 rounded-sm text-white font-semibold text-lg">
          Login
        </button>
      </form>
    </section>
  );
}

