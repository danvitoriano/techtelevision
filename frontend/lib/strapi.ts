import { Noticia, Categoria, StrapiResponse } from '@/types';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

async function fetchAPI(path: string, options?: RequestInit) {
  const url = `${STRAPI_URL}/api${path}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      next: { revalidate: 60 }, // Revalidar a cada 60 segundos
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
}

export async function getNoticias(params?: {
  limit?: number;
  page?: number;
  categoriaSlug?: string;
  destaque?: boolean;
}): Promise<StrapiResponse<Noticia[]>> {
  const queryParams = new URLSearchParams();
  
  if (params?.limit) queryParams.append('pagination[limit]', params.limit.toString());
  if (params?.page) queryParams.append('pagination[page]', params.page.toString());
  if (params?.categoriaSlug) {
    queryParams.append('filters[categoria][slug][$eq]', params.categoriaSlug);
  }
  if (params?.destaque) {
    queryParams.append('filters[destaque][$eq]', 'true');
  }
  
  queryParams.append('populate', '*');
  queryParams.append('sort[0]', 'publishedAt:desc');
  
  return fetchAPI(`/noticias?${queryParams.toString()}`);
}

export async function getNoticiaBySlug(slug: string): Promise<Noticia | null> {
  const queryParams = new URLSearchParams({
    'filters[slug][$eq]': slug,
    'populate': '*',
  });
  
  const response: StrapiResponse<Noticia[]> = await fetchAPI(`/noticias?${queryParams.toString()}`);
  
  return response.data[0] || null;
}

export async function getCategorias(): Promise<StrapiResponse<Categoria[]>> {
  return fetchAPI('/categorias?sort[0]=nome:asc');
}

export async function getCategoriaBySlug(slug: string): Promise<Categoria | null> {
  const queryParams = new URLSearchParams({
    'filters[slug][$eq]': slug,
  });
  
  const response: StrapiResponse<Categoria[]> = await fetchAPI(`/categorias?${queryParams.toString()}`);
  
  return response.data[0] || null;
}

export function getStrapiMedia(url?: string | null): string {
  if (!url) return '/placeholder.jpg';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

