import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { nome, duracaoMin } = await req.json();

    if (!nome || !duracaoMin) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    const especialidade = await prisma.especialidade.create({
      data: { nome, duracaoMin },
    });

    return NextResponse.json(especialidade, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao criar especialidade" }, { status: 500 });
  }
}

export async function GET() {
  const especialidades = await prisma.especialidade.findMany();
  return NextResponse.json(especialidades);
}
