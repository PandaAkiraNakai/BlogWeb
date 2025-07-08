import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, Zap, Database, Cpu } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', count: 12 },
    { id: 'writing', name: 'Neural Writing', count: 5 },
    { id: 'characters', name: 'Entity Design', count: 3 },
    { id: 'worldbuilding', name: 'Realm Construction', count: 2 },
    { id: 'inspiration', name: 'Quantum Inspiration', count: 2 }
  ];

  const posts = [
    {
      id: 1,
      title: "El proceso neural detrás de 'El Reino de las Sombras Digitales'",
      excerpt: "Descubre cómo nació la idea de mi última novela híbrida y los desafíos cuánticos que enfrenté durante su codificación.",
      content: "La creación de 'El Reino de las Sombras Digitales' comenzó con una visión neural que tuve hace tres años...",
      category: 'writing',
      date: '2024-01-15',
      readTime: '8 min',
      author: 'CyberScribe',
      tags: ['novela híbrida', 'fantasía cuántica', 'proceso neural'],
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: "Construyendo entidades digitales memorables",
      excerpt: "Técnicas y algoritmos para crear personajes que resuenen con los usuarios y perduren en su memoria neural.",
      content: "Una entidad memorable no es solo alguien con un nombre interesante...",
      category: 'characters',
      date: '2024-01-10',
      readTime: '6 min',
      author: 'CyberScribe',
      tags: ['entidades', 'diseño neural', 'desarrollo'],
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: "La importancia de la investigación en la fantasía cuántica",
      excerpt: "Por qué incluso los mundos digitales necesitan bases sólidas en la realidad híbrida.",
      content: "Aunque escribamos sobre realidades imaginarias, la investigación cuántica sigue siendo crucial...",
      category: 'worldbuilding',
      date: '2024-01-05',
      readTime: '10 min',
      author: 'CyberScribe',
      tags: ['investigación', 'construcción de realms', 'fantasía cuántica'],
      image: 'https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: "Encontrando inspiración en la Matrix cotidiana",
      excerpt: "Cómo las experiencias digitales pueden convertirse en elementos extraordinarios en nuestras narrativas híbridas.",
      content: "La inspiración cuántica está en todas partes, solo necesitamos entrenar nuestra mente neural para verla...",
      category: 'inspiration',
      date: '2024-01-01',
      readTime: '5 min',
      author: 'CyberScribe',
      tags: ['inspiración cuántica', 'creatividad neural', 'escritura híbrida'],
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: "El arte de escribir diálogos auténticos en realidades híbridas",
      excerpt: "Técnicas para crear conversaciones que suenen naturales y avancen la narrativa cuántica.",
      content: "Los diálogos son una de las herramientas más poderosas de un escritor neural...",
      category: 'writing',
      date: '2023-12-28',
      readTime: '7 min',
      author: 'CyberScribe',
      tags: ['diálogos híbridos', 'escritura neural', 'técnica cuántica'],
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: "Superando el bloqueo del escritor neural",
      excerpt: "Estrategias cuánticas para vencer la página en blanco y mantener la creatividad fluyendo.",
      content: "El bloqueo del escritor neural es el enemigo número uno de cualquier autor híbrido...",
      category: 'writing',
      date: '2023-12-25',
      readTime: '6 min',
      author: 'CyberScribe',
      tags: ['bloqueo neural', 'productividad cuántica', 'escritura híbrida'],
      image: 'https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 bg-dark-gradient matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-primary mb-4 font-medieval neon-text">
            Data Logs del Escritor
          </h1>
          <p className="text-xl text-cyber-light/80 max-w-2xl mx-auto font-cyber">
            Reflexiones neurales, consejos cuánticos y aventuras en el mundo de la escritura híbrida
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-primary h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar data logs..."
                className="w-full pl-10 pr-4 py-3 bg-cyber-dark border border-cyber-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-primary focus:border-transparent text-cyber-light font-cyber cyber-glow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium font-cyber transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyber-primary text-cyber-dark cyber-glow'
                      : 'bg-cyber-dark border border-cyber-primary/30 text-cyber-primary hover:bg-cyber-primary/10'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="hologram-effect rounded-xl overflow-hidden hover:cyber-glow transition-all duration-300 group medieval-frame">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cyber-primary text-cyber-dark px-3 py-1 rounded-full text-sm font-semibold font-cyber">
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-cyber-primary mb-3 line-clamp-2 group-hover:text-cyber-secondary transition-colors font-medieval">
                  {post.title}
                </h2>
                
                <p className="text-cyber-light/80 mb-4 line-clamp-3 font-cyber">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-cyber-light/60 mb-4 font-cyber">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="flex items-center bg-cyber-primary/20 text-cyber-primary px-2 py-1 rounded-full text-xs font-cyber">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-cyber-primary text-cyber-dark py-2 rounded-lg hover:bg-cyber-secondary transition-colors duration-300 font-semibold font-cyber cyber-glow">
                  <div className="flex items-center justify-center space-x-2">
                    <Database className="h-4 w-4" />
                    <span>Acceder Data Log</span>
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Cpu className="h-16 w-16 text-cyber-primary/50 mx-auto mb-4" />
            <p className="text-cyber-light/80 text-lg font-cyber">No se encontraron data logs que coincidan con tu búsqueda neural.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;