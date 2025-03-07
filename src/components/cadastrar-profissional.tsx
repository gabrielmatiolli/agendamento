"use client";
import { useState } from "react";
import { useCreateProfissional } from "@/hooks/use-create-profissional";

export default function CadastrarProfissional() {
  const [nome, setNome] = useState("");
  const { mutate, isPending } = useCreateProfissional();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(nome, {
      onSuccess: () => setNome(""),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Cadastrar Profissional</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" disabled={isPending}>
        {isPending ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  );
}
