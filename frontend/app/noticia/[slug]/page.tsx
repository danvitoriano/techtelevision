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
    <div className="bg-white">
      <article className="max-w-[900px] mx-auto px-4 lg:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#CC0000] transition-colors font-medium">Início</Link>
          <span>›</span>
          {noticia.categoria && (
            <>
              <Link href={`/categoria/${noticia.categoria.slug}`} className="hover:text-[#CC0000] transition-colors font-medium">
                {noticia.categoria.nome}
              </Link>
              <span>›</span>
            </>
          )}
          <span className="text-gray-900 truncate">{noticia.titulo}</span>
        </nav>

        {/* Categoria */}
        {noticia.categoria && (
          <Link 
            href={`/categoria/${noticia.categoria.slug}`}
            className="inline-block px-3 py-1.5 bg-[#CC0000] text-white text-xs font-bold uppercase mb-4 hover:bg-[#A00000] transition-colors tracking-wide"
          >
            {noticia.categoria.nome}
          </Link>
        )}

        {/* Título */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          {noticia.titulo}
        </h1>

        {/* Resumo */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-normal">
          {noticia.resumo}
        </p>

        {/* Metadados */}
        <div className="flex items-center text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
          {noticia.autor && (
            <span className="mr-4 font-semibold text-gray-900">Por {noticia.autor}</span>
          )}
          <span className="mr-4">•</span>
          <time>{dataPublicacao}</time>
        </div>

        {/* Imagem destaque */}
        {noticia.imagem && (
          <div className="mb-10">
            <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden bg-gray-100">
              <Image
                src={imagemUrl}
                alt={noticia.imagem.alternativeText || noticia.titulo}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>
            {noticia.imagem.alternativeText && (
              <p className="text-sm text-gray-500 mt-3 italic">{noticia.imagem.alternativeText}</p>
            )}
          </div>
        )}

        {/* Conteúdo */}
        <div 
          className="prose prose-lg max-w-none 
            prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#CC0000] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-ul:text-gray-700 prose-ol:text-gray-700
            prose-li:mb-2
            prose-img:rounded-none prose-img:my-8"
          dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
        />

        {/* Voltar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link 
            href="/"
            className="inline-flex items-center text-[#CC0000] hover:text-[#A00000] font-bold transition-colors text-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            VOLTAR PARA PÁGINA INICIAL
          </Link>
        </div>
      </article>
    </div>
  );
}

