import apiClientV1 from "../utils/client";

export async function doSignIn(userData) {
  //위치정보
  //getUserGeoLocation();

  return apiClientV1
    .post("/api/ws/signIn", 
    {...userData}, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    .then((res) => {
      setAccessTokenInLocalStorage(res);
      return res;
    })
    .catch((err) => {
      return err;
    });
}

/* 위치정보 확인 */
function getUserGeoLocation(){
  if(!navigator.geolocation){
    throw "위치 정보가 지원되지 않습니다.";
  }
  navigator.geolocation.getCurrentPosition(getSuccess,getError);

}

function getSuccess(position){
  console.log('geolocation position',position)
  console.log('geolocation position.coords',position.coords)

  // 위도 , x
  const lat = position.coords.latitude;
  // 경도 , y
  const lng = position.coords.longitude;
  // 위도 경도 오차(m)
  const accuracy = Math.floor(position.coords.accuracy);
}
function getError(){
  console.error('Geolocation Error');
} 

/* accessToken localStorage에 보관 */
function setAccessTokenInLocalStorage(res){
  if(storageAvailable('localStorage')){
    localStorage.setItem('accessToken',res.accessToken); 
  }
}

/* localStorage 사용가능 여부 */
export function storageAvailable(type) {
  let storage;
  try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch (e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }

  
}

// export function checkSignIn(){
//   console.log('이거 체크는 하나용?')
// // 발급되었던 JWT TOKEN이 있는지 확인함

//   return apiClientV1
//     .get("/api/ws/auth/check", 
//     {}, {
//       headers: {
//         'content-type': 'application/x-www-form-urlencoded'
//       }
//     })
//     .then((res) => {
//       console.log('chekcSignIn then',res)
//       // 사용할수 있는 토큰
//       return {check:true};
//     })
//     .catch((err) => {
//       console.log('chekcSignIn catch',err)
//       // 사용불가능한 토큰 -> 다시 로그인 해주세요!
//       return {check:false};
//     });
// }

function getAccessToken(){
  if(storageAvailable('localStorage')){
    return "accessToken" in localStorage ? localStorage.getItem('accessToken') : null; 
  }
  return null;
}