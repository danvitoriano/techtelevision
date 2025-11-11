import Link from 'next/link';
import { getCategorias } from '@/lib/strapi';
import { Categoria } from '@/types';

export default async function Header() {
  let categorias: Categoria[] = [];
  
  try {
    const response = await getCategorias();
    categorias = response.data;
  } catch (error) {
    console.error('Erro ao carregar categorias:', error);
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Portal de Notícias
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Início
            </Link>
            {categorias.slice(0, 5).map((categoria) => (
              <Link
                key={categoria.id}
                href={`/categoria/${categoria.slug}`}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {categoria.nome}
              </Link>
            ))}
          </nav>
          
          <button className="md:hidden text-gray-700 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

