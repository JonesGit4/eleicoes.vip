import { Hero } from '@/components/sections/Hero'
import { Metrics } from '@/components/sections/Metrics'
import { Servicos } from '@/components/sections/Servicos'
import { Processo } from '@/components/sections/Processo'
import { Planos } from '@/components/sections/Planos'
import { CtaFinal } from '@/components/sections/CtaFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Servicos />
      <Processo />
      <Planos />
      <CtaFinal />
    </>
  )
}
