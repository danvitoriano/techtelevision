import NoticiaCard from '@/components/NoticiaCard';
import { getNoticias } from '@/lib/strapi';
import { Noticia } from '@/types';

export default async function Home() {
  let noticiasDestaque: Noticia[] = [];
  let noticiasSecundarias: Noticia[] = [];
  let noticiasRecentes: Noticia[] = [];

  try {
    const responseDestaque = await getNoticias({ destaque: true, limit: 1 });
    noticiasDestaque = responseDestaque.data;

    const responseRecentes = await getNoticias({ limit: 15 });
    const todasNoticias = responseRecentes.data.filter(n => !n.destaque);
    
    // Separar notícias secundárias (próximas 3) e recentes (resto)
    noticiasSecundarias = todasNoticias.slice(0, 3);
    noticiasRecentes = todasNoticias.slice(3);
  } catch (error) {
    console.error('Erro ao carregar notícias:', error);
  }

  return (
    <div className="bg-[#f6f6f6]">
      <div className="max-w-[1280px] mx-auto">
        {/* Grid Principal - Estilo BBC */}
        {noticiasDestaque.length > 0 && (
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
            {/* Notícia Principal (Hero) - 2 colunas */}
            <div className="lg:col-span-2">
              <NoticiaCard noticia={noticiasDestaque[0]} variant="hero" />
            </div>

            {/* Coluna Lateral - Notícias Secundárias */}
            <div className="flex flex-col gap-4">
              {noticiasSecundarias.slice(0, 3).map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} variant="small" />
              ))}
            </div>
          </section>
        )}

        {/* Seção: Últimas Notícias */}
        <section className="px-4 py-6">
          <div className="border-b-4 border-[#BB1919] mb-6">
            <h2 className="text-3xl font-bold text-gray-900 pb-2">Últimas Notícias</h2>
          </div>
          
          {noticiasRecentes.length === 0 ? (
            <div className="bg-white p-8 text-center border-2 border-[#e8e8e8]">
              <p className="text-gray-600">
                Nenhuma notícia disponível no momento. Inicie o Strapi e adicione conteúdo!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {noticiasRecentes.slice(0, 4).map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} variant="medium" />
              ))}
            </div>
          )}
        </section>

        {/* Seção: Mais Notícias (se houver) */}
        {noticiasRecentes.length > 4 && (
          <section className="px-4 py-6">
            <div className="border-b-4 border-[#BB1919] mb-6">
              <h2 className="text-3xl font-bold text-gray-900 pb-2">Mais Notícias</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Coluna Esquerda */}
              <div className="bg-white p-4">
                {noticiasRecentes.slice(4, 8).map((noticia) => (
                  <NoticiaCard key={noticia.id} noticia={noticia} variant="small" />
                ))}
              </div>

              {/* Coluna Direita */}
              <div className="bg-white p-4">
                {noticiasRecentes.slice(8, 12).map((noticia) => (
                  <NoticiaCard key={noticia.id} noticia={noticia} variant="small" />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
