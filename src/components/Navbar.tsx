import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Library, BookOpen, Search, Plus } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Library className="h-6 w-6 text-white" />
            <div>
              <span className="text-xl font-light tracking-tight text-white">
                Morlyb
              </span>
              <p className="text-xs text-primary-100 font-light">
                Gerenciamento de Biblioteca
              </p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/books"
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isActive('/books') 
                ? 'text-white' 
                : 'text-primary-100 hover:text-white'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-light">Explorar</span>
            </Link>
            <Link
              to="/search"
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isActive('/search') 
                ? 'text-white' 
                : 'text-primary-100 hover:text-white'
              }`}
            >
              <Search className="h-4 w-4" />
              <span className="text-sm font-light">Pesquisar</span>
            </Link>
            <div className="h-5 w-px bg-primary-500"></div>
            <Link
              to="/add"
              className="flex items-center bg-white text-primary-700 px-4 py-2 rounded-lg text-sm font-light 
                       hover:bg-primary-50 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Livro
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
