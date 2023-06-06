import apiClientV1 from "../utils/client";


export async function getOrders(){
  return apiClientV1
  .get(`/api/ws/order`)
  .then((res)=>{
    console.log('get order',res)
  })
  .catch((err)=>{
    console.error('[ERROR] get order',err)
  });
}

export async function getOrderDetails(id) {
  return apiClientV1
    .get(`/api/ws/order/${id}`, 
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