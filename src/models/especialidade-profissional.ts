import { prisma } from "@/lib/prisma";

export async function adicionarEspecialidadeProfissional(
  profissionalId: string,
  especialidadeId: string
) {
  return await prisma.especialidadeProfissional.create({
    data: { profissionalId, especialidadeId },
  });
}
