// Mapeamento de gêneros entre inglês e português
export const genreMap: Record<string, string> = {
  // Inglês para Português
  'Fiction': 'Ficção',
  'Non-Fiction': 'Não-Ficção',
  'Science Fiction': 'Ficção Científica',
  'Mystery': 'Mistério',
  'Romance': 'Romance',
  'Fantasy': 'Fantasia',
  'Horror': 'Terror',
  'Biography': 'Biografia',
  'History': 'História',
  'Poetry': 'Poesia',
  'Drama': 'Drama',
  'Adventure': 'Aventura',
  'Thriller': 'Suspense',
  'Psychological Thriller': 'Suspense Psicológico',
  'Historical Fiction': 'Ficção Histórica',
  'Contemporary Fiction': 'Ficção Contemporânea',
  'Literary Fiction': 'Ficção Literária',
  'Dystopian': 'Distopia',
};

// Dicionário inverso para conversão de Português para Inglês
export const genreMapReverse: Record<string, string> = 
  Object.fromEntries(Object.entries(genreMap).map(([k, v]) => [v, k]));

// Função para obter o gênero em português
export function translateToPortuguese(englishGenre: string): string {
  return genreMap[englishGenre] || englishGenre;
}

// Função para obter o gênero em inglês
export function translateToEnglish(portugueseGenre: string): string {
  return genreMapReverse[portugueseGenre] || portugueseGenre;
}

// Lista de gêneros em português para o formulário
export const genresInPortuguese = [
  'Ficção',
  'Não-Ficção',
  'Ficção Científica',
  'Mistério',
  'Romance',
  'Fantasia',
  'Terror',
  'Biografia',
  'História',
  'Poesia',
  'Drama',
  'Aventura',
  'Suspense',
  'Suspense Psicológico',
  'Ficção Histórica',
  'Ficção Contemporânea',
  'Ficção Literária',
  'Distopia',
]; 