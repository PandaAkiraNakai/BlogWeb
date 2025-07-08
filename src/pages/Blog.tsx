import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', count: 12 },
    { id: 'writing', name: 'Escritura', count: 5 },
    { id: 'characters', name: 'Personajes', count: 3 },
    { id: 'worldbuilding', name: 'Construcción de mundos', count: 2 },
    { id: 'inspiration', name: 'Inspiración', count: 2 }
  ];

  const posts = [
    {
      id: 1,
      title: "El proceso creativo detrás de 'El Reino de las Sombras'",
      excerpt: "Descubre cómo nació la idea de mi última novela y los desafíos que enfrenté durante su escritura.",
      content: "La creación de 'El Reino de las Sombras' comenzó con un sueño que tuve hace tres años...",
      category: 'writing',
      date: '2024-01-15',
      readTime: '8 min',
      author: 'Tu Nombre',
      tags: ['novela', 'fantasía', 'proceso creativo'],
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: "Construyendo personajes memorables",
      excerpt: "Técnicas y consejos para crear personajes que resuenen con los lectores y perduren en su memoria.",
      content: "Un personaje memorable no es solo alguien con un nombre interesante...",
      category: 'characters',
      date: '2024-01-10',
      readTime: '6 min',
      author: 'Tu Nombre',
      tags: ['personajes', 'escritura', 'desarrollo'],
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: "La importancia de la investigación en la fantasía",
      excerpt: "Por qué incluso los mundos fantásticos necesitan bases sólidas en la realidad.",
      content: "Aunque escribamos sobre mundos imaginarios, la investigación sigue siendo crucial...",
      category: 'worldbuilding',
      date: '2024-01-05',
      readTime: '10 min',
      author: 'Tu Nombre',
      tags: ['investigación', 'worldbuilding', 'fantasía'],
      image: 'https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: "Encontrando inspiración en lo cotidiano",
      excerpt: "Cómo las experiencias diarias pueden convertirse en elementos extraordinarios en nuestras historias.",
      content: "La inspiración está en todas partes, solo necesitamos entrenar nuestra mente para verla...",
      category: 'inspiration',
      date: '2024-01-01',
      readTime: '5 min',
      author: 'Tu Nombre',
      tags: ['inspiración', 'creatividad', 'escritura'],
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: "El arte de escribir diálogos auténticos",
      excerpt: "Técnicas para crear conversaciones que suenen naturales y avancen la narrativa.",
      content: "Los diálogos son una de las herramientas más poderosas de un escritor...",
      category: 'writing',
      date: '2023-12-28',
      readTime: '7 min',
      author: 'Tu Nombre',
      tags: ['diálogos', 'escritura', 'técnica'],
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: "Superando el bloqueo del escritor",
      excerpt: "Estrategias prácticas para vencer la página en blanco y mantener la creatividad fluyendo.",
      content: "El bloqueo del escritor es el enemigo número uno de cualquier autor...",
      category: 'writing',
      date: '2023-12-25',
      readTime: '6 min',
      author: 'Tu Nombre',
      tags: ['bloqueo', 'productividad', 'escritura'],
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
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Blog del Escritor
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Reflexiones, consejos y aventuras en el mundo de la escritura
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white text-amber-600 border border-amber-300 hover:bg-amber-50'
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
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-amber-900 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-amber-700 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-amber-600 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="flex items-center bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 font-semibold">
                  Leer artículo completo
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-amber-700 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;