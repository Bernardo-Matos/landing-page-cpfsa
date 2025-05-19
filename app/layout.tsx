import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CPFSA Advogados - Indenizações por Acidentes",
  description: "Especialistas em indenizações por acidentes em corridas de aplicativo",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>

        {/* Ícone flutuante no canto inferior direito */}
        <a
          href="https://wa.me/553191461571?text=Olá!%20Vi%20o%20anúncio%20no%20site%20e%20preciso%20de%20um%20especialista%20que%20me%20ajude%20num%20acidente%20que%20tive"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <img
            src="/whatsapp-icon.png" 
            alt="Fale conosco no WhatsApp"
            className="w-14 h-14 drop-shadow-lg hover:scale-110 transition-transform"
          />
        </a>
      </body>
    </html>
  )
}
