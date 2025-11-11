import Link from 'next/link';
import Image from 'next/image';
import { Noticia } from '@/types';
import { getStrapiMedia } from '@/lib/strapi';

interface NoticiaCardProps {
  noticia: Noticia;
  destaque?: boolean;
  variant?: 'hero' | 'large' | 'medium' | 'small';
}

export default function NoticiaCard({ noticia, destaque = false, variant = 'medium' }: NoticiaCardProps) {
  const imagemUrl = getStrapiMedia(noticia.imagem?.url);
  const dataPublicacao = new Date(noticia.publishedAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Usar slug ou documentId como fallback
  const urlSlug = noticia.slug || noticia.documentId;

  // Hero card - notícia principal grande
  if (destaque || variant === 'hero') {
    return (
      <Link href={`/noticia/${urlSlug}`} className="group block bg-white">
        <article className="relative h-[500px] overflow-hidden">
          <Image
            src={imagemUrl}
            alt={noticia.imagem?.alternativeText || noticia.titulo}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {noticia.categoria && (
              <span className="inline-block px-2 py-1 bg-[#BB1919] text-white text-xs font-bold uppercase mb-3">
                {noticia.categoria.nome}
              </span>
            )}
            <h2 className="text-white text-4xl font-bold mb-3 group-hover:underline leading-tight">
              {noticia.titulo}
            </h2>
            <p className="text-white text-lg mb-3 line-clamp-2 opacity-90">{noticia.resumo}</p>
            <div className="flex items-center text-sm text-gray-300">
              {noticia.autor && <span className="mr-4">{noticia.autor}</span>}
              <time>{dataPublicacao}</time>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // Large card - secundário grande
  if (variant === 'large') {
    return (
      <Link href={`/noticia/${urlSlug}`} className="group block bg-white border-b-2 border-[#e8e8e8]">
        <article className="flex flex-col">
          <div className="relative h-56 w-full bg-gray-200">
            <Image
              src={imagemUrl}
              alt={noticia.imagem?.alternativeText || noticia.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="p-4">
            {noticia.categoria && (
              <span className="inline-block px-2 py-1 bg-[#BB1919] text-white text-xs font-bold uppercase mb-2">
                {noticia.categoria.nome}
              </span>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#BB1919] leading-tight">
              {noticia.titulo}
            </h3>
            <p className="text-gray-600 mb-3 line-clamp-2">{noticia.resumo}</p>
            <div className="flex items-center text-xs text-gray-500">
              <time>{dataPublicacao}</time>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // Small card - listagem compacta
  if (variant === 'small') {
    return (
      <Link href={`/noticia/${urlSlug}`} className="group block bg-white border-b border-[#e8e8e8] py-3">
        <article className="flex gap-3">
          <div className="relative h-20 w-32 flex-shrink-0 bg-gray-200">
            <Image
              src={imagemUrl}
              alt={noticia.imagem?.alternativeText || noticia.titulo}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            {noticia.categoria && (
              <span className="inline-block w-fit px-1.5 py-0.5 bg-[#BB1919] text-white text-[10px] font-bold uppercase mb-1">
                {noticia.categoria.nome}
              </span>
            )}
            <h4 className="text-base font-bold text-gray-900 group-hover:text-[#BB1919] leading-tight line-clamp-2">
              {noticia.titulo}
            </h4>
            <time className="text-xs text-gray-500 mt-1">{dataPublicacao}</time>
          </div>
        </article>
      </Link>
    );
  }

  // Medium card - padrão
  return (
    <Link href={`/noticia/${urlSlug}`} className="group block bg-white border-b-2 border-[#e8e8e8]">
      <article className="flex flex-col h-full">
        <div className="relative h-48 w-full bg-gray-200">
          <Image
            src={imagemUrl}
            alt={noticia.imagem?.alternativeText || noticia.titulo}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          {noticia.categoria && (
            <span className="inline-block w-fit px-2 py-1 bg-[#BB1919] text-white text-xs font-bold uppercase mb-2">
              {noticia.categoria.nome}
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#BB1919] leading-tight line-clamp-2">
            {noticia.titulo}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">{noticia.resumo}</p>
          <div className="flex items-center text-xs text-gray-500 mt-auto">
            <time>{dataPublicacao}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}

