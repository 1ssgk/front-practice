import { useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../contexts/AuthContext";

export default function useOrder() {
  const { user } = useAuthContext();
  const queryClient = useQueryClient();
  const orderQuery = useQuery("order");

  return {};
}

