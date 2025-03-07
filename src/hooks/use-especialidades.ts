import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

type Especialidade = { id: string; nome: string; duracaoMin: number };

export function useEspecialidades() {
  return useQuery({
    queryKey: ["especialidades"],
    queryFn: async () => {
      const { data } = await api.get<Especialidade[]>("/especialidades");
      return data;
    },
  });
}
