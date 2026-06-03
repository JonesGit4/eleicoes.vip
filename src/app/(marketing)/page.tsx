import { Hero } from '@/components/sections/Hero'
import { Metrics } from '@/components/sections/Metrics'
import { Servicos } from '@/components/sections/Servicos'
import { Processo } from '@/components/sections/Processo'
import { Cases } from '@/components/sections/Cases'
import { Trust } from '@/components/sections/Trust'
import { Planos } from '@/components/sections/Planos'
import { ChatIA } from '@/components/sections/ChatIA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Servicos />
      <Processo />
      <Cases />
      <Trust />
      <Planos />
      <Footer />
      <ChatIA />
    </>
  )
}
