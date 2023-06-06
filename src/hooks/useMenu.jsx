import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMenu } from "../api/menuClient";


export default function useMenu(part) {
  const queryClient = useQueryClient();
  /* menu 데이터 가져오기 */
  const menuQuery = useQuery(["menu",part],()=>getMenu(part),{
    refetchOnWindowFocus : false,
  });

  /* 메뉴 추가 하기 */
  // const addMenu = useMutation(
  //   ()=>
  // );

  /* 메뉴 삭제 하기 */
  //const removeItem = useMutation((id)=>removeMunu());

  return { menuQuery };
}
