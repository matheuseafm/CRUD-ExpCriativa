import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Search as SearchIcon, BookOpen, Eye, Edit2, Trash2 } from 'lucide-react';
import { translateToPortuguese } from '../utils/genreMap';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';
import toast from 'react-hot-toast';

interface Book {
  id: number;
  title: string;
  author: string;
  publishYear: number;
  isbn: string;
  genre: string;
}

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredBooks([]);
      return;
    }

    const results = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredBooks(results);
  }, [searchTerm, books]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/books');
      setBooks(response.data);
    } catch (error) {
      toast.error('Erro ao carregar os livros');
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (book: Book) => {
    setBookToDelete(book);
  };

  const closeDeleteModal = () => {
    setBookToDelete(null);
  };

  const handleDelete = async () => {
    if (!bookToDelete) return;
    
    try {
      await axios.delete(`http://localhost:3001/api/books/${bookToDelete.id}`);
      toast.success('Livro excluído com sucesso');
      fetchBooks();
      closeDeleteModal();
    } catch (error) {
      toast.error('Erro ao excluir o livro');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 mb-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-light text-gray-900 mb-6">Pesquisar Livros</h1>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Digite um título, autor, ISBN ou gênero..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            autoFocus
          />
        </div>
      </div>

      {searchTerm.trim() !== '' && (
        <div className="mt-8">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="mx-auto h-16 w-16 text-gray-300" />
              <h3 className="mt-4 text-xl font-light text-gray-900">
                Nenhum livro encontrado
              </h3>
              <p className="mt-2 text-gray-500 font-light">
                Tente ajustar seus critérios de busca
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-light text-gray-900 mb-4">
                {filteredBooks.length} resultado{filteredBooks.length !== 1 ? 's' : ''} encontrado{filteredBooks.length !== 1 ? 's' : ''}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <div key={book.id} className="card overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 text-xs font-light bg-primary-50 text-primary-700 rounded-full">
                          {translateToPortuguese(book.genre)}
                        </span>
                        <span className="text-sm text-gray-500 font-light">
                          {book.publishYear}
                        </span>
                      </div>
                      <h2 className="text-xl font-normal text-gray-900 mb-2 line-clamp-2">
                        {book.title}
                      </h2>
                      <p className="text-gray-600 mb-4 font-light">
                        Por {book.author}
                      </p>
                      <p className="text-sm text-gray-500 mb-4 font-light">
                        ISBN: {book.isbn}
                      </p>
                      <div className="flex justify-end space-x-2 pt-4 border-t border-gray-100">
                        <Link
                          to={`/book/${book.id}`}
                          className="p-2 text-primary-600 hover:bg-primary-50 rounded-full transition-colors duration-200"
                          title="Ver Detalhes"
                        >
                          <Eye className="h-5 w-5" />
                        </Link>
                        <Link
                          to={`/edit/${book.id}`}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors duration-200"
                          title="Editar Livro"
                        >
                          <Edit2 className="h-5 w-5" />
                        </Link>
                        <button
                          onClick={() => openDeleteModal(book)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
                          title="Excluir Livro"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <DeleteConfirmationModal
        isOpen={bookToDelete !== null}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
        itemName={bookToDelete ? `o livro "${bookToDelete.title}"` : ''}
      />
    </div>
  );
}

export default Search; 