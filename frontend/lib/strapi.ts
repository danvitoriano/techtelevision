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
  
  // Especificar explicitamente os campos que queremos
  queryParams.append('fields[0]', 'titulo');
  queryParams.append('fields[1]', 'slug');
  queryParams.append('fields[2]', 'resumo');
  queryParams.append('fields[3]', 'conteudo');
  queryParams.append('fields[4]', 'autor');
  queryParams.append('fields[5]', 'destaque');
  queryParams.append('fields[6]', 'publishedAt');
  queryParams.append('populate[imagem][fields][0]', 'url');
  queryParams.append('populate[imagem][fields][1]', 'alternativeText');
  queryParams.append('populate[imagem][fields][2]', 'formats');
  queryParams.append('populate[categoria][fields][0]', 'nome');
  queryParams.append('populate[categoria][fields][1]', 'slug');
  queryParams.append('sort[0]', 'publishedAt:desc');
  
  return fetchAPI(`/noticias?${queryParams.toString()}`);
}

export async function getNoticiaBySlug(slug: string): Promise<Noticia | null> {
  try {
    // Primeiro tenta buscar pelo slug
    const queryParams = new URLSearchParams();
    
    queryParams.append('filters[slug][$eq]', slug);
    queryParams.append('fields[0]', 'titulo');
    queryParams.append('fields[1]', 'slug');
    queryParams.append('fields[2]', 'resumo');
    queryParams.append('fields[3]', 'conteudo');
    queryParams.append('fields[4]', 'autor');
    queryParams.append('fields[5]', 'destaque');
    queryParams.append('fields[6]', 'publishedAt');
    queryParams.append('populate[imagem][fields][0]', 'url');
    queryParams.append('populate[imagem][fields][1]', 'alternativeText');
    queryParams.append('populate[imagem][fields][2]', 'formats');
    queryParams.append('populate[categoria][fields][0]', 'nome');
    queryParams.append('populate[categoria][fields][1]', 'slug');
    
    const response: StrapiResponse<Noticia[]> = await fetchAPI(`/noticias?${queryParams.toString()}`);
    
    if (response.data[0]) {
      return response.data[0];
    }
    
    // Se não encontrou pelo slug, tenta buscar pelo documentId
    const queryParamsById = new URLSearchParams();
    
    queryParamsById.append('filters[documentId][$eq]', slug);
    queryParamsById.append('fields[0]', 'titulo');
    queryParamsById.append('fields[1]', 'slug');
    queryParamsById.append('fields[2]', 'resumo');
    queryParamsById.append('fields[3]', 'conteudo');
    queryParamsById.append('fields[4]', 'autor');
    queryParamsById.append('fields[5]', 'destaque');
    queryParamsById.append('fields[6]', 'publishedAt');
    queryParamsById.append('populate[imagem][fields][0]', 'url');
    queryParamsById.append('populate[imagem][fields][1]', 'alternativeText');
    queryParamsById.append('populate[imagem][fields][2]', 'formats');
    queryParamsById.append('populate[categoria][fields][0]', 'nome');
    queryParamsById.append('populate[categoria][fields][1]', 'slug');
    
    const responseById: StrapiResponse<Noticia[]> = await fetchAPI(`/noticias?${queryParamsById.toString()}`);
    
    return responseById.data[0] || null;
  } catch (error) {
    console.error('Erro ao buscar notícia:', error);
    return null;
  }
}

export async function getCategorias(): Promise<StrapiResponse<Categoria[]>> {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append('fields[0]', 'nome');
    queryParams.append('fields[1]', 'slug');
    queryParams.append('fields[2]', 'descricao');
    queryParams.append('sort[0]', 'nome:asc');
    
    return fetchAPI(`/categorias?${queryParams.toString()}`);
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return { data: [], meta: { pagination: { page: 1, pageSize: 25, pageCount: 0, total: 0 } } };
  }
}

export async function getCategoriaBySlug(slug: string): Promise<Categoria | null> {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append('filters[slug][$eq]', slug);
    queryParams.append('fields[0]', 'nome');
    queryParams.append('fields[1]', 'slug');
    queryParams.append('fields[2]', 'descricao');
    
    const response: StrapiResponse<Categoria[]> = await fetchAPI(`/categorias?${queryParams.toString()}`);
    
    return response.data[0] || null;
  } catch (error) {
    console.error('Erro ao buscar categoria:', error);
    return null;
  }
}

export function getStrapiMedia(url?: string | null): string {
  if (!url) return '/placeholder.jpg';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

