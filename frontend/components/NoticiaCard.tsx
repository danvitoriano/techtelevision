import Link from 'next/link';
import Image from 'next/image';
import { Noticia } from '@/types';
import { getStrapiMedia } from '@/lib/strapi';

interface NoticiaCardProps {
  noticia: Noticia;
  destaque?: boolean;
}

export default function NoticiaCard({ noticia, destaque = false }: NoticiaCardProps) {
  const imagemUrl = getStrapiMedia(noticia.imagem?.url);
  const dataPublicacao = new Date(noticia.publishedAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  if (destaque) {
    return (
      <Link href={`/noticia/${noticia.slug}`} className="group block">
        <article className="relative h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          <Image
            src={imagemUrl}
            alt={noticia.imagem?.alternativeText || noticia.titulo}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            {noticia.categoria && (
              <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-semibold rounded-full mb-3">
                {noticia.categoria.nome}
              </span>
            )}
            <h2 className="text-3xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
              {noticia.titulo}
            </h2>
            <p className="text-gray-200 mb-3 line-clamp-2">{noticia.resumo}</p>
            <div className="flex items-center text-sm text-gray-300">
              {noticia.autor && <span className="mr-4">{noticia.autor}</span>}
              <time>{dataPublicacao}</time>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/noticia/${noticia.slug}`} className="group block">
      <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
        <div className="relative h-48 w-full bg-gray-200">
          <Image
            src={imagemUrl}
            alt={noticia.imagem?.alternativeText || noticia.titulo}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          {noticia.categoria && (
            <span className="inline-block w-fit px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
              {noticia.categoria.nome}
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {noticia.titulo}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{noticia.resumo}</p>
          <div className="flex items-center text-sm text-gray-500 pt-3 border-t border-gray-100">
            {noticia.autor && <span className="mr-4">{noticia.autor}</span>}
            <time>{dataPublicacao}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}

