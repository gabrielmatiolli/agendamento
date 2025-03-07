import { prisma } from "@/lib/prisma";

export async function criarEspecialidade(nome: string, duracaoMin: number) {
  return await prisma.especialidade.create({
    data: { nome, duracaoMin },
  });
}

export async function listarEspecialidades() {
  return await prisma.especialidade.findMany();
}
