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
    <div className="bg-[#fafafa] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#CC0000] transition-colors font-medium">Início</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">{categoria.nome}</span>
        </nav>

        {/* Header da Categoria */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="h-1.5 w-1.5 bg-[#CC0000] mr-4"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">{categoria.nome}</h1>
          </div>
          {categoria.descricao && (
            <p className="text-lg text-gray-600 ml-6">{categoria.descricao}</p>
          )}
        </div>

        {/* Lista de Notícias */}
        {noticias.length === 0 ? (
          <div className="bg-white p-12 text-center shadow-sm">
            <p className="text-gray-600 text-lg mb-6">
              Nenhuma notícia encontrada nesta categoria.
            </p>
            <Link 
              href="/"
              className="inline-block text-[#CC0000] hover:text-[#A00000] font-bold text-sm"
            >
              VOLTAR PARA PÁGINA INICIAL
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {noticias.map((noticia) => (
              <NoticiaCard key={noticia.id} noticia={noticia} variant="medium" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

