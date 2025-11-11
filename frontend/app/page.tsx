import NoticiaCard from '@/components/NoticiaCard';
import { getNoticias } from '@/lib/strapi';
import { Noticia } from '@/types';

export default async function Home() {
  let noticiasDestaque: Noticia[] = [];
  let noticiasRecentes: Noticia[] = [];

  try {
    const responseDestaque = await getNoticias({ destaque: true, limit: 1 });
    noticiasDestaque = responseDestaque.data;

    const responseRecentes = await getNoticias({ limit: 9 });
    noticiasRecentes = responseRecentes.data.filter(n => !n.destaque);
  } catch (error) {
    console.error('Erro ao carregar notícias:', error);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Notícia em Destaque */}
      {noticiasDestaque.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Em Destaque</h2>
          <NoticiaCard noticia={noticiasDestaque[0]} destaque />
        </section>
      )}

      {/* Notícias Recentes */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Últimas Notícias</h2>
        
        {noticiasRecentes.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">
              Nenhuma notícia disponível no momento. Inicie o Strapi e adicione conteúdo!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticiasRecentes.map((noticia) => (
              <NoticiaCard key={noticia.id} noticia={noticia} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
