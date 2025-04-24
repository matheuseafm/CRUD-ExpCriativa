import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookList from './pages/BookList';
import BookForm from './pages/BookForm';
import BookDetails from './pages/BookDetails';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/search" element={<Search />} />
            <Route path="/add" element={<BookForm />} />
            <Route path="/edit/:id" element={<BookForm />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </main>
        <div>
          <Footer />
        </div>
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;