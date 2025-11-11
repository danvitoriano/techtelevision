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
            <h4 className="text-gray-900 text-sm font-bold mb-4 uppercase tracking-wide">Editorias</h4>
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
              <li>
                <Link href="/inteligencia-artificial" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  IA
                </Link>
              </li>
              <li>
                <Link href="/gadgets" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  Gadgets
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
                <Link href="/tv" className="text-gray-600 hover:text-[#CC0000] transition-colors">
                  📺 TV ao Vivo
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
              <a 
                href="https://www.youtube.com/@TechTelevisionBrasil" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#CC0000] transition-colors" 
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/tech.television" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#CC0000] transition-colors" 
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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

