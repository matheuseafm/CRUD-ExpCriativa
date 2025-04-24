import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Edit2, Trash2, Eye, Search, BookOpen, Filter } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';
import { translateToPortuguese } from '../utils/genreMap';

interface Book {
  id: number;
  title: string;
  author: string;
  publishYear: number;
  isbn: string;
  genre: string;
}

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'author' | 'year'>('title');
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null);

  useEffect(() => {
    fetchBooks();
  }, []);

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

  const filteredBooks = books
    .filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === '' || book.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'year':
          return b.publishYear - a.publishYear;
        default:
          return 0;
      }
    });

  const genres = Array.from(new Set(books.map((book) => book.genre)));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-theme(spacing.32))] space-y-8 mb-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h1 className="text-4xl font-light text-gray-900">Sua coleção</h1>
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <div className="relative flex-shrink-0 w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Pesquisar livros..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-primary pl-9 py-2"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="input-primary w-48 py-2"
            >
              <option value="">Todos os Gêneros</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {translateToPortuguese(genre)}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as 'title' | 'author' | 'year')
              }
              className="input-primary w-48 py-2"
            >
              <option value="title">Ordenar por Título</option>
              <option value="author">Ordenar por Autor</option>
              <option value="year">Ordenar por Ano</option>
            </select>
          </div>
        </div>
      </div>

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

export default BookList;
