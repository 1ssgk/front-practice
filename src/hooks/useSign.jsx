import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { checkSignIn } from "../api/loginClient";


export default function useSign() {
  const queryClient = useQueryClient();
  /*  데이터 가져오기 */
  const signQuery = useQuery(["isSignIn"],()=> checkSignIn(),{
    refetchOnWindowFocus : false,
  });

  /* 메뉴 추가 하기 */
  // const addMenu = useMutation(
  //   ()=>
  // );

  /* 메뉴 삭제 하기 */
  //const removeItem = useMutation((id)=>removeMunu());



  return { signQuery };
}
