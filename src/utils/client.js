import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { storageAvailable } from "../api/loginClient";
import ErrorPage from "../pages/error/ErrorPage";

const apiClientV1 = axios.create({
  baseURL: "http://localhost:3009",
  headers: {
    //Accept: "application/json",
    useQueryString: "true",
  },
});

/* 
  REQUEST(요청) 인터셉터 
  요청 직전에 호출
*/
apiClientV1.interceptors.request.use(
  (config) => {
    /* 요청 성공 직전 호출 */
    /* axios 설정값을 넣음 (사용자 정의 설정도 추가 가능) */
    if(storageAvailable('localStorage')){
      if(localStorage.getItem('accessToken')){
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
      }
    }
    return config;
  },
  (error) => {
    /* 요청 에러가 발생했을 때 수행할 로직 */
    console.log('request 에러발생!!!',error)
    return Promise.reject(error);
  }
);

/* 
  RESPONSE(응답) 인터셉터 
  응답 직전에 호출
*/
apiClientV1.interceptors.response.use(
  (response) => {
    /* HTTP STATUS === 200 일 때 */
    //const res = response.data;
    return response;
  },
  (error) => {
    /* HTTP STATUS !== 200 일 때 */
    const origin = window.location.origin;
    const url = "/api/checkSignIn";
    const requestURL = error.response.request.responseURL;
    if(requestURL === origin+url){
      console.log('노체크')
    }
    //window.location = `/error/${error.response.status}`;

    //return Promise.reject(error);
  }
);

export default apiClientV1;
