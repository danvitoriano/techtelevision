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
    <div className="bg-[#f6f6f6] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#BB1919] transition-colors">Início</Link>
          <span>/</span>
          <span className="text-gray-900">{categoria.nome}</span>
        </nav>

        {/* Header da Categoria */}
        <div className="mb-8 border-b-4 border-[#BB1919] pb-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">{categoria.nome}</h1>
          {categoria.descricao && (
            <p className="text-lg text-gray-600">{categoria.descricao}</p>
          )}
        </div>

        {/* Lista de Notícias */}
        {noticias.length === 0 ? (
          <div className="bg-white p-8 text-center border-2 border-[#e8e8e8]">
            <p className="text-gray-600 mb-4">
              Nenhuma notícia encontrada nesta categoria.
            </p>
            <Link 
              href="/"
              className="inline-block text-[#BB1919] hover:underline font-semibold"
            >
              Voltar para página inicial
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {noticias.map((noticia) => (
              <NoticiaCard key={noticia.id} noticia={noticia} variant="medium" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

