import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quem Somos | Portal de Notícias',
  description: 'Conheça o Portal de Notícias - Um portal moderno e responsivo desenvolvido com as melhores tecnologias.',
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#CC0000] to-[#990000] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quem Somos</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Um portal de notícias moderno, desenvolvido com tecnologia de ponta para oferecer a melhor experiência de leitura.
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Nossa História */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Nossa História
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                O <strong>Portal de Notícias</strong> nasceu da visão de criar uma plataforma moderna, 
                acessível e eficiente para disseminação de informação de qualidade. Desenvolvido com as 
                mais recentes tecnologias do mercado, nosso portal representa o futuro do jornalismo digital.
              </p>
              <p>
                Acreditamos que a informação deve ser acessível a todos, por isso construímos uma plataforma 
                100% gratuita, sem barreiras de acesso, mantendo sempre o compromisso com a qualidade e 
                a veracidade das notícias.
              </p>
            </div>
          </section>

          {/* Nossa Missão */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Nossa Missão
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Nossa missão é fornecer informação de qualidade, atualizada e relevante para nossos leitores, 
                utilizando tecnologia de ponta para garantir a melhor experiência de navegação e leitura.
              </p>
              <p>
                Buscamos ser referência em jornalismo digital, combinando conteúdo de qualidade com uma 
                plataforma moderna, rápida e responsiva que funciona perfeitamente em qualquer dispositivo.
              </p>
            </div>
          </section>

          {/* Nossos Valores */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#CC0000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Qualidade</h3>
                <p className="text-gray-700">
                  Compromisso com conteúdo relevante, bem apurado e de interesse público.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#CC0000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">⚡ Inovação</h3>
                <p className="text-gray-700">
                  Uso de tecnologias modernas para proporcionar a melhor experiência ao leitor.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#CC0000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌐 Acessibilidade</h3>
                <p className="text-gray-700">
                  Plataforma 100% gratuita e acessível em qualquer dispositivo.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#CC0000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔒 Transparência</h3>
                <p className="text-gray-700">
                  Compromisso com a veracidade e clareza na apresentação das informações.
                </p>
              </div>
            </div>
          </section>

          {/* Tecnologia */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Tecnologia de Ponta
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-6">
              <p>
                Nosso portal é desenvolvido com as tecnologias mais modernas do mercado, garantindo 
                performance, segurança e a melhor experiência para nossos leitores:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Frontend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#CC0000] mr-2">▸</span>
                    <span><strong>Next.js 14</strong> - Framework React com Server Side Rendering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC0000] mr-2">▸</span>
                    <span><strong>TypeScript</strong> - Tipagem estática para maior segurança</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC0000] mr-2">▸</span>
                    <span><strong>Tailwind CSS</strong> - Design moderno e responsivo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC0000] mr-2">▸</span>
                    <span><strong>React 18</strong> - Interface dinâmica e interativa</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Backend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#CC0000] mr-2">▸</span>
                    <span><strong>Strapi</strong> - Headless CMS open-source</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC0000] mr-2">▸</span>
                    <span><strong>SQLite</strong> - Banco de dados eficiente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC0000] mr-2">▸</span>
                    <span><strong>API REST</strong> - Integração moderna e segura</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC0000] mr-2">▸</span>
                    <span><strong>CI/CD</strong> - Deploy automático e confiável</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Características */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
              Características do Portal
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">100% Gratuito</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">Interface Moderna</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">Design Responsivo</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">Sistema de Categorias</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">Notícias em Destaque</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">SEO Otimizado</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">Carregamento Rápido</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">Segurança Avançada</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">Editor Rico de Conteúdo</span>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-[#CC0000] to-[#990000] rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Fique por Dentro</h2>
            <p className="text-xl mb-6 text-gray-100">
              Acompanhe as últimas notícias e mantenha-se sempre informado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-white text-[#CC0000] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Ver Notícias
              </Link>
              <Link 
                href="/contato"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#CC0000] transition-colors"
              >
                Entre em Contato
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

