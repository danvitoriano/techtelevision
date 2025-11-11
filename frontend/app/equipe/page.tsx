import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nossa Equipe | Tech Television',
  description: 'Conheça a equipe por trás do Tech Television - Profissionais dedicados a trazer o melhor conteúdo sobre tecnologia.',
};

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#CC0000] to-[#990000] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa Equipe</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Conheça os profissionais dedicados a trazer o melhor conteúdo sobre tecnologia para você
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Introdução */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Time Apaixonado por Tecnologia
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nossa equipe é formada por profissionais experientes e apaixonados pelo universo tech. 
              Trabalhamos incansavelmente para trazer as melhores notícias, análises e conteúdos 
              sobre tecnologia, inovação e tendências digitais.
            </p>
          </section>

          {/* Membros da Equipe */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b-4 border-[#CC0000] pb-2 inline-block">
              Conheça Nosso Time
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Membro 1 - Redação */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#CC0000] to-[#990000] h-40 flex items-center justify-center">
                  <span className="text-7xl">✍️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Equipe de Redação</h3>
                  <p className="text-[#CC0000] font-semibold mb-3">Jornalistas & Editores</p>
                  <p className="text-gray-700 text-sm">
                    Profissionais especializados em jornalismo tecnológico, responsáveis por 
                    produzir conteúdo de qualidade e manter você sempre informado.
                  </p>
                </div>
              </div>

              {/* Membro 2 - Tecnologia */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#CC0000] to-[#990000] h-40 flex items-center justify-center">
                  <span className="text-7xl">💻</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Equipe de Tecnologia</h3>
                  <p className="text-[#CC0000] font-semibold mb-3">Desenvolvedores</p>
                  <p className="text-gray-700 text-sm">
                    Desenvolvedores talentosos que mantêm nossa plataforma moderna, rápida e 
                    segura, utilizando as melhores tecnologias disponíveis.
                  </p>
                </div>
              </div>

              {/* Membro 3 - Design */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#CC0000] to-[#990000] h-40 flex items-center justify-center">
                  <span className="text-7xl">🎨</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Equipe de Design</h3>
                  <p className="text-[#CC0000] font-semibold mb-3">Designers UX/UI</p>
                  <p className="text-gray-700 text-sm">
                    Designers criativos focados em proporcionar a melhor experiência de 
                    leitura, com interface intuitiva e visualmente atraente.
                  </p>
                </div>
              </div>

              {/* Membro 4 - Produção de Vídeo */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#CC0000] to-[#990000] h-40 flex items-center justify-center">
                  <span className="text-7xl">🎥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Produção Audiovisual</h3>
                  <p className="text-[#CC0000] font-semibold mb-3">Produtores & Editores</p>
                  <p className="text-gray-700 text-sm">
                    Equipe responsável pela produção do canal 24h no YouTube, criando 
                    conteúdo audiovisual de alta qualidade sobre tecnologia.
                  </p>
                </div>
              </div>

              {/* Membro 5 - Marketing */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#CC0000] to-[#990000] h-40 flex items-center justify-center">
                  <span className="text-7xl">📱</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Digital</h3>
                  <p className="text-[#CC0000] font-semibold mb-3">Analistas & Estrategistas</p>
                  <p className="text-gray-700 text-sm">
                    Profissionais dedicados a expandir nosso alcance e conectar nosso 
                    conteúdo com pessoas interessadas em tecnologia.
                  </p>
                </div>
              </div>

              {/* Membro 6 - Suporte */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#CC0000] to-[#990000] h-40 flex items-center justify-center">
                  <span className="text-7xl">🤝</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Atendimento</h3>
                  <p className="text-[#CC0000] font-semibold mb-3">Suporte ao Leitor</p>
                  <p className="text-gray-700 text-sm">
                    Time dedicado a ouvir você, responder suas dúvidas e garantir a 
                    melhor experiência possível no portal.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Nossos Valores */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              O Que Nos Move
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Paixão por Tecnologia</h3>
                  <p className="text-gray-700">
                    Somos genuinamente apaixonados por tecnologia e inovação. Essa paixão 
                    se reflete em cada notícia, análise e conteúdo que produzimos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-3xl flex-shrink-0">⚡</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Compromisso com Qualidade</h3>
                  <p className="text-gray-700">
                    Buscamos sempre a excelência em tudo que fazemos, desde a apuração das 
                    notícias até a experiência do usuário em nossa plataforma.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-3xl flex-shrink-0">🚀</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inovação Constante</h3>
                  <p className="text-gray-700">
                    Estamos sempre buscando novas formas de melhorar e inovar, tanto em 
                    nosso conteúdo quanto em nossa tecnologia.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-3xl flex-shrink-0">🌟</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Foco no Leitor</h3>
                  <p className="text-gray-700">
                    Você é nossa prioridade. Trabalhamos para oferecer o melhor conteúdo 
                    e a melhor experiência de leitura possível.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trabalhe Conosco */}
          <section className="bg-gradient-to-r from-[#CC0000] to-[#990000] rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Quer Fazer Parte do Time?</h2>
            <p className="text-xl mb-6 text-gray-100 max-w-2xl mx-auto">
              Estamos sempre em busca de talentos apaixonados por tecnologia para se juntar à nossa equipe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato"
                className="inline-block bg-white text-[#CC0000] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Entre em Contato
              </Link>
              <Link 
                href="/"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#CC0000] transition-colors"
              >
                Voltar ao Portal
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

