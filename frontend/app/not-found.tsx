import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-10">
          <h1 className="text-9xl font-black text-[#CC0000] mb-6 tracking-tighter">404</h1>
          <div className="h-2 w-24 bg-[#CC0000] mx-auto"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          Página não encontrada
        </h2>
        
        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto">
          Desculpe, a página que você está procurando não existe, foi removida ou está temporariamente indisponível.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-block bg-[#CC0000] text-white px-10 py-4 font-bold hover:bg-[#A00000] transition-colors text-sm tracking-wide shadow-lg hover:shadow-xl"
          >
            IR PARA PÁGINA INICIAL
          </Link>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Se você acredita que isso é um erro, 
            <Link href="/contato" className="text-[#CC0000] hover:underline ml-1 font-medium">
              entre em contato conosco
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

