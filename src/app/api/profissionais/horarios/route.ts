import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { profissionalId, diaSemana, horarioInicio, horarioFim } = await req.json();

    if (!profissionalId || diaSemana === undefined || !horarioInicio || !horarioFim) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    const horario = await prisma.horarioProfissional.create({
      data: { profissionalId, diaSemana, horarioInicio, horarioFim },
    });

    return NextResponse.json(horario, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao definir horário" }, { status: 500 });
  }
}
