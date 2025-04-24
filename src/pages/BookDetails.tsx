import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ArrowLeft, Edit2, Trash2, Calendar, BookOpen, Hash, BookIcon } from 'lucide-react';
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

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchBook();
  }, [id]);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/books/${id}`);
      setBook(response.data);
    } catch (error) {
      toast.error('Erro ao carregar os detalhes do livro');
      navigate('/books');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/books/${id}`);
      toast.success('Livro excluído com sucesso');
      navigate('/books');
    } catch (error) {
      toast.error('Erro ao excluir o livro');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!book) return null;

  // Traduzir o gênero do livro para exibição
  const genreInPortuguese = translateToPortuguese(book.genre);

  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate('/books')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar à Lista
        </button>
        <div className="flex space-x-2">
          <Link
            to={`/edit/${book.id}`}
            className="flex items-center px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100 transition-colors"
          >
            <Edit2 className="h-4 w-4 mr-2" />
            Editar
          </Link>
          <button
            onClick={() => setIsDeleteModalOpen(true)}
            className="flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Excluir
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              {genreInPortuguese}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center text-gray-700">
                <BookOpen className="h-5 w-5 mr-3 text-gray-400" />
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Autor</h2>
                  <p className="mt-1 text-lg">{book.author}</p>
                </div>
              </div>

              <div className="flex items-center text-gray-700">
                <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Publicado em</h2>
                  <p className="mt-1 text-lg">{book.publishYear}</p>
                </div>
              </div>

              <div className="flex items-center text-gray-700">
                <Hash className="h-5 w-5 mr-3 text-gray-400" />
                <div>
                  <h2 className="text-sm font-medium text-gray-500">ISBN</h2>
                  <p className="mt-1 text-lg">{book.isbn}</p>
                </div>
              </div>

              <div className="flex items-center text-gray-700">
                <BookIcon className="h-5 w-5 mr-3 text-gray-400" />
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Gênero</h2>
                  <p className="mt-1 text-lg">{genreInPortuguese}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Informações do Livro</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Status</h4>
                  <p className="mt-1 text-sm text-gray-900">Disponível na Biblioteca</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Formato</h4>
                  <p className="mt-1 text-sm text-gray-900">Capa Dura</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Idioma</h4>
                  <p className="mt-1 text-sm text-gray-900">Português</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        itemName={`o livro "${book.title}"`}
      />
    </div>
  );
}

export default BookDetails;