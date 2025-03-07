import { prisma } from "@/lib/prisma";

export async function criarProfissional(nome: string) {
  return await prisma.profissional.create({
    data: { nome },
  });
}

export async function listarProfissionais() {
  return await prisma.profissional.findMany({
    include: { especialidades: true, horarios: true },
  });
}
