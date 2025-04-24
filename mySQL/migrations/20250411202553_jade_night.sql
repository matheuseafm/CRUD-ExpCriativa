-- 1. Cria o banco com charset adequado
CREATE DATABASE IF NOT EXISTS book_management
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;
USE book_management;

-- 2. Cria a tabela com tipos e índices otimizados
CREATE TABLE IF NOT EXISTS books (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  publish_year YEAR NOT NULL,
  isbn VARCHAR(20) NOT NULL UNIQUE,
  genre VARCHAR(100) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
    ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_author (author),
  INDEX idx_genre (genre)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;

-- 3. Dados de exemplo
INSERT INTO books (title, author, publish_year, isbn, genre) VALUES
  ('The Great Gatsby', 'F. Scott Fitzgerald', 1925, '978-0743273565', 'Fiction'),
  ('To Kill a Mockingbird', 'Harper Lee', 1960, '978-0446310789', 'Fiction'),
  ('1984', 'George Orwell', 1949, '978-0451524935', 'Science Fiction');
