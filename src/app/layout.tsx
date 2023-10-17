import "./globals.scss";
import type { Metadata } from 'next'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Spiderverse',
  description: 'Criando um carrossel parallax do Aranhaverso com React, next.js e FramerMotion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <header className="header">
          <Image src='/icons/menu.svg' alt='Opções de menu' width={36} height={25} />
          <Image src='/spider-logo.svg' width={260} height={70} alt='logo do spiderman' />
          <Image src='/icons/user.svg' width={36} height={36} alt='Icone de login' />
        </header>
        {children}
      </body>
    </html>
  )
}
