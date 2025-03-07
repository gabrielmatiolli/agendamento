import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function useCreateProfissional() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (nome: string) => {
      await api.post("/profissionais", { nome });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profissionais"] });
    },
  });
}
