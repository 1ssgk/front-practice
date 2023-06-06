import apiClientV1 from "../utils/client";


export async function onUserStateChanege(userData) {
  return apiClientV1
    .get("/api/ws/authenticate", 
    {}, {
      headers: {
        //'content-type': 'application/x-www-form-urlencoded'
      }
    })
    .then((res) => {
      console.log('권한 체크 성공')
      return res;
    })
    .catch((err) => {
      console.log('권한 체크 에러')
      return err;
    });
}