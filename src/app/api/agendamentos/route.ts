import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { profissionalId, especialidadeId, data, horarioInicio, clienteNome, clienteContato } =
      await req.json();

    if (!profissionalId || !especialidadeId || !data || !horarioInicio || !clienteNome) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    const especialidade = await prisma.especialidade.findUnique({
      where: { id: especialidadeId },
    });

    if (!especialidade) {
      return NextResponse.json({ error: "Especialidade não encontrada" }, { status: 404 });
    }

    const [hora, minuto] = horarioInicio.split(":").map(Number);
    const horarioFim = new Date(data);
    horarioFim.setHours(hora, minuto + especialidade.duracaoMin);

    // Verificar disponibilidade
    const conflito = await prisma.agendamento.findFirst({
      where: {
        profissionalId,
        data,
        OR: [
          {
            horarioInicio: { lt: horarioFim.toISOString().split("T")[1].slice(0, 5) },
            horarioFim: { gt: horarioInicio },
          },
        ],
      },
    });

    if (conflito) {
      return NextResponse.json({ error: "Horário indisponível" }, { status: 400 });
    }

    const agendamento = await prisma.agendamento.create({
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

    return NextResponse.json(agendamento, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao criar agendamento" }, { status: 500 });
  }
}
