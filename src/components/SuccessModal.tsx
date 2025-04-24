import React from 'react';
import { Check, List, Plus, Eye } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAnother: () => void;
  onGoToList: () => void;
  onViewBook?: () => void;
  isEdit: boolean;
  bookTitle: string;
}

function SuccessModal({ 
  isOpen, 
  onClose, 
  onAddAnother, 
  onGoToList, 
  onViewBook, 
  isEdit, 
  bookTitle 
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-lg font-medium mb-2 text-gray-900">
            {isEdit ? 'Livro atualizado com sucesso!' : 'Livro adicionado com sucesso!'}
          </h2>
          <p className="text-gray-600 mb-6">
            {isEdit 
              ? `As alterações em "${bookTitle}" foram salvas.` 
              : `"${bookTitle}" foi adicionado à sua coleção.`}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              onClick={onGoToList}
              className="flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              <List className="h-4 w-4 mr-2" />
              Ver todos
            </button>
            
            {!isEdit && (
              <button
                onClick={onAddAnother}
                className="flex justify-center items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-md hover:bg-indigo-200 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Adicionar outro
              </button>
            )}

            {onViewBook && (
              <button
                onClick={onViewBook}
                className="flex justify-center items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors"
              >
                <Eye className="h-4 w-4 mr-2" />
                Ver detalhes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal; 