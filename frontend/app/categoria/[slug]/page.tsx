import Link from 'next/link';
import { notFound } from 'next/navigation';
import NoticiaCard from '@/components/NoticiaCard';
import { getCategoriaBySlug, getNoticias } from '@/lib/strapi';
import { Metadata } from 'next';
import { Noticia } from '@/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoria = await getCategoriaBySlug(slug);
  
  if (!categoria) {
    return {
      title: 'Categoria não encontrada',
    };
  }

  return {
    title: `${categoria.nome} | Portal de Notícias`,
    description: categoria.descricao || `Notícias sobre ${categoria.nome}`,
  };
}

export default async function CategoriaPage({ params }: PageProps) {
  const { slug } = await params;
  const categoria = await getCategoriaBySlug(slug);

  if (!categoria) {
    notFound();
  }

  let noticias: Noticia[] = [];
  
  try {
    const response = await getNoticias({ categoriaSlug: slug, limit: 20 });
    noticias = response.data;
  } catch (error) {
    console.error('Erro ao carregar notícias:', error);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-blue-600">Início</Link>
        <span>/</span>
        <span className="text-gray-900">{categoria.nome}</span>
      </nav>

      {/* Header da Categoria */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{categoria.nome}</h1>
        {categoria.descricao && (
          <p className="text-lg text-gray-600">{categoria.descricao}</p>
        )}
      </div>

      {/* Lista de Notícias */}
      {noticias.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600">
            Nenhuma notícia encontrada nesta categoria.
          </p>
          <Link 
            href="/"
            className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Voltar para página inicial
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((noticia) => (
            <NoticiaCard key={noticia.id} noticia={noticia} />
          ))}
        </div>
      )}
    </div>
  );
}

