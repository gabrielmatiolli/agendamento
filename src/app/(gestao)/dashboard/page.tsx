import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function GestaoPage() {
  return (
    <div>
      <Link href={'/profissionais'}><Button>Adicionar Profissional</Button></Link>
    </div>
  )
}
