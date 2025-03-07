"use client";
import { Button } from "@/components/ui/button";
import { useProfissionais } from "@/hooks/use-profissionais";

export default function ProfissionaisPage() {
  const { data: profissionais, isLoading, error } = useProfissionais();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profissionais</h1>
      {isLoading && <p>Carregando...</p>}
      {error && <p className="text-red-500">Erro ao carregar profissionais</p>}
      <ul>
        {profissionais?.map((p) => (
          <li key={p.id} className="border p-2 mb-2">{p.nome}</li>
        ))}
      </ul>

      <Button>Adicionar profissional</Button>
    </div>
  );
}
