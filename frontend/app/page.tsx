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

    const responseRecentes = await getNoticias({ limit: 50 });
    const todasNoticias = responseRecentes.data.filter(n => !n.destaque);
    
    // Separar notícias secundárias (próximas 2) e recentes (resto)
    noticiasSecundarias = todasNoticias.slice(0, 2);
    noticiasRecentes = todasNoticias.slice(2);
  } catch (error) {
    console.error('Erro ao carregar notícias:', error);
  }

  return (
    <div className="bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto">
        {/* Grid Principal - Estilo CNN Brasil */}
        {noticiasDestaque.length > 0 && (
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 lg:p-6">
            {/* Coluna Esquerda - Notícia Principal + Notícias Rápidas */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Notícia Principal (Hero) */}
              <NoticiaCard noticia={noticiasDestaque[0]} variant="hero" />
              
              {/* Notícias Rápidas - Logo abaixo do Hero */}
              {noticiasRecentes.length > 0 && (
                <div className="bg-white shadow-sm rounded-lg p-6">
                  {noticiasRecentes.slice(0, 3).map((noticia) => (
                    <NoticiaCard key={noticia.id} noticia={noticia} variant="small" />
                  ))}
                </div>
              )}
            </div>

            {/* Coluna Lateral Direita - Notícias Secundárias */}
            <div className="flex flex-col gap-6">
              {noticiasSecundarias.slice(0, 2).map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} variant="large" />
              ))}
            </div>
          </section>
        )}

        {/* Seção: Destaques do Dia */}
        {noticiasRecentes.length > 3 && (
          <section className="px-4 lg:px-6 pb-8">
            <div className="flex items-center mb-6">
              <div className="h-1 w-1 bg-[#CC0000] mr-3"></div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Destaques do Dia</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {noticiasRecentes.slice(3, 7).map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} variant="medium" />
              ))}
            </div>
          </section>
        )}

        {/* Seção: Mais Notícias */}
        {noticiasRecentes.length > 7 && (
          <section className="px-4 lg:px-6 pb-8">
            <div className="flex items-center mb-6">
              <div className="h-1 w-1 bg-[#CC0000] mr-3"></div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Mais Notícias</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {noticiasRecentes.slice(7, 13).map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} variant="medium" />
              ))}
            </div>
          </section>
        )}

        {/* Seção: Últimas Notícias */}
        {noticiasRecentes.length > 13 && (
          <section className="px-4 lg:px-6 pb-8">
            <div className="flex items-center mb-6">
              <div className="h-1 w-1 bg-[#CC0000] mr-3"></div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Últimas Notícias</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {noticiasRecentes.slice(13, 21).map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} variant="medium" />
              ))}
            </div>
          </section>
        )}

        {/* Seção: Todas as Notícias */}
        {noticiasRecentes.length > 21 && (
          <section className="px-4 lg:px-6 pb-8">
            <div className="flex items-center mb-6">
              <div className="h-1 w-1 bg-[#CC0000] mr-3"></div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Todas as Notícias</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {noticiasRecentes.slice(21).map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} variant="medium" />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
