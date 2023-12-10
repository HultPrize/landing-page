import Link from 'next/link'
import NoExist from '@/components/error/no-exist' 
import { Header, Footer } from "@/components/layout/"

export default function NotFound() {
  return (
    <>
      <Header />
        <NoExist/>
      <Footer />
      
    </>
  )
}