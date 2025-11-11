import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contato | Tech Television',
  description: 'Entre em contato com a equipe do Tech Television. Estamos prontos para ouvir você.',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#CC0000] to-[#990000] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Entre em contato conosco. Estamos prontos para ouvir você!
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Formulário de Contato */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CC0000] pb-2 inline-block">
                Envie sua Mensagem
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC0000] focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC0000] focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-bold text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC0000] focus:border-transparent outline-none transition-all"
                    placeholder="Sobre o que você quer falar?"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-bold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC0000] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Digite sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#CC0000] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#990000] transition-colors"
                >
                  Enviar Mensagem
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Campos obrigatórios
                </p>
              </form>
            </section>

            {/* Informações de Contato */}
            <div className="space-y-6">
              
              <section className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Outras Formas de Contato
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#CC0000] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                      <a href="mailto:contato@techtelevision.com.br" className="text-[#CC0000] hover:underline">
                        contato@techtelevision.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#CC0000] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      📺
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">YouTube</h3>
                      <a 
                        href="https://www.youtube.com/@TechTelevisionBrasil" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#CC0000] hover:underline"
                      >
                        @TechTelevisionBrasil
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#CC0000] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Redes Sociais</h3>
                      <p className="text-gray-700">
                        Siga-nos nas redes sociais para ficar por dentro das novidades
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-br from-red-50 to-white rounded-lg shadow-md p-8 border-l-4 border-[#CC0000]">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Horário de Atendimento
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                  <p><strong>Sábado:</strong> 9h às 13h</p>
                  <p><strong>Domingo:</strong> Fechado</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Respondemos todas as mensagens em até 24 horas úteis
                </p>
              </section>

              <section className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Dúvidas Frequentes
                </h2>
                <p className="text-gray-700 mb-4">
                  Antes de nos contatar, confira se sua dúvida já foi respondida em nossa seção de perguntas frequentes.
                </p>
                <Link 
                  href="/"
                  className="inline-block text-[#CC0000] font-bold hover:underline"
                >
                  Ver FAQ →
                </Link>
              </section>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

