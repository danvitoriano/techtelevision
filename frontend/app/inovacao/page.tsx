import type { Metadata } from 'next';
import { getNoticias } from '@/lib/strapi';
import NoticiaCard from '@/components/NoticiaCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Inovação | Tech Television',
  description: 'Descubra as inovações que estão transformando o mundo. Tendências, novos negócios e tecnologias disruptivas.',
};

export default async function InovacaoPage() {
  const noticiasData = await getNoticias({ limit: 20 });
  const noticias = noticiasData.data || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#CC0000] to-[#990000] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Inovação</h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Descubra as inovações que estão transformando o mundo
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-[#CC0000] transition-colors">
                  Início
                </Link>
              </li>
              <li>&gt;</li>
              <li className="text-[#CC0000] font-semibold">Inovação</li>
            </ol>
          </nav>

          {/* Grid de Notícias */}
          {noticias.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {noticias.map((noticia) => (
                <NoticiaCard key={noticia.documentId} noticia={noticia} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-gray-600 text-lg">
                Nenhuma notícia disponível no momento.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

