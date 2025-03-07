import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center w-full gap-3'>
      <Link href="/">Home</Link>
      <Link href="/agendamentos">Agendar</Link>
      <Link href="/gestao">Administrador</Link>
    </header>
  )
}
