import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Cookies | Tech Television',
  description: 'Entenda como o Tech Television utiliza cookies para melhorar sua experiência de navegação.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#CC0000] to-[#990000] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Cookies</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Entenda como utilizamos cookies para melhorar sua experiência
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Última atualização:</strong> 11 de novembro de 2025
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  1. O Que São Cookies?
                </h2>
                <p>
                  Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo 
                  (computador, tablet ou smartphone) quando você visita um site. Eles são amplamente 
                  utilizados para fazer os sites funcionarem de forma mais eficiente e fornecer 
                  informações aos proprietários do site.
                </p>
                <p>
                  Os cookies permitem que o site reconheça seu dispositivo e armazene informações 
                  sobre suas preferências ou ações passadas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  2. Como Usamos Cookies
                </h2>
                <p>
                  O Tech Television utiliza cookies para diversos propósitos que melhoram sua 
                  experiência de navegação:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lembrar suas preferências e configurações</li>
                  <li>Entender como você usa nosso portal</li>
                  <li>Melhorar a funcionalidade e desempenho do site</li>
                  <li>Personalizar conteúdo e anúncios</li>
                  <li>Analisar o tráfego e comportamento dos visitantes</li>
                  <li>Manter sua sessão ativa enquanto navega</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  3. Tipos de Cookies Que Utilizamos
                </h2>
                
                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000] mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🔧 Cookies Estritamente Necessários</h3>
                  <p className="mb-2">
                    Estes cookies são essenciais para o funcionamento do portal. Sem eles, 
                    determinados recursos não funcionariam adequadamente.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Exemplos:</strong> Cookies de sessão, cookies de segurança
                  </p>
                  <p className="text-sm text-[#CC0000] font-semibold mt-2">
                    ⚠️ Estes cookies não podem ser desativados
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000] mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📊 Cookies de Desempenho e Analytics</h3>
                  <p className="mb-2">
                    Coletam informações sobre como os visitantes usam o portal, quais páginas 
                    são mais visitadas e se recebem mensagens de erro.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Exemplos:</strong> Google Analytics
                  </p>
                  <p className="text-sm text-[#CC0000] font-semibold mt-2">
                    ✓ Podem ser desativados através das configurações do navegador
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000] mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">⚙️ Cookies de Funcionalidade</h3>
                  <p className="mb-2">
                    Permitem que o portal lembre de escolhas que você faz (como idioma ou região) 
                    e forneçam recursos aprimorados e mais personalizados.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Exemplos:</strong> Preferências de idioma, configurações de visualização
                  </p>
                  <p className="text-sm text-[#CC0000] font-semibold mt-2">
                    ✓ Podem ser desativados, mas isso pode afetar a funcionalidade
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-[#CC0000] mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Cookies de Publicidade e Marketing</h3>
                  <p className="mb-2">
                    Utilizados para exibir anúncios relevantes para você e seus interesses. 
                    Também ajudam a limitar o número de vezes que você vê um anúncio.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Exemplos:</strong> Cookies de remarketing, cookies de redes sociais
                  </p>
                  <p className="text-sm text-[#CC0000] font-semibold mt-2">
                    ✓ Podem ser desativados através das configurações do navegador
                  </p>
                </div>

              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  4. Cookies de Terceiros
                </h2>
                <p>
                  Além dos cookies próprios, utilizamos cookies de terceiros para nos ajudar a 
                  entender e melhorar nossos serviços:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Google Analytics:</strong> Para análise de tráfego e comportamento 
                    dos visitantes
                  </li>
                  <li>
                    <strong>YouTube:</strong> Para incorporar e reproduzir vídeos em nosso portal
                  </li>
                  <li>
                    <strong>Redes Sociais:</strong> Para funcionalidades de compartilhamento 
                    (Facebook, Twitter, LinkedIn, etc.)
                  </li>
                </ul>
                <p className="mt-4">
                  Estes serviços podem definir seus próprios cookies. Recomendamos que você 
                  consulte as políticas de privacidade desses terceiros para entender como 
                  eles usam cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  5. Duração dos Cookies
                </h2>
                <p>Utilizamos dois tipos de cookies baseados em sua duração:</p>
                
                <div className="ml-4 space-y-4 mt-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">🕐 Cookies de Sessão</h3>
                    <p>
                      São temporários e expiram quando você fecha o navegador. São usados para 
                      funcionalidades específicas durante sua visita.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">📅 Cookies Persistentes</h3>
                    <p>
                      Permanecem no seu dispositivo por um período determinado (variando de dias 
                      a anos) ou até que você os exclua manualmente. São usados para lembrar suas 
                      preferências em visitas futuras.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  6. Como Gerenciar e Desativar Cookies
                </h2>
                <p>
                  Você tem o direito de decidir se aceita ou rejeita cookies. Você pode gerenciar 
                  suas preferências de cookies através das configurações do seu navegador.
                </p>
                
                <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">Configurações do Navegador</h3>
                <p>A maioria dos navegadores permite que você:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Visualize quais cookies estão armazenados e exclua-os individualmente</li>
                  <li>Bloqueie cookies de terceiros</li>
                  <li>Bloqueie todos os cookies</li>
                  <li>Exclua todos os cookies ao fechar o navegador</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">Links para Configurações</h3>
                <ul className="list-none pl-0 space-y-2">
                  <li>
                    • <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#CC0000] hover:underline">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    • <a href="https://support.mozilla.org/pt-BR/kb/cookies-informacoes-sites-armazenam-no-computador" target="_blank" rel="noopener noreferrer" className="text-[#CC0000] hover:underline">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    • <a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#CC0000] hover:underline">
                      Safari
                    </a>
                  </li>
                  <li>
                    • <a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#CC0000] hover:underline">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                  <p className="text-sm font-semibold text-yellow-800">
                    ⚠️ Aviso: Desativar cookies pode afetar a funcionalidade do portal e sua 
                    experiência de navegação pode ser prejudicada.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  7. Alterações nesta Política
                </h2>
                <p>
                  Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças 
                  em nossas práticas ou por outros motivos operacionais, legais ou regulatórios.
                </p>
                <p>
                  Recomendamos que você revise esta página regularmente para se manter informado 
                  sobre como usamos cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  8. Mais Informações
                </h2>
                <p>
                  Se você tiver dúvidas sobre como usamos cookies ou esta política, entre em contato:
                </p>
                <ul className="list-none pl-0 space-y-2">
                  <li><strong>E-mail:</strong> contato@techtelevision.com.br</li>
                  <li><strong>Portal:</strong> <Link href="/contato" className="text-[#CC0000] hover:underline">Formulário de Contato</Link></li>
                </ul>
              </section>

            </div>
          </div>

          {/* Links Relacionados */}
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/termos"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">📄 Termos de Uso</h3>
              <p className="text-gray-700">Leia as regras e condições de uso do portal</p>
            </Link>

            <Link 
              href="/privacidade"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">🔒 Política de Privacidade</h3>
              <p className="text-gray-700">Saiba como protegemos seus dados pessoais</p>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

