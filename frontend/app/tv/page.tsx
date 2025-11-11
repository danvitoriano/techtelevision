import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TV ao Vivo 24h | Tech Television',
  description: 'Assista ao canal Tech Television 24 horas por dia com conteúdo ao vivo sobre tecnologia, inovação e tendências digitais no YouTube.',
};

export default function TVPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#CC0000] to-[#990000] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <span className="text-6xl mr-4">📺</span>
            <h1 className="text-4xl md:text-5xl font-bold">TV ao Vivo 24h</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto text-center">
            Conteúdo ao vivo sobre tecnologia 24 horas por dia, 7 dias por semana no YouTube
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Player de Vídeo - Placeholder */}
          <section className="bg-black rounded-lg shadow-2xl overflow-hidden mb-8">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-6xl mb-4">🎥</div>
                <h2 className="text-3xl font-bold mb-4">Canal Tech Television</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Streaming ao vivo 24 horas por dia
                </p>
                <a 
                  href="https://www.youtube.com/@TechTelevisionBrasil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#CC0000] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#990000] transition-colors"
                >
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Assistir no YouTube
                </a>
                <p className="text-sm text-gray-400 mt-4">
                  * Insira a URL do seu canal/vídeo ao vivo no código
                </p>
              </div>
            </div>
          </section>

          {/* Sobre o Canal */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Sobre o Canal
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                O <strong>Tech Television</strong> é um canal dedicado exclusivamente ao universo da tecnologia, 
                transmitindo conteúdo ao vivo <strong>24 horas por dia, 7 dias por semana</strong> no YouTube.
              </p>
              <p>
                Nossa programação abrange desde as últimas notícias sobre inovação tecnológica, 
                lançamentos de produtos, análises aprofundadas, até tutoriais e debates sobre 
                o futuro da tecnologia.
              </p>
              <p>
                Seja você um entusiasta, profissional da área ou apenas curioso sobre tecnologia, 
                nosso canal oferece conteúdo contínuo e atualizado para mantê-lo sempre informado.
              </p>
            </div>
          </section>

          {/* Programação */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              O que você vai encontrar
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">📰</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Notícias em Tempo Real</h3>
                    <p className="text-gray-700">
                      Acompanhe as últimas notícias do mundo tech conforme elas acontecem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🚀</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Lançamentos</h3>
                    <p className="text-gray-700">
                      Cobertura completa de lançamentos de produtos e serviços tecnológicos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">💡</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Inovação</h3>
                    <p className="text-gray-700">
                      Descubra as tendências e inovações que estão moldando o futuro.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🎓</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Educação Tech</h3>
                    <p className="text-gray-700">
                      Tutoriais, dicas e conteúdo educativo sobre tecnologia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🔬</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Análises</h3>
                    <p className="text-gray-700">
                      Reviews detalhados e análises técnicas de produtos e serviços.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">💬</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Debates</h3>
                    <p className="text-gray-700">
                      Discussões sobre temas relevantes e o futuro da tecnologia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefícios */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Por que assistir?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🕐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Disponível</h3>
                <p className="text-gray-700">
                  Conteúdo ao vivo disponível a qualquer hora do dia ou da noite.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">🆓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Totalmente Gratuito</h3>
                <p className="text-gray-700">
                  Acesso livre e gratuito para todos no YouTube.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-plataforma</h3>
                <p className="text-gray-700">
                  Assista no computador, celular, tablet ou Smart TV.
                </p>
              </div>
            </div>
          </section>

          {/* Como Assistir */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Como Assistir
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#CC0000] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Acesse o YouTube</h3>
                  <p className="text-gray-700">
                    Abra o YouTube no seu navegador, app mobile ou Smart TV.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#CC0000] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Busque por Tech Television</h3>
                  <p className="text-gray-700">
                    Pesquise por "Tech Television" ou clique no botão acima para ir direto ao canal.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#CC0000] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inscreva-se e Ative o Sininho</h3>
                  <p className="text-gray-700">
                    Não perca nenhuma atualização! Inscreva-se no canal e ative as notificações.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#CC0000] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Aproveite o Conteúdo</h3>
                  <p className="text-gray-700">
                    Assista ao vivo e participe do chat para interagir com outros entusiastas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-[#CC0000] to-[#990000] rounded-lg shadow-lg p-8 text-center text-white">
            <div className="text-6xl mb-4">🎬</div>
            <h2 className="text-3xl font-bold mb-4">Comece a Assistir Agora</h2>
            <p className="text-xl mb-6 text-gray-100">
              Não perca nenhum momento! O melhor conteúdo tech está ao vivo agora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.youtube.com/@TechTelevisionBrasil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#CC0000] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Assistir ao Vivo
              </a>
              <Link 
                href="/"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#CC0000] transition-colors"
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

