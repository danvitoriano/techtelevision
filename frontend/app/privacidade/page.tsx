import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Tech Television',
  description: 'Leia nossa política de privacidade e saiba como protegemos seus dados pessoais no Tech Television.',
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#CC0000] to-[#990000] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Transparência sobre como coletamos, usamos e protegemos seus dados
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
                  1. Introdução
                </h2>
                <p>
                  O Tech Television ("Nós", "Nosso" ou "Portal") está comprometido em proteger 
                  sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, 
                  divulgamos e protegemos suas informações quando você visita nosso portal.
                </p>
                <p>
                  Ao usar o Tech Television, você concorda com a coleta e uso de informações de 
                  acordo com esta política.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  2. Informações que Coletamos
                </h2>
                
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">2.1. Informações Fornecidas por Você</h3>
                <p>Podemos coletar informações que você nos fornece diretamente, incluindo:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nome e endereço de e-mail (formulário de contato)</li>
                  <li>Assunto e conteúdo de mensagens enviadas</li>
                  <li>Informações de inscrição em newsletter (se aplicável)</li>
                  <li>Comentários e feedback</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">2.2. Informações Coletadas Automaticamente</h3>
                <p>Quando você acessa nosso portal, coletamos automaticamente:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Endereço IP</li>
                  <li>Tipo de navegador e versão</li>
                  <li>Sistema operacional</li>
                  <li>Páginas visitadas e tempo de permanência</li>
                  <li>Data e hora de acesso</li>
                  <li>Referências de origem (de onde você veio)</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">2.3. Cookies e Tecnologias Similares</h3>
                <p>
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência. 
                  Para mais detalhes, consulte nossa <Link href="/cookies" className="text-[#CC0000] hover:underline">Política de Cookies</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  3. Como Usamos Suas Informações
                </h2>
                <p>Utilizamos as informações coletadas para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer e manter nosso portal</li>
                  <li>Melhorar e personalizar sua experiência</li>
                  <li>Responder às suas mensagens e solicitações</li>
                  <li>Enviar newsletters e atualizações (se você se inscreveu)</li>
                  <li>Analisar como o portal é usado para melhorias</li>
                  <li>Detectar, prevenir e resolver problemas técnicos</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Proteger nossos direitos e propriedade</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  4. Base Legal para Processamento (LGPD)
                </h2>
                <p>Processamos seus dados pessoais com base em:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consentimento:</strong> Quando você fornece suas informações voluntariamente</li>
                  <li><strong>Legítimo Interesse:</strong> Para melhorar nossos serviços e conteúdo</li>
                  <li><strong>Cumprimento de Obrigações Legais:</strong> Quando exigido por lei</li>
                  <li><strong>Execução de Contrato:</strong> Para fornecer os serviços solicitados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  5. Compartilhamento de Informações
                </h2>
                <p>
                  Não vendemos suas informações pessoais. Podemos compartilhar suas informações 
                  apenas nas seguintes situações:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Prestadores de Serviço:</strong> Com empresas que nos auxiliam (hospedagem, analytics)</li>
                  <li><strong>Conformidade Legal:</strong> Quando exigido por lei ou autoridades</li>
                  <li><strong>Proteção de Direitos:</strong> Para proteger nossos direitos, propriedade ou segurança</li>
                  <li><strong>Com Seu Consentimento:</strong> Quando você autorizar expressamente</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  6. Serviços de Terceiros
                </h2>
                <p>Podemos utilizar serviços de terceiros que coletam informações:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> Para análise de tráfego e comportamento</li>
                  <li><strong>YouTube:</strong> Para exibição de conteúdo de vídeo</li>
                  <li><strong>Redes Sociais:</strong> Para compartilhamento de conteúdo</li>
                </ul>
                <p>
                  Estes serviços têm suas próprias políticas de privacidade que recomendamos que você leia.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  7. Segurança dos Dados
                </h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger 
                  suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
                <p>
                  No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico 
                  é 100% seguro. Embora nos esforcemos para proteger suas informações, não podemos 
                  garantir segurança absoluta.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  8. Retenção de Dados
                </h2>
                <p>
                  Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os 
                  propósitos descritos nesta política, a menos que um período de retenção mais longo 
                  seja exigido ou permitido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  9. Seus Direitos (LGPD)
                </h2>
                <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Confirmação e Acesso:</strong> Saber se processamos seus dados e acessá-los</li>
                  <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li><strong>Anonimização ou Bloqueio:</strong> Solicitar anonimização ou bloqueio de dados</li>
                  <li><strong>Eliminação:</strong> Solicitar exclusão de dados desnecessários ou excessivos</li>
                  <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                  <li><strong>Revogação de Consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
                  <li><strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
                </ul>
                <p>
                  Para exercer seus direitos, entre em contato conosco através do e-mail: 
                  <a href="mailto:privacidade@techtelevision.com.br" className="text-[#CC0000] hover:underline"> privacidade@techtelevision.com.br</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  10. Privacidade de Crianças
                </h2>
                <p>
                  Nosso portal não é direcionado a menores de 13 anos. Não coletamos intencionalmente 
                  informações de crianças. Se você é pai ou responsável e descobre que seu filho nos 
                  forneceu informações pessoais, entre em contato conosco para que possamos excluí-las.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  11. Transferência Internacional de Dados
                </h2>
                <p>
                  Seus dados podem ser transferidos e mantidos em servidores localizados fora do Brasil. 
                  Tomaremos todas as medidas necessárias para garantir que seus dados sejam tratados com 
                  segurança e de acordo com esta política.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  12. Alterações nesta Política
                </h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você 
                  sobre quaisquer alterações publicando a nova política nesta página e atualizando a 
                  data de "Última atualização".
                </p>
                <p>
                  Recomendamos que você revise esta política periodicamente para se manter informado 
                  sobre como protegemos suas informações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  13. Contato
                </h2>
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus 
                  direitos, entre em contato conosco:
                </p>
                <ul className="list-none pl-0 space-y-2">
                  <li><strong>E-mail de Privacidade:</strong> privacidade@techtelevision.com.br</li>
                  <li><strong>E-mail Geral:</strong> contato@techtelevision.com.br</li>
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
              href="/cookies"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">🍪 Política de Cookies</h3>
              <p className="text-gray-700">Entenda como utilizamos cookies no portal</p>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

