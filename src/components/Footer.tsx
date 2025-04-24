import React from 'react';
import { Link } from 'react-router-dom';
import {
  Library,
  Github,
  Mail,
  Heart,
  BookOpen,
  Bookmark,
  HelpCircle,
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Library className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-medium text-gray-900">Morlyb</span>
            </div>
            <p className="text-sm text-gray-600">
              Sistema de gerenciamento de biblioteca moderno e intuitivo para
              organizar sua coleção de livros.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors flex items-center"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors flex items-center"
                >
                  <Bookmark className="h-4 w-4 mr-2" />
                  Explorar Livros
                </Link>
              </li>
              <li>
                <Link
                  to="/add"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors flex items-center"
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Adicionar Novo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Links Úteis
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Documentação
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:matheuseafm@icloud.com"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  matheuseafm@icloud.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/matheuseafm"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors flex items-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Github
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Newsletter
              </h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors"
                >
                  Assinar
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2025 Morlyb. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-sm text-gray-600">Feito com</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-sm text-gray-600">por Matheus Moreira</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
