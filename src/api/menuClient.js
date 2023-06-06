import apiClientV1 from "../utils/client";

export async function getMenu(part) {
  return apiClientV1
          .get("/api/home/getMenu",{},{
            // params:{
            //   part
            // },
          })
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            return err;
          });
}
