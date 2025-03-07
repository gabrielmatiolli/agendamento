import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { profissionalId: string } }) {
  const { profissionalId } = params;
  const agendamentos = await prisma.agendamento.findMany({
    where: { profissionalId },
  });

  return NextResponse.json(agendamentos);
}
