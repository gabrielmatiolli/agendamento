import { prisma } from "@/lib/prisma";

export async function verificarDisponibilidade(
  profissionalId: string,
  data: Date,
  horarioInicio: string,
  horarioFim: string
) {
  const agendamentos = await prisma.agendamento.findMany({
    where: {
      profissionalId,
      data,
      OR: [
        {
          horarioInicio: { lt: horarioFim },
          horarioFim: { gt: horarioInicio },
        },
      ],
    },
  });

  return agendamentos.length === 0; // Se não houver conflito, está disponível
}

export async function criarAgendamento(
  profissionalId: string,
  especialidadeId: string,
  data: Date,
  horarioInicio: string,
  clienteNome: string,
  clienteContato: string
) {
  // Buscar duração da especialidade
  const especialidade = await prisma.especialidade.findUnique({
    where: { id: especialidadeId },
  });

  if (!especialidade) throw new Error("Especialidade não encontrada");

  // Calcular horário final
  const [hora, minuto] = horarioInicio.split(":").map(Number);
  const horarioFim = new Date(data);
  horarioFim.setHours(hora, minuto + especialidade.duracaoMin);

  // Verificar disponibilidade
  const disponivel = await verificarDisponibilidade(
    profissionalId,
    data,
    horarioInicio,
    horarioFim.toISOString().split("T")[1].slice(0, 5) // Formato "HH:MM"
  );

  if (!disponivel) throw new Error("Horário indisponível");

  return await prisma.agendamento.create({
    data: {
      profissionalId,
      especialidadeId,
      data,
      horarioInicio,
      horarioFim: horarioFim.toISOString().split("T")[1].slice(0, 5),
      clienteNome,
      clienteContato,
    },
  });
}

export async function listarAgendamentos(profissionalId: string, data: Date) {
  return await prisma.agendamento.findMany({
    where: { profissionalId, data },
  });
}
