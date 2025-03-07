import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

type Profissional = { id: string; nome: string };

export function useProfissionais() {
  return useQuery({
    queryKey: ["profissionais"],
    queryFn: async () => {
      const { data } = await api.get<Profissional[]>("/profissionais");
      return data;
    },
  });
}
