import Link from 'next/link';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12">
        {/* Logo e descrição */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <Link href="/" className="inline-block mb-4">
            <span className="text-3xl font-black tracking-tight">
              <span className="text-[#CC0000]">TECH</span>
              <span className="text-gray-900"> TELEVISION</span>
            </span>
          </Link>
          <p className="text-gray-600 max-w-2xl">
            Seu portal de notícias sobre tecnologia, inovação e tendências digitais. 
            Cobertura completa e atualizada sobre o mundo tech.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-gray-900 text-sm font-bold mb-4 uppercase tracking-wide">Seções</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/tecnologia" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Tecnologia
                </Link>
              </li>
              <li>
                <Link href="/inovacao" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Inovação
                </Link>
              </li>
              <li>
                <Link href="/startups" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Startups
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 text-sm font-bold mb-4 uppercase tracking-wide">Sobre Nós</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link href="/anuncie" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Anuncie Conosco
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 text-sm font-bold mb-4 uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/termos" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 text-sm font-bold mb-4 uppercase tracking-wide">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#CC0000] transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#CC0000] transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#CC0000] transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p className="mb-2 md:mb-0">&copy; {anoAtual} Tech Television. Todos os direitos reservados.</p>
            <p className="text-gray-500">Desenvolvido com Next.js e Strapi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

