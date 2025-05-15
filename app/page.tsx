import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Topo azul com apenas o Instagram centralizado */}
      <div className="bg-[#062d49] text-white text-sm py-1 px-4 flex justify-center items-center h-[50px]">
        <a
      href="https://www.instagram.com/artigo186/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform duration-200"
    >
      <Image
        src="/instagram.png"
        alt="Instagram"
        width={80}
        height={80}
        className="object-contain"
      />
    </a>
      </div>

      {/* Header branco com logo e menu */}
<header className="bg-white shadow-sm relative top-0 z-10">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">

    {/* Nome da empresa */}
          <div className="text-xl md:text-2xl font-semibold text-[#002F4B]">
            CPFSA Advogados
          </div>

          {/* Menu de navegação */}
          <nav className="hidden md:flex space-x-6">
            <a href="#para-quem" className="text-[#111827] hover:text-[#c99800]">
              Para Quem
            </a>
            <a href="#como-funciona" className="text-[#111827] hover:text-[#c99800]">
              Como Funciona
            </a>
            <a href="#calcular" className="text-[#111827] hover:text-[#c99800]">
              Saiba seus Direitos
            </a>
          </nav>

          {/* Botão */}
          <Button asChild className="bg-[#002F4B] hover:bg-[#c99800]">
            <a href="#calcular">Quero saber mais!</a>
          </Button>
        </div>
      </header>

      {/* Primeira Dobra - Impacto Imediato */}
      <section id="hero" className="relative overflow-hidden py-16 bg-gray-100 h-screen">
        
  {/* Fundo escuro e desfocado */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/foto-batida-05.png"
      alt="Imagem de acidente desfocada"
      fill
      className="object-cover blur-sm brightness-50"
    />
  </div>

  {/* Container flex com menor espaçamento lateral */}
  <div className="relative z-10 container mx-auto px-4 h-full flex flex-row items-center justify-center">
    
    {/* Texto à esquerda */}
    <div className="w-full md:w-7/12">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
        Sofreu um acidente <br />em uma corrida de <br />aplicativo?
        Você <br />pode ter direito a <br />uma indenização!
      </h1>

      <p className="text-3xl md:text-3xl font-semibold text-white mb-6 leading-snug">
        Plataformas como <span style={{ color: '#c99800' }}><strong>Uber e 99</strong></span><br />
        possuem seguros obrigatórios de até <br /><span style={{ color: '#2ecc71' }}><strong>R$ 100 mil reais.</strong></span><br />
        Saiba como receber o que é seu  <br />por direito.
      </p>

      <div className="mt-10">
        <h3 className="text-2xl md:text-2xl font-bold text-white">Poucas pessoas <br />sabem disso.</h3> {/* Mudar tamanho do texto por aqui */}
        <p className="text-lg font-bold text-white">
          Meu nome é Claudio. <br /> Sou advogado e te explico tudo. <br />
        </p>
      </div>

      <div className="mt-6">
  <a
    href="https://wa.me/553191461571?text=Olá!%20Vi%20o%20anúncio%20no%20site%20e%20preciso%20de%20um%20especialista%20que%20me%20ajude%20num%20acidente%20que%20tive"
    style={{ backgroundColor: '#d48f24' }} // Substitua pela cor que quiser
    className="inline-block text-white text-xl font-semibold px-8 py-5 rounded-lg shadow transition"
  >
    Fale com minha equipe agora
  </a>
      </div>
    </div>

    {/* Imagem do Cláudio */}
    <div className="ml-[-23rem] w-auto flex-shrink-0">
      <Image
        src="/claudio-07.png"
        alt="Especialista Cláudio"
        width={700}
        height={700}
        className="object-contain"
        priority
      />
    </div>
  </div>
</section>

      {/* Segunda Dobra - Explicação */}
      <section className="py-16 md:py-24 bg-[#fdf6ec]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-6">Você sabia que:</h2>
            <p className="text-lg text-[#1f2937] mb-8">
              A Justiça reconhece que empresas como a <strong>Uber e 99</strong> <br />são responsáveis por acidentes durante as viagens. <br />Você pode processar a empresa diretamente, <br />sem precisar acionar o motorista.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="p-8 rounded-1g shadow-sm"
            style={{ backgroundColor: '#fff8e7' }}>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Quem pode ser indenizado?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1"
             style={{ backgroundColor: '#FDF2E9' }}>
              <span style={{ color: '#d48f24' }} className="text-sm">✓</span>
            </div>
            <span className="text-gray-600 text-[18px]">Passageiros com lesões físicas (cortes, fraturas, internações, sequelas)</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1"
             style={{ backgroundColor: '#FDF2E9' }}>
              <span style={{ color: '#d48f24' }} className="text-sm">✓</span>
            </div>
            <span className="text-gray-600 text-[18px]">Familiares de vítimas fatais</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1"
             style={{ backgroundColor: '#FDF2E9' }}>
              <span style={{ color: '#d48f24' }} className="text-sm">✓</span>
            </div>
            <span className="text-gray-600 text-[18px]">Motoristas de app, motoboys ou entregadores afastados</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1"
             style={{ backgroundColor: '#FDF2E9' }}>
              <span style={{ color: '#d48f24' }} className="text-sm">✓</span>
            </div>
            <span className="text-gray-600 text-[18px]">Donos de veículos danificados</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1"
             style={{ backgroundColor: '#FDF2E9' }}>
              <span style={{ color: '#d48f24' }} className="text-sm">✓</span>
            </div>
            <span className="text-gray-600 text-[18px]">Vítimas de acidentes com ônibus urbano, escolar ou turismos</span>
          </li>
        </ul>
      </div>                
            <div
  id="para-quem"
  className="p-8 rounded-lg shadow-sm"
  style={{ backgroundColor: '#fff8e7' }}
>
  <h3 className="text-3xl font-semibold text-gray-800 mb-4">
    O que você pode receber?
  </h3>
  <ul className="space-y-3">
    <li className="flex items-start">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1"
       style={{ backgroundColor: '#FDF2E9' }}>
        <span style={{ color: '#d48f24' }} className="text-sm">✓</span>
      </div>
      <span className="text-gray-600 text-[18px]">
        Danos morais (sofrimento, dor, trauma)
      </span>
    </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1"
             style={{ backgroundColor: '#FDF2E9' }}>
              <span style={{ color: '#d48f24' }} className="text-sm">✓</span>
            </div>
            <span className="text-gray-600 text-[18px]">Reembolso de despesas médicas e hospitalares</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1"
             style={{ backgroundColor: '#FDF2E9' }}>
              <span style={{ color: '#d48f24' }} className="text-sm">✓</span>
            </div>
            <span className="text-gray-600 text-[18px]">Pensão mensal (temporária ou vitalícia em caso de sequelas)</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1"
             style={{ backgroundColor: '#FDF2E9' }}>
              <span style={{ color: '#d48f24' }} className="text-sm">✓</span>
            </div>
            <span className="text-gray-600 text-[18px]">Lucros cessantes (se você perdeu renda)</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1"
            style={{ backgroundColor: '#FDF2E9' }}>
              <span style={{ color: '#d48f24' }} className="text-sm">✓</span>
            </div>
            <span className="text-gray-600 text-[18px]">Conserto ou valor de mercado do veículo danificado</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Continuação 2ª Dobra */}
<section id="como-funciona" style={{ backgroundColor: '#fdf6ec'}}>
        <div className="container mx-auto px-4 py-12">
          <div className="bg-[#fff8e7] p-8 rounded-lg shadow-sm mb-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Os aplicativos de corrida já oferecem seguros básicos, como:</h3>
                      <p className="text-lg text-gray-800 mb-6">Indenização por morte ou invalidez permanente <strong>(até R$100 mil de cobertura)</strong><br/>Despesas médicas emergenciais<strong> (até R$15 mil de cobertura)</strong></p>
            <div className="mb-8">
        <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Mas isso é só o começo. <span className="text-[#c99800]">Você tem direito a muito mais.</span>
        </p>
      </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#f5e8d8] border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
          <div className="w-16 h-16 bg-[#f5e8d8] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-2xl">💼</span>
          </div>
          <h4 className="font-semibold text-[#333333] mb-1">Perdas Financeiras</h4>
          <p className="text-sm font-bold text-[#333333]">Custos com afastamento do trabalho, mobilidade e outros</p>
        </div>
              <div className="bg-[#f5e8d8] border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
          <div className="w-16 h-16 bg-[#f5e8d8] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-600 text-2xl">⚖️</span>
          </div>
          <h4 className="font-semibold text-[#333333] mb-1">Danos Morais</h4>
          <p className="text-sm font-bold text-[#333333]">Prejuízos emocionais ou psicológicos também contam</p>
        </div>
              <div className="bg-[#f5e8d8] border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
          <div className="w-16 h-16 bg-[#f5e8d8] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-yellow-500 text-2xl">🧑‍⚖️</span>
          </div>
          <h4 className="font-semibold text-[#333333] mb-1">Atendimento Humano</h4>
          <p className="text-sm font-bold text-[#333333]">Nada de robôs, você fala com quem resolve</p>
        </div>
              <div className="bg-[#f5e8d8] border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
          <div className="w-16 h-16 bg-[#f5e8d8] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-2xl">⚡</span>
          </div>
          <h4 className="font-semibold text-[#333333] mb-1">Consulta Rápida e sem Burocracia</h4>
          <p className="text-sm font-bold text-[#333333]">Entenda seus direitos em minutos</p>
        </div>
            </div>
          </div>

          <div className="bg-[#f5e8d8] p-8 rounded-lg shadow-sm text-center">
            <p className="text-lg text-[#333333] mb-6 font-medium">
              <strong>Você tem direito a mais que isso! Mesmo com o seguro, é possível entrar com ação por danos morais e outros prejuízos.</strong>
            </p>
            <a
  href="https://wa.me/553191461571?text=Olá!%20Vi%20o%20anúncio%20no%20site%20e%20preciso%20de%20um%20especialista%20que%20me%20ajude%20num%20acidente%20que%20tive"
  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition"
>
  Clique e descubra seus direitos agora!
</a>
          </div>
        </div>
      </section>
      
      {/* Terceira Dobra - Reforço Final */}
      <section id="calcular" style={{ backgroundColor: '#111827' }} className="py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Se você sofreu um acidente em uma corrida da Uber ou 99, podemos ajudar.</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#1f2937] p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#c99800] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-[#111827] text-xl">1</span>
                </div>
                <h3 className="font-semibold text-[#ffffff] text-xl mb-2">Avalie seu direito à indenização</h3>
                <p className="text-[#d1d5db]">Verifique rapidamente se o seu caso se enquadra nas coberturas obrigatórias oferecidas pelas plataformas.</p>
              </div>
              <div className="bg-[#1f2937] p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#c99800] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-[#111827] text-xl">2</span>
                </div>
                <h3 className="font-semibold text-[#ffffff] text-xl mb-2">Entenda seus direitos</h3>
                <p className="text-[#d1d5db]">Nossa equipe jurídica especializada te orienta sobre os seguros disponíveis e os valores que você pode ter direito a receber.</p>
              </div>
              <div className="bg-[#1f2937] p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#c99800] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-[#111827] text-xl">3</span>
                </div>
                <h3 className="font-semibold text-[#ffffff] text-xl mb-2">Aja rápido</h3>
                <p className="text-[#d1d5db]">Fale com um advogado e receba apoio completo para buscar a indenização que é sua por direito.</p>
              </div>
            </div>

            <div className="bg-[#e5e7eb] p-8 rounded-lg shadow-lg text-gray-800 mb-12">
              <h3 className="text-2xl font-bold mb-6">Converse com um especialista e receba orientação gratuita.</h3>
              <p className="text-gray-800 mb-8">
              <span>👇</span> <strong>Clique abaixo e fale com nossa equipe jurídica.</strong>
              </p>
            <Button asChild className="bg-[#002F4B] hover:bg-[#c99800] text-white px-6 py-4 text-lg font-semibold rounded-md">
            <a href="https://wa.me/553191461571?text=Olá!%20Vi%20o%20anúncio%20no%20site%20e%20preciso%20de%20um%20especialista%20que%20me%20ajude%20num%20acidente%20que%20tive"
            >Fale com nossa equipe AGORA</a>
          </Button>
            </div>

            <div className="flex items-center justify-center space-x-4">
  <div className="flex items-center">
    {/* 4 estrelas cheias */}
    {[...Array(4)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ))}

    {/* 1 meia estrela */}
    <svg className="w-5 h-5 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  </div>
  <p className="text-blue-100">Avaliado por mais de 4 mil pessoas.</p>
</div>
          </div>
        </div>
      </section>

{/* Rodapé */}
<footer style={{ backgroundColor: '#062d49' }} className="text-white py-2">
  <div className="container mx-auto px-4 flex flex-col items-center space-y-1
">
    
    {/* Logo */}
    <Image
      src="/logo-cpfsa.png"
      alt="CPFSA"
      width={180}
      height={180}
      className="rounded-full object-cover"
      priority
    />

    {/* Instagram */}
    <a
      href="https://www.instagram.com/artigo186/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform duration-200"
    >
      <Image
        src="/instagram.png"
        alt="Instagram"
        width={80}
        height={80}
        className="object-contain"
      />
    </a>

    {/* Direitos autorais */}
    <div className="text-xs text-gray-400 text-center">
      © 2025 CPFSA - Todos os direitos reservados.
    </div>
  </div>
</footer>
</div>
  );
}
