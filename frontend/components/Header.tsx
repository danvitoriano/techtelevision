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
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Logo e Busca */}
        <div className="flex items-center justify-between h-16 border-b border-gray-100">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <span className="text-4xl font-black tracking-tight">
              <span className="text-[#CC0000]">TECH</span>
              <span className="text-gray-900"> TELEVISION</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Navegação */}
        <nav className="hidden md:flex items-center space-x-1 h-12 overflow-x-auto">
          <Link 
            href="/" 
            className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#CC0000] hover:bg-gray-50 rounded transition-colors whitespace-nowrap"
          >
            INÍCIO
          </Link>
          {categorias.slice(0, 7).map((categoria) => (
            <Link
              key={categoria.id}
              href={`/categoria/${categoria.slug}`}
              className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#CC0000] hover:bg-gray-50 rounded transition-colors whitespace-nowrap uppercase"
            >
              {categoria.nome}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Menu Mobile */}
      <div className="md:hidden border-t border-gray-200">
        <button className="w-full px-4 py-3 flex items-center justify-between text-gray-700 hover:bg-gray-50">
          <span className="font-bold text-sm">MENU</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

