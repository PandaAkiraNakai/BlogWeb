import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Users, MapPin, MessageCircle, Award, Star, Zap, Shield, Cpu, Database } from 'lucide-react';

const Home = () => {
  const featuredBooks = [
    {
      title: "El Reino de las Sombras Digitales",
      description: "Una épica aventura en un mundo donde la magia cuántica y la tecnología neural coexisten.",
      cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      year: "2024.v3"
    },
    {
      title: "Crónicas del Amanecer Cyber",
      description: "La historia de hackers-magos olvidados que luchan por salvar la Matrix Medieval.",
      cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      year: "2023.v2"
    },
    {
      title: "Los Guardianes del Tiempo Cuántico",
      description: "Viajes a través de portales temporales para corregir glitches en la realidad.",
      cover: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      year: "2022.v1"
    }
  ];

  const stats = [
    { number: "12", label: "Archives Uploaded", icon: Database },
    { number: "50k+", label: "Neural Links", icon: Users },
    { number: "5", label: "System Awards", icon: Award },
    { number: "4.8", label: "User Rating", icon: Star }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-dark-gradient cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/10 via-cyber-secondary/5 to-cyber-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-cyber-light">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-medieval">
                <span className="text-cyber-primary neon-text">Bienvenido al nexus de</span>
                <span className="block text-cyber-secondary neon-text flicker">mis realidades híbridas</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-cyber-light/80 leading-relaxed font-cyber">
                Explora universos donde la magia medieval se fusiona con la tecnología cuántica, 
                conoce entidades digitales inolvidables y descubre realms que existen entre dimensiones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/books"
                  className="inline-flex items-center px-8 py-3 bg-cyber-primary text-cyber-dark rounded-lg font-semibold font-cyber hover:bg-cyber-secondary transition-all duration-300 cyber-glow pulse-glow"
                >
                  <Database className="mr-2 h-5 w-5" />
                  Acceder Archives
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center px-8 py-3 border-2 border-cyber-primary text-cyber-primary rounded-lg font-semibold font-cyber hover:bg-cyber-primary hover:text-cyber-dark transition-all duration-300"
                >
                  <Cpu className="mr-2 h-5 w-5" />
                  Data Logs
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-cyber-primary/20 rounded-2xl blur-xl"></div>
              <img
                src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="CyberScribe"
                className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border border-cyber-primary/30"
              />
              <div className="absolute top-4 right-4 bg-cyber-dark/80 backdrop-blur-sm rounded-lg p-2 border border-cyber-primary/50">
                <Zap className="h-6 w-6 text-cyber-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cyber-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-cyber-dark border border-cyber-primary/30 rounded-lg p-4 w-16 h-16 mx-auto mb-4 group-hover:border-cyber-primary group-hover:cyber-glow transition-all duration-300 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-cyber-primary group-hover:text-cyber-secondary transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-cyber-primary mb-2 font-medieval neon-text">{stat.number}</div>
                  <div className="text-cyber-light/80 font-cyber">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 bg-dark-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cyber-primary mb-4 font-medieval neon-text">
              Archives Destacados
            </h2>
            <p className="text-xl text-cyber-light/80 max-w-2xl mx-auto font-cyber">
              Descubre mis obras más populares y sumérgete en realidades extraordinarias
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <div key={index} className="hologram-effect rounded-xl overflow-hidden hover:cyber-glow transition-all duration-300 group medieval-frame">
                <div className="relative overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-cyber-primary text-cyber-dark px-3 py-1 rounded-full text-sm font-semibold font-cyber">
                    {book.year}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyber-primary mb-2 font-medieval">{book.title}</h3>
                  <p className="text-cyber-light/80 mb-4 font-cyber">{book.description}</p>
                  <Link
                    to="/books"
                    className="inline-flex items-center text-cyber-primary hover:text-cyber-secondary font-semibold font-cyber transition-colors duration-300"
                  >
                    Acceder Data
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 bg-cyber-darker/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cyber-primary mb-4 font-medieval neon-text">
              Explora el Nexus
            </h2>
            <p className="text-xl text-cyber-light/80 max-w-2xl mx-auto font-cyber">
              Cada módulo te llevará a una experiencia única dentro de mis realidades híbridas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/characters"
              className="bg-gradient-to-br from-cyber-secondary/20 to-cyber-purple/20 border border-cyber-secondary/30 rounded-xl p-8 text-cyber-light hover:cyber-glow transition-all duration-300 transform hover:scale-105 group"
            >
              <Users className="h-12 w-12 mb-4 text-cyber-secondary group-hover:text-cyber-primary transition-colors duration-300" />
              <h3 className="text-2xl font-bold mb-2 font-medieval text-cyber-secondary">Entities</h3>
              <p className="text-cyber-light/80 font-cyber">Conoce a los héroes digitales y villanos que pueblan mis realidades</p>
            </Link>
            
            <Link
              to="/places"
              className="bg-gradient-to-br from-cyber-green/20 to-cyber-primary/20 border border-cyber-green/30 rounded-xl p-8 text-cyber-light hover:cyber-glow transition-all duration-300 transform hover:scale-105 group"
            >
              <MapPin className="h-12 w-12 mb-4 text-cyber-green group-hover:text-cyber-primary transition-colors duration-300" />
              <h3 className="text-2xl font-bold mb-2 font-medieval text-cyber-green">Realms</h3>
              <p className="text-cyber-light/80 font-cyber">Explora los mundos híbridos donde ocurren las aventuras cuánticas</p>
            </Link>
            
            <Link
              to="/community"
              className="bg-gradient-to-br from-cyber-accent/20 to-medieval-gold/20 border border-cyber-accent/30 rounded-xl p-8 text-cyber-light hover:cyber-glow transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageCircle className="h-12 w-12 mb-4 text-cyber-accent group-hover:text-cyber-primary transition-colors duration-300" />
              <h3 className="text-2xl font-bold mb-2 font-medieval text-cyber-accent">Network</h3>
              <p className="text-cyber-light/80 font-cyber">Únete a otros usuarios y comparte tu pasión por las realidades híbridas</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;