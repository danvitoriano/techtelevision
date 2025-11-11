import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNoticiaBySlug, getStrapiMedia } from '@/lib/strapi';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const noticia = await getNoticiaBySlug(slug);
  
  if (!noticia) {
    return {
      title: 'Notícia não encontrada',
    };
  }

  return {
    title: `${noticia.titulo} | Portal de Notícias`,
    description: noticia.resumo,
  };
}

export default async function NoticiaPage({ params }: PageProps) {
  const { slug } = await params;
  const noticia = await getNoticiaBySlug(slug);

  if (!noticia) {
    notFound();
  }

  const imagemUrl = getStrapiMedia(noticia.imagem?.url);
  const dataPublicacao = new Date(noticia.publishedAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Início</Link>
          <span>/</span>
          {noticia.categoria && (
            <>
              <Link href={`/categoria/${noticia.categoria.slug}`} className="hover:text-blue-600">
                {noticia.categoria.nome}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-gray-900">{noticia.titulo}</span>
        </nav>

        {/* Categoria */}
        {noticia.categoria && (
          <Link 
            href={`/categoria/${noticia.categoria.slug}`}
            className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-4 hover:bg-blue-700 transition-colors"
          >
            {noticia.categoria.nome}
          </Link>
        )}

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {noticia.titulo}
        </h1>

        {/* Resumo */}
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          {noticia.resumo}
        </p>

        {/* Metadados */}
        <div className="flex items-center text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          {noticia.autor && (
            <span className="mr-4 font-medium text-gray-700">Por {noticia.autor}</span>
          )}
          <time>{dataPublicacao}</time>
        </div>

        {/* Imagem destaque */}
        {noticia.imagem && (
          <div className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imagemUrl}
              alt={noticia.imagem.alternativeText || noticia.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
        )}

        {/* Conteúdo */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-lg prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
        />

        {/* Voltar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para página inicial
          </Link>
        </div>
      </div>
    </article>
  );
}

