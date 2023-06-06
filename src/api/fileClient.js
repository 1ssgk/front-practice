import apiClientV1 from "../utils/client";

/* 파일 목록 가져오기 */
export async function getFiles() {
  return apiClientV1
    .get(
      "/api/ws/file",
      {},
      {
        // params:{
        //   part
        // },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

/* 파일 다운로드 */
export async function downloadFile(data) {
  return apiClientV1
    .get(
      `/api/ws/file/${data}`,
      {
        responseType:"blob"
      },
      {}
    )
    .then(res => {
      const disposition = res.headers["content-disposition"];
      const name = decodeURIComponent(disposition.split("''")[1]);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download",name);
      document.body.appendChild(link);
      link.click();
      link.remove();
      //return res.data;
    })
    .catch((err) => {
      return err;
    });
}


export async function uploadFile(data) {
  return apiClientV1
    .post("/api/ws/file/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .catch((e) => {
      console.error(e);
    })
    .then((response) => {
      return true;
    });
}
