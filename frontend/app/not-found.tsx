import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-[#BB1919] mb-4">404</h1>
          <div className="h-1 w-32 bg-[#BB1919] mx-auto mb-6"></div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Página não encontrada</h2>
        <p className="text-lg text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe, foi removida ou está temporariamente indisponível.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-block bg-[#BB1919] text-white px-8 py-3 font-bold hover:bg-[#990000] transition-colors"
          >
            Ir para página inicial
          </Link>
          <Link 
            href="/"
            className="inline-block border-2 border-[#BB1919] text-[#BB1919] px-8 py-3 font-bold hover:bg-[#BB1919] hover:text-white transition-colors"
          >
            Ver últimas notícias
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t-2 border-[#e8e8e8]">
          <p className="text-sm text-gray-500">
            Se você acredita que isso é um erro, entre em contato conosco.
          </p>
        </div>
      </div>
    </div>
  );
}

