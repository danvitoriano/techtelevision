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
    <article className="bg-white">
      <div className="max-w-[800px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-4">
          <Link href="/" className="hover:text-[#BB1919] transition-colors">Início</Link>
          <span>/</span>
          {noticia.categoria && (
            <>
              <Link href={`/categoria/${noticia.categoria.slug}`} className="hover:text-[#BB1919] transition-colors">
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
            className="inline-block px-2 py-1 bg-[#BB1919] text-white text-xs font-bold uppercase mb-4 hover:bg-[#990000] transition-colors"
          >
            {noticia.categoria.nome}
          </Link>
        )}

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {noticia.titulo}
        </h1>

        {/* Resumo */}
        <p className="text-xl text-gray-600 mb-6 leading-relaxed font-medium border-l-4 border-[#BB1919] pl-4">
          {noticia.resumo}
        </p>

        {/* Metadados */}
        <div className="flex items-center text-sm text-gray-500 mb-8 pb-6 border-b-2 border-[#e8e8e8]">
          {noticia.autor && (
            <span className="mr-4 font-semibold text-gray-700">Por {noticia.autor}</span>
          )}
          <time>{dataPublicacao}</time>
        </div>

        {/* Imagem destaque */}
        {noticia.imagem && (
          <div className="relative w-full h-[400px] md:h-[500px] mb-8 overflow-hidden">
            <Image
              src={imagemUrl}
              alt={noticia.imagem.alternativeText || noticia.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
            {noticia.imagem.alternativeText && (
              <p className="text-xs text-gray-500 mt-2 italic">{noticia.imagem.alternativeText}</p>
            )}
          </div>
        )}

        {/* Conteúdo */}
        <div 
          className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#BB1919] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
          dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
        />

        {/* Voltar */}
        <div className="mt-12 pt-8 border-t-2 border-[#e8e8e8]">
          <Link 
            href="/"
            className="inline-flex items-center text-[#BB1919] hover:underline font-semibold transition-colors text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para página inicial
          </Link>
        </div>
      </div>
    </article>
  );
}

