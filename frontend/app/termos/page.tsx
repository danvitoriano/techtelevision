import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos de Uso | Tech Television',
  description: 'Leia os termos de uso do Tech Television. Entenda as regras e condições para utilização do portal.',
};

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#CC0000] to-[#990000] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Termos de Uso</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Regras e condições para utilização do Tech Television
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
                  1. Aceitação dos Termos
                </h2>
                <p>
                  Ao acessar e utilizar o portal Tech Television ("Nós", "Nosso" ou "Portal"), 
                  você ("Usuário" ou "Você") concorda em cumprir e estar vinculado aos seguintes 
                  termos e condições de uso.
                </p>
                <p>
                  Se você não concorda com qualquer parte destes termos, não deve utilizar nosso portal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  2. Uso do Portal
                </h2>
                <p>
                  O Tech Television é um portal de notícias sobre tecnologia, inovação e tendências 
                  digitais. Você pode:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar e ler o conteúdo publicado gratuitamente</li>
                  <li>Compartilhar notícias nas redes sociais</li>
                  <li>Assistir ao conteúdo de vídeo disponibilizado</li>
                  <li>Entrar em contato conosco através dos canais oficiais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  3. Propriedade Intelectual
                </h2>
                <p>
                  Todo o conteúdo publicado no Tech Television, incluindo mas não limitado a textos, 
                  imagens, vídeos, logos, design e código, são protegidos por direitos autorais e 
                  outras leis de propriedade intelectual.
                </p>
                <p>
                  É proibido:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copiar, reproduzir ou distribuir o conteúdo sem autorização prévia</li>
                  <li>Modificar ou criar obras derivadas do nosso conteúdo</li>
                  <li>Utilizar o conteúdo para fins comerciais sem permissão</li>
                  <li>Remover marcas d'água ou atribuições de crédito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  4. Conteúdo do Usuário
                </h2>
                <p>
                  Ao enviar comentários, mensagens ou qualquer outro tipo de conteúdo para o portal, 
                  você concede ao Tech Television uma licença não exclusiva, transferível, sublicenciável, 
                  isenta de royalties e mundial para usar, copiar, modificar e exibir esse conteúdo.
                </p>
                <p>
                  Você é responsável pelo conteúdo que submete e garante que possui todos os direitos 
                  necessários sobre ele.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  5. Condutas Proibidas
                </h2>
                <p>
                  Ao utilizar o portal, você concorda em NÃO:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violar qualquer lei ou regulamento aplicável</li>
                  <li>Publicar conteúdo ofensivo, difamatório ou ilegal</li>
                  <li>Tentar acessar áreas restritas do sistema</li>
                  <li>Interferir no funcionamento normal do portal</li>
                  <li>Coletar informações de outros usuários sem consentimento</li>
                  <li>Utilizar bots, scripts ou qualquer meio automatizado não autorizado</li>
                  <li>Transmitir vírus, malware ou qualquer código malicioso</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  6. Links Externos
                </h2>
                <p>
                  O portal pode conter links para sites de terceiros. Não somos responsáveis pelo 
                  conteúdo, políticas de privacidade ou práticas desses sites. O acesso a links 
                  externos é por sua conta e risco.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  7. Isenção de Garantias
                </h2>
                <p>
                  O portal é fornecido "como está" e "conforme disponível", sem garantias de 
                  qualquer tipo, expressas ou implícitas. Não garantimos que:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>O portal estará disponível ininterruptamente ou livre de erros</li>
                  <li>As informações sejam sempre precisas, completas ou atualizadas</li>
                  <li>Os defeitos serão corrigidos imediatamente</li>
                  <li>O portal esteja livre de vírus ou outros componentes prejudiciais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  8. Limitação de Responsabilidade
                </h2>
                <p>
                  Na medida máxima permitida por lei, o Tech Television não será responsável por 
                  quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou 
                  punitivos resultantes de:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Seu uso ou incapacidade de usar o portal</li>
                  <li>Qualquer conteúdo obtido através do portal</li>
                  <li>Acesso não autorizado aos nossos servidores</li>
                  <li>Interrupções ou erros no portal</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  9. Modificações dos Termos
                </h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
                  entrarão em vigor imediatamente após sua publicação no portal. Seu uso continuado 
                  do portal após as modificações constitui aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  10. Lei Aplicável
                </h2>
                <p>
                  Estes termos serão regidos e interpretados de acordo com as leis do Brasil, 
                  sem considerar conflitos de disposições legais. Qualquer disputa relacionada a 
                  estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-[#CC0000] pb-2">
                  11. Contato
                </h2>
                <p>
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
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
              href="/privacidade"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">🔒 Política de Privacidade</h3>
              <p className="text-gray-700">Saiba como protegemos seus dados pessoais</p>
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

