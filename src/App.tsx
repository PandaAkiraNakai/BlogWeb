import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Characters from './pages/Characters';
import Places from './pages/Places';
import Community from './pages/Community';
import Books from './pages/Books';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-gradient matrix-bg">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/places" element={<Places />} />
            <Route path="/community" element={<Community />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;