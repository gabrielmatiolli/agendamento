import { prisma } from "@/lib/prisma";

export async function definirHorarioProfissional(
  profissionalId: string,
  diaSemana: number,
  horarioInicio: string,
  horarioFim: string
) {
  return await prisma.horarioProfissional.create({
    data: { profissionalId, diaSemana, horarioInicio, horarioFim },
  });
}
