"use client";
import { useState } from "react";
import { useProfissionais } from "@/hooks/use-profissionais";
import { useEspecialidades } from "@/hooks/use-especialidades";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

export default function AgendamentosPage() {
  const { data: profissionais } = useProfissionais();
  const { data: especialidades } = useEspecialidades();
  const queryClient = useQueryClient();

  const [profissionalId, setProfissionalId] = useState("");
  const [especialidadeId, setEspecialidadeId] = useState("");
  const [data, setData] = useState("");
  const [horarioInicio, setHorarioInicio] = useState("");
  const [clienteNome,] = useState("");
  const [clienteContato,] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      await api.post("/agendamentos", {
        profissionalId,
        especialidadeId,
        data,
        horarioInicio,
        clienteNome,
        clienteContato,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["agendamentos"] });
      alert("Agendamento realizado!");
    },
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Agendar Serviço</h1>
      <form onSubmit={(e) => { e.preventDefault(); mutate(); }} className="p-4 border rounded">
        <select value={profissionalId} onChange={(e) => setProfissionalId(e.target.value)} className="border p-2 w-full">
          <option value="">Selecione um profissional</option>
          {profissionais?.map((p) => <option key={p.id} value={p.id}>{p.nome}</option>)}
        </select>

        <select value={especialidadeId} onChange={(e) => setEspecialidadeId(e.target.value)} className="border p-2 w-full mt-2">
          <option value="">Selecione uma especialidade</option>
          {especialidades?.map((e) => <option key={e.id} value={e.id}>{e.nome}</option>)}
        </select>

        <input type="date" value={data} onChange={(e) => setData(e.target.value)} className="border p-2 w-full mt-2" />
        <input type="time" value={horarioInicio} onChange={(e) => setHorarioInicio(e.target.value)} className="border p-2 w-full mt-2" />
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" disabled={isPending}>
          {isPending ? "Agendando..." : "Agendar"}
        </button>
      </form>
    </div>
  );
}
