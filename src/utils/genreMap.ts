export const genreMap: Record<string, string> = {
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

export const genreMapReverse: Record<string, string> = 
  Object.fromEntries(Object.entries(genreMap).map(([k, v]) => [v, k]));

export function translateToPortuguese(englishGenre: string): string {
  return genreMap[englishGenre] || englishGenre;
}

export function translateToEnglish(portugueseGenre: string): string {
  return genreMapReverse[portugueseGenre] || portugueseGenre;
}

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