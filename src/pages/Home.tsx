import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Library,
  Search,
  BookPlus,
  BookMarked,
  BookCheck,
  ArrowRight,
  Star,
  Users,
  Sparkles,
} from 'lucide-react';

function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Library className="h-24 w-24 text-primary-600" />
          </div>
          <h1 className="text-5xl font-light text-gray-900 mb-6">
            Bem-vindo à Morlyb
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto mb-8">
            Gerencie sua coleção de livros de forma simples e elegante.
            Organize, catalogue e mantenha o controle de toda sua biblioteca.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/books"
              className="btn-primary bg-primary-600 hover:bg-primary-700 px-6 py-3 flex items-center"
            >
              Explorar Biblioteca
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/add"
              className="btn-secondary border-primary-600 text-primary-600 px-6 py-3"
            >
              Adicionar Livro
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Recursos Principais
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra todas as ferramentas que tornam nossa biblioteca digital
              única e eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
              <BookOpen className="h-16 w-16 text-primary-600 mb-6" />
              <h3 className="text-2xl font-normal text-gray-900 mb-4">
                Explorar Coleção
              </h3>
              <p className="text-gray-600 font-light">
                Navegue por todos os livros da sua biblioteca com uma interface
                intuitiva e organizada
              </p>
            </div>

            <div className="card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
              <BookPlus className="h-16 w-16 text-primary-600 mb-6" />
              <h3 className="text-2xl font-normal text-gray-900 mb-4">
                Adicionar Livros
              </h3>
              <p className="text-gray-600 font-light">
                Cadastre novos livros facilmente com informações detalhadas e
                organizadas
              </p>
            </div>

            <div className="card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
              <Search className="h-16 w-16 text-primary-600 mb-6" />
              <h3 className="text-2xl font-normal text-gray-900 mb-4">
                Busca Avançada
              </h3>
              <p className="text-gray-600 font-light">
                Encontre qualquer livro rapidamente com nossa busca por título,
                autor ou gênero
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl font-light text-gray-900 mb-2">
                1000+
              </div>
              <p className="text-gray-600">Livros Catalogados</p>
            </div>
            <div className="card p-8 text-center">
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <div className="text-4xl font-light text-gray-900 mb-2">500+</div>
              <p className="text-gray-600">Usuários Ativos</p>
            </div>
            <div className="card p-8 text-center">
              <Sparkles className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-light text-gray-900 mb-2">100%</div>
              <p className="text-gray-600">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Por que escolher nossa plataforma?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra os benefícios de usar nossa biblioteca digital para
              gerenciar sua coleção
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <BookMarked className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-normal text-gray-900 mb-4">
                Recursos Avançados
              </h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-center">
                  <BookCheck className="h-5 w-5 mr-3 text-green-600" />
                  Catalogação completa de livros
                </li>
                <li className="flex items-center">
                  <BookCheck className="h-5 w-5 mr-3 text-green-600" />
                  Sistema de busca avançado
                </li>
                <li className="flex items-center">
                  <BookCheck className="h-5 w-5 mr-3 text-green-600" />
                  Organização por gêneros
                </li>
                <li className="flex items-center">
                  <BookCheck className="h-5 w-5 mr-3 text-green-600" />
                  Gestão de ISBN e metadados
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <BookMarked className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-normal text-gray-900 mb-4">
                Benefícios
              </h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-center">
                  <BookCheck className="h-5 w-5 mr-3 text-green-600" />
                  Interface intuitiva e moderna
                </li>
                <li className="flex items-center">
                  <BookCheck className="h-5 w-5 mr-3 text-green-600" />
                  Acesso rápido às informações
                </li>
                <li className="flex items-center">
                  <BookCheck className="h-5 w-5 mr-3 text-green-600" />
                  Organização eficiente
                </li>
                <li className="flex items-center">
                  <BookCheck className="h-5 w-5 mr-3 text-green-600" />
                  Backup automático dos dados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Comece a organizar sua biblioteca hoje
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já estão aproveitando nossa
            plataforma para gerenciar suas coleções de livros de forma
            eficiente.
          </p>
          <Link
            to="/books"
            className="btn-primary bg-primary-600 hover:bg-primary-700 px-8 py-3 inline-flex items-center"
          >
            Começar Agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
