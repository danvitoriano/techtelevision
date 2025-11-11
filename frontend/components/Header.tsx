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
    <header className="bg-black sticky top-0 z-50">
      <div className="border-b-4 border-[#BB1919]">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex items-center h-14">
            <Link href="/" className="text-3xl font-bold text-white hover:text-gray-300 transition-colors mr-8">
              <span className="bg-[#BB1919] px-2 py-1">PORTAL</span>
            </Link>
            
            <nav className="hidden md:flex flex-1 h-full">
              <Link href="/" className="text-white hover:bg-[#BB1919] transition-colors text-sm font-semibold px-4 flex items-center border-r border-gray-800">
                Início
              </Link>
              {categorias.slice(0, 6).map((categoria) => (
                <Link
                  key={categoria.id}
                  href={`/categoria/${categoria.slug}`}
                  className="text-white hover:bg-[#BB1919] transition-colors text-sm font-semibold px-4 flex items-center border-r border-gray-800"
                >
                  {categoria.nome}
                </Link>
              ))}
            </nav>
            
            <button className="md:hidden text-white hover:text-gray-300 ml-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

