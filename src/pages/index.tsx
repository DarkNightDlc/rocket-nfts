import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/Header' 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between ">
        <section 
        className='bg-[url("../../public/background.png")] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col p-pd items-center gap-[90px]'>
          <Header/>
          <div className='flex flex-wrap gap-10 flex-col-reverse desktop:flex-row items-center'> 
            <div className='text-lg max-w-[362px] flex flex-col gap-14 max-h-[246px]'>
              <p>
                Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
                <br/>
                Compre, venda e descubra ativos digitais exclusivos para você.
              </p>
              <div className='flex gap-[6px] items-center'>
                <Image width={169} height={87} src='/group-avarts.png' alt=''/>
                <div>
                  <p className='font-bold'>+10</p>
                  <p>Artistas selecionados</p>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap gap-10'>
              <p className='font-bold text-[50px] max-w-[596px]'>
                Descubra a verdadeira arte digital e colecione diversas <span>NFTs</span>
              </p>
              <Image src='/badge.svg' width='200' height='200' alt=''/>
            </div>
          </div>
        </section>
        
      </main>
    </>
  )
}
