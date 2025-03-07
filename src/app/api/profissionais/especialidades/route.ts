import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { profissionalId, especialidadeId } = await req.json();

    if (!profissionalId || !especialidadeId) {
      return NextResponse.json({ error: "IDs inválidos" }, { status: 400 });
    }

    const relacao = await prisma.especialidadeProfissional.create({
      data: { profissionalId, especialidadeId },
    });

    return NextResponse.json(relacao, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao associar especialidade" }, { status: 500 });
  }
}
