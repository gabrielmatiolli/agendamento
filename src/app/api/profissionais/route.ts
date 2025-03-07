import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { nome } = await req.json();

    if (!nome) {
      return NextResponse.json({ error: "Nome é obrigatório" }, { status: 400 });
    }

    const profissional = await prisma.profissional.create({ data: { nome } });

    return NextResponse.json(profissional, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao criar profissional" }, { status: 500 });
  }
}

export async function GET() {
  const profissionais = await prisma.profissional.findMany({
    include: { especialidades: true, horarios: true },
  });

  return NextResponse.json(profissionais);
}
