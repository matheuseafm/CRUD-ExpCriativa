import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Save, X } from 'lucide-react';
import SuccessModal from '../components/SuccessModal';
import { genresInPortuguese, translateToEnglish, translateToPortuguese } from '../utils/genreMap';

interface BookFormData {
  title: string;
  author: string;
  publishYear: number;
  isbn: string;
  genre: string;
}

interface ApiError {
  error?: string | Array<{message: string}>;
}

function BookForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<BookFormData>({
    title: '',
    author: '',
    publishYear: new Date().getFullYear(),
    isbn: '',
    genre: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [newBookId, setNewBookId] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      fetchBook();
    }
  }, [id]);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/books/${id}`);
      const bookData = {
        ...response.data,
        genre: translateToPortuguese(response.data.genre)
      };
      setFormData(bookData);
    } catch (error) {
      toast.error('Erro ao carregar os detalhes do livro');
      navigate('/books');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const englishGenre = translateToEnglish(formData.genre);
      
      if (id) {
        await axios.put(`http://localhost:3001/api/books/${id}`, {
          ...formData,
          genre: englishGenre
        });
        toast.success('Livro atualizado com sucesso');
        setShowSuccessModal(true);
      } else {
        const bookToCreate = {
          title: formData.title,
          author: formData.author,
          publishYear: formData.publishYear,
          isbn: formData.isbn,
          genre: englishGenre
        };
        
        console.log('Enviando dados para API:', bookToCreate);
        
        const response = await axios.post('http://localhost:3001/api/books', bookToCreate);
        console.log('API Response:', response.data);
        
        if (response.data && response.data.id) {
          const bookId = response.data.id;
          setNewBookId(bookId);
          toast.success('Livro adicionado com sucesso');
          setShowSuccessModal(true);
        } else {
          console.error('Resposta da API sem ID:', response.data);
          toast.error('Erro ao adicionar o livro: resposta da API inválida');
        }
      }
    } catch (error: any) {
      console.error('Erro ao processar o livro:', error);
      
      if (error.response) {
        const apiError = error.response.data as ApiError;
        console.error('Erro da API:', apiError);
        
        if (apiError.error) {
          if (Array.isArray(apiError.error)) {
            toast.error(`Erro: ${apiError.error[0].message}`);
          } else {
            toast.error(`Erro: ${apiError.error}`);
          }
        } else {
          toast.error(id ? 'Erro ao atualizar o livro' : 'Erro ao adicionar o livro');
        }
      } else {
        toast.error(id ? 'Erro ao atualizar o livro' : 'Erro ao adicionar o livro');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'publishYear' ? parseInt(value) : value,
    }));
  };

  const handleAddAnother = () => {
    setShowSuccessModal(false);
    setFormData({
      title: '',
      author: '',
      publishYear: new Date().getFullYear(),
      isbn: '',
      genre: '',
    });
  };

  const handleGoToList = () => {
    navigate('/books');
  };

  const handleViewBook = () => {
    if (id) {
      navigate(`/book/${id}`);
    } else if (newBookId) {
      navigate(`/book/${newBookId}`);
    } else {
      toast.error('Não foi possível encontrar o ID do livro');
      navigate('/books');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-20rem)] py-12">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              {id ? 'Editar Livro' : 'Adicionar Novo Livro'}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Título
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Digite o título do livro"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Autor
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Digite o nome do autor"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ano de Publicação
                    </label>
                    <input
                      type="number"
                      name="publishYear"
                      value={formData.publishYear}
                      onChange={handleChange}
                      required
                      min="1000"
                      max={new Date().getFullYear()}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gênero
                    </label>
                    <select
                      name="genre"
                      value={formData.genre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione um gênero</option>
                      {genresInPortuguese.map((genre) => (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ISBN
                  </label>
                  <input
                    type="text"
                    name="isbn"
                    value={formData.isbn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Digite o ISBN"
                    pattern="[0-9-]{10,17}"
                    title="O ISBN deve ter entre 10 e 17 caracteres, contendo apenas números e hífens"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => navigate('/books')}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {loading ? 'Salvando...' : id ? 'Atualizar Livro' : 'Adicionar Livro'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          onAddAnother={handleAddAnother}
          onGoToList={handleGoToList}
          onViewBook={handleViewBook}
          isEdit={!!id}
          bookTitle={formData.title}
        />
      </div>
    </div>
  );
}

export default BookForm;