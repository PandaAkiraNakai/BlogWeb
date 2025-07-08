import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Users, MapPin, MessageCircle, Award, Star } from 'lucide-react';

const Home = () => {
  const featuredBooks = [
    {
      title: "El Reino de las Sombras",
      description: "Una épica aventura en un mundo donde la magia y la tecnología coexisten.",
      cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      year: "2023"
    },
    {
      title: "Crónicas del Amanecer",
      description: "La historia de héroes olvidados que luchan por salvar su mundo.",
      cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      year: "2022"
    },
    {
      title: "Los Guardianes del Tiempo",
      description: "Viajes a través del tiempo para corregir los errores del pasado.",
      cover: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      year: "2021"
    }
  ];

  const stats = [
    { number: "12", label: "Libros Publicados", icon: BookOpen },
    { number: "50k+", label: "Lectores", icon: Users },
    { number: "5", label: "Premios", icon: Award },
    { number: "4.8", label: "Calificación", icon: Star }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Bienvenido al mundo de
                <span className="block text-amber-300">mis historias</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-amber-100 leading-relaxed">
                Explora universos fantásticos, conoce personajes inolvidables y descubre lugares que solo existen en la imaginación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/books"
                  className="inline-flex items-center px-8 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Ver mis libros
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center px-8 py-3 border-2 border-amber-300 text-amber-300 rounded-lg font-semibold hover:bg-amber-300 hover:text-amber-900 transition-all duration-200"
                >
                  Leer el blog
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Autor"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-200">
                    <Icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-3xl font-bold text-amber-900 mb-2">{stat.number}</div>
                  <div className="text-amber-700">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Libros Destacados
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Descubre mis obras más populares y sumérgete en mundos extraordinarios
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {book.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{book.title}</h3>
                  <p className="text-amber-700 mb-4">{book.description}</p>
                  <Link
                    to="/books"
                    className="inline-flex items-center text-amber-600 hover:text-amber-800 font-semibold"
                  >
                    Leer más
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Explora mi universo
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Cada sección te llevará a una experiencia única dentro de mis mundos literarios
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/characters"
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Users className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Personajes</h3>
              <p className="text-purple-100">Conoce a los héroes y villanos que pueblan mis historias</p>
            </Link>
            
            <Link
              to="/places"
              className="bg-gradient-to-br from-green-500 to-blue-500 rounded-xl p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MapPin className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Lugares</h3>
              <p className="text-green-100">Explora los mundos fantásticos donde ocurren las aventuras</p>
            </Link>
            
            <Link
              to="/community"
              className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Comunidad</h3>
              <p className="text-orange-100">Únete a otros lectores y comparte tu pasión por la lectura</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;