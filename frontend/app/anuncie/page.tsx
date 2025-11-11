import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Anuncie Conosco | Tech Television',
  description: 'Anuncie no Tech Television e alcance milhares de pessoas interessadas em tecnologia e inovação.',
};

export default function AnunciePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#CC0000] to-[#990000] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Anuncie Conosco</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Alcance milhares de pessoas interessadas em tecnologia e inovação
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Por que anunciar */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Por Que Anunciar no Tech Television?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                O <strong>Tech Television</strong> é uma plataforma líder em conteúdo sobre tecnologia, 
                inovação e tendências digitais. Ao anunciar conosco, sua marca terá visibilidade para 
                um público altamente qualificado e engajado.
              </p>
              <p>
                Nossa audiência é composta por profissionais de TI, entusiastas de tecnologia, 
                empreendedores digitais e tomadores de decisão que buscam estar sempre atualizados 
                sobre as últimas novidades do setor tech.
              </p>
            </div>
          </section>

          {/* Números */}
          <section className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-[#CC0000] mb-2">10k+</div>
              <div className="text-gray-700 font-semibold">Visitantes/Mês</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-[#CC0000] mb-2">24/7</div>
              <div className="text-gray-700 font-semibold">Streaming YouTube</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-[#CC0000] mb-2">100+</div>
              <div className="text-gray-700 font-semibold">Notícias/Mês</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-[#CC0000] mb-2">85%</div>
              <div className="text-gray-700 font-semibold">Público Tech</div>
            </div>
          </section>

          {/* Nosso Público */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Nosso Público
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="text-4xl mb-3">👨‍💻</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Profissionais de TI</h3>
                <p className="text-gray-700">
                  Desenvolvedores, engenheiros e profissionais especializados em tecnologia
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Empreendedores</h3>
                <p className="text-gray-700">
                  Fundadores de startups e empresários do setor de tecnologia
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Estudantes</h3>
                <p className="text-gray-700">
                  Estudantes e entusiastas buscando conhecimento sobre tech
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tomadores de Decisão</h3>
                <p className="text-gray-700">
                  CTOs, gerentes e líderes que definem estratégias tech
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="text-4xl mb-3">🔬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inovadores</h3>
                <p className="text-gray-700">
                  Pessoas interessadas em inovação e novas tendências
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000]">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Early Adopters</h3>
                <p className="text-gray-700">
                  Consumidores ávidos por novos produtos e tecnologias
                </p>
              </div>
            </div>
          </section>

          {/* Formatos de Anúncio */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Formatos de Anúncio
            </h2>
            <div className="space-y-6">
              
              <div className="border-l-4 border-[#CC0000] pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📰 Banners Display</h3>
                <p className="text-gray-700 mb-3">
                  Banners estrategicamente posicionados em áreas de alta visibilidade do portal. 
                  Disponíveis em diversos tamanhos e formatos.
                </p>
                <p className="text-sm text-[#CC0000] font-semibold">
                  • Header • Sidebar • Footer • In-feed
                </p>
              </div>

              <div className="border-l-4 border-[#CC0000] pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📝 Conteúdo Patrocinado</h3>
                <p className="text-gray-700 mb-3">
                  Artigos e matérias desenvolvidos em parceria com nossa equipe editorial, 
                  garantindo qualidade e relevância para o público.
                </p>
                <p className="text-sm text-[#CC0000] font-semibold">
                  • Branded Content • Reviews • Cases de Sucesso
                </p>
              </div>

              <div className="border-l-4 border-[#CC0000] pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📺 Patrocínio de Vídeos</h3>
                <p className="text-gray-700 mb-3">
                  Presença de marca em nosso canal 24h no YouTube, com menções e inserções 
                  durante a programação ao vivo.
                </p>
                <p className="text-sm text-[#CC0000] font-semibold">
                  • Pre-roll • Mid-roll • Menções • Overlays
                </p>
              </div>

              <div className="border-l-4 border-[#CC0000] pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📧 Newsletter Patrocinada</h3>
                <p className="text-gray-700 mb-3">
                  Envio de mensagens para nossa base de assinantes interessados em conteúdo tech, 
                  com alta taxa de abertura e engajamento.
                </p>
                <p className="text-sm text-[#CC0000] font-semibold">
                  • Envios Segmentados • Alta Taxa de Abertura
                </p>
              </div>

              <div className="border-l-4 border-[#CC0000] pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🎯 Campanhas Personalizadas</h3>
                <p className="text-gray-700 mb-3">
                  Soluções sob medida para atender objetivos específicos de marketing e 
                  comunicação da sua marca.
                </p>
                <p className="text-sm text-[#CC0000] font-semibold">
                  • Ações Especiais • Lançamentos • Eventos
                </p>
              </div>

            </div>
          </section>

          {/* Vantagens */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Vantagens de Anunciar Conosco
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl flex-shrink-0">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Público Qualificado</h3>
                  <p className="text-gray-700">Audiência altamente segmentada e interessada em tecnologia</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl flex-shrink-0">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Alta Visibilidade</h3>
                  <p className="text-gray-700">Posições estratégicas com alto impacto visual</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl flex-shrink-0">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Relatórios Detalhados</h3>
                  <p className="text-gray-700">Métricas e análises completas de performance</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl flex-shrink-0">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Flexibilidade</h3>
                  <p className="text-gray-700">Campanhas adaptadas ao seu orçamento e objetivos</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl flex-shrink-0">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Suporte Dedicado</h3>
                  <p className="text-gray-700">Equipe especializada para apoiar sua campanha</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-2xl flex-shrink-0">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">ROI Comprovado</h3>
                  <p className="text-gray-700">Resultados mensuráveis e retorno sobre investimento</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-[#CC0000] to-[#990000] rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Vamos Conversar?</h2>
            <p className="text-xl mb-6 text-gray-100 max-w-2xl mx-auto">
              Entre em contato com nossa equipe comercial e descubra como podemos ajudar 
              sua marca a alcançar o público tech
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato"
                className="inline-block bg-white text-[#CC0000] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Solicitar Proposta
              </Link>
              <a 
                href="mailto:comercial@techtelevision.com.br"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#CC0000] transition-colors"
              >
                E-mail Comercial
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-200">
              📧 comercial@techtelevision.com.br | 📱 WhatsApp: (11) 9999-9999
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

