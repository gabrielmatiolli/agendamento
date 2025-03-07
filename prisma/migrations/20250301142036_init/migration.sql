-- CreateTable
CREATE TABLE "Profissional" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Profissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especialidade" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "duracaoMin" INTEGER NOT NULL,

    CONSTRAINT "Especialidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EspecialidadeProfissional" (
    "id" TEXT NOT NULL,
    "profissionalId" TEXT NOT NULL,
    "especialidadeId" TEXT NOT NULL,

    CONSTRAINT "EspecialidadeProfissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HorarioProfissional" (
    "id" TEXT NOT NULL,
    "profissionalId" TEXT NOT NULL,
    "diaSemana" INTEGER NOT NULL,
    "horarioInicio" TEXT NOT NULL,
    "horarioFim" TEXT NOT NULL,

    CONSTRAINT "HorarioProfissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agendamento" (
    "id" TEXT NOT NULL,
    "profissionalId" TEXT NOT NULL,
    "especialidadeId" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "horarioInicio" TEXT NOT NULL,
    "horarioFim" TEXT NOT NULL,
    "clienteNome" TEXT NOT NULL,
    "clienteContato" TEXT NOT NULL,

    CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EspecialidadeProfissional" ADD CONSTRAINT "EspecialidadeProfissional_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EspecialidadeProfissional" ADD CONSTRAINT "EspecialidadeProfissional_especialidadeId_fkey" FOREIGN KEY ("especialidadeId") REFERENCES "Especialidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HorarioProfissional" ADD CONSTRAINT "HorarioProfissional_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_especialidadeId_fkey" FOREIGN KEY ("especialidadeId") REFERENCES "Especialidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
