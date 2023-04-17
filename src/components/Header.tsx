import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return <>
        <header className='flex justify-between  max-w-maxPage w-full items-center'>
          <Image width={265} height={43} src='/logo.svg' alt='Rocket Nfts' />
          <nav className='flex justify-between gap-4'>
            <Link href="https://tailwindcss.com/docs/justify-content">Comprar NFT</Link>
            <Link href="https://tailwindcss.com/docs/justify-content">Sobre</Link>
            <Link href="https://tailwindcss.com/docs/justify-content">FAQ</Link>
          </nav>
          <Link href="https://tailwindcss.com/docs/justify-content">
            <button 
            className="bg-white flex items-center py-2.5 pl-3.5 pr-5.5 gap-4.7"
            >
              <Image width={30} height={30} alt='imagem da cara de uma raposa pixelada' src='/logo_MetaMask.svg'/>
              <p className="text-black font-bold">Conectar carteira</p>
            </button> 
          </Link>
        </header>
    </>
}