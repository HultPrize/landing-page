import Hero from '@/components/home/Hero'
import Image from 'next/image'
import { Header, Footer } from "@/components/layout/"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
    </main>
  )
}
