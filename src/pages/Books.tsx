import React, { useState } from 'react';
import { Star, Calendar, BookOpen, Award, Download, ExternalLink, Zap, Database, Cpu } from 'lucide-react';

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "El Reino de las Sombras Digitales",
      series: "Saga de Aethermoor.net",
      volume: "Archive 1",
      description: "Una épica aventura en un mundo donde la magia cuántica y la tecnología neural coexisten en perfecta armonía.",
      fullDescription: "En un mundo flotante entre las nubes digitales, Lyra Ventolámina.exe descubre que es la última heredera de un poder ancestral cuántico. Cuando las fuerzas oscuras de Shadowmere.virus amenazan con sumir el mundo en la oscuridad eterna digital, Lyra debe reunir a un grupo de héroes improbables para salvar todo lo que ama. Una historia de valor neural, sacrificio y la lucha eterna entre la luz y la oscuridad digital.",
      cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      year: "2024.v3",
      pages: 456,
      rating: 4.8,
      reviews: 1247,
      genre: "Fantasía Épica Cyberpunk",
      status: "Publicado",
      awards: ["Premio Nacional de Fantasía Cuántica 2024", "Mejor Debut Novel Cyber Fantasy Awards"],
      chapters: [
        "El Despertar del Viento Digital",
        "La Profecía Olvidada.exe",
        "Los Guardianes del Cielo Virtual",
        "El Primer Encuentro Neural",
        "La Forja de Alianzas Cuánticas"
      ]
    },
    {
      id: 2,
      title: "Crónicas del Amanecer Cyber",
      series: "Saga de Aethermoor.net",
      volume: "Archive 2",
      description: "La historia continúa mientras nuevos enemigos digitales emergen y antiguos secretos cuánticos son revelados.",
      fullDescription: "Seis meses después de la derrota de Shadowmere.virus, el mundo digital parece estar en paz. Pero cuando antiguos artefactos cuánticos comienzan a despertar y nuevas amenazas emergen desde las profundidades del tiempo virtual, Lyra y sus compañeros deben enfrentar enemigos aún más poderosos que antes. Los secretos del pasado digital salen a la luz, y el destino de todos los mundos pende de un hilo cuántico.",
      cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      year: "2023.v2",
      pages: 512,
      rating: 4.9,
      reviews: 2156,
      genre: "Fantasía Épica Cyberpunk",
      status: "Publicado",
      awards: ["Mejor Secuela Cyber 2023", "Hugo Award Nominee Digital"],
      chapters: [
        "Ecos del Pasado Digital",
        "El Despertar Ancestral.exe",
        "Los Fragmentos del Tiempo Cuántico",
        "La Última Profecía Neural",
        "El Precio del Poder Virtual"
      ]
    },
    {
      id: 3,
      title: "Los Guardianes del Tiempo Cuántico",
      series: "Saga de Aethermoor.net",
      volume: "Archive 3",
      description: "La saga épica llega a su conclusión con una batalla final que determinará el destino de todas las realidades digitales.",
      fullDescription: "En el capítulo final de la saga, los límites entre pasado, presente y futuro digital se desdibujan. Lyra debe viajar a través del tiempo cuántico mismo para prevenir una catástrofe que amenaza con destruir no solo su mundo, sino toda la realidad híbrida. Con la ayuda de aliados de todas las épocas digitales, deberá enfrentar la verdad sobre su linaje neural y tomar la decisión más difícil de su vida virtual.",
      cover: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      year: "2022.v1",
      pages: 587,
      rating: 5.0,
      reviews: 3420,
      genre: "Fantasía Épica Cyberpunk",
      status: "Publicado",
      awards: ["Mejor Libro del Año Digital 2022", "World Fantasy Award Cyber", "Nebula Award Cuántico"],
      chapters: [
        "El Último Guardián Digital",
        "Viajes Temporales Cuánticos",
        "La Convergencia Neural",
        "Sacrificios Necesarios.exe",
        "El Nuevo Amanecer Virtual"
      ]
    },
    {
      id: 4,
      title: "El Despertar de los Dragones Cyber",
      series: "Nueva Saga Digital",
      volume: "Archive 1",
      description: "Una nueva aventura comienza cuando los dragones digitales regresan al mundo después de mil años de ausencia virtual.",
      fullDescription: "En un mundo donde los dragones fueron extintos digitalmente hace mil años, una joven arqueóloga virtual descubre un huevo de dragón en una antigua ruina cuántica. Su eclosión digital desencadena una serie de eventos que cambiarán el mundo para siempre. Mientras los dragones despiertan uno por uno en el ciberespacio, las naciones se preparan para una nueva era de magia y guerra híbrida.",
      cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      year: "2025.v1",
      pages: 420,
      rating: 4.7,
      reviews: 892,
      genre: "Fantasía de Dragones Cyberpunk",
      status: "Próximamente",
      awards: [],
      chapters: [
        "El Huevo Perdido.exe",
        "El Primer Vuelo Digital",
        "La Llamada Ancestral Cuántica",
        "El Consejo de Naciones Virtuales",
        "La Nueva Alianza Neural"
      ]
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-cyber-accent fill-current' : 'text-cyber-light/30'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-8 bg-dark-gradient matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-primary mb-4 font-medieval neon-text">
            Mis Archives
          </h1>
          <p className="text-xl text-cyber-light/80 max-w-2xl mx-auto font-cyber">
            Descubre las sagas épicas digitales que han cautivado a miles de usuarios alrededor del ciberespacio
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="hologram-effect rounded-xl overflow-hidden hover:cyber-glow transition-all duration-300 group medieval-frame">
              <div className="relative overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold font-cyber ${
                    book.status === 'Publicado' ? 'bg-cyber-green text-cyber-dark' : 'bg-cyber-accent text-cyber-dark'
                  }`}>
                    {book.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-cyber-dark/80 backdrop-blur-sm text-cyber-primary px-2 py-1 rounded-full text-sm font-cyber">
                    {book.year}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="text-cyber-secondary text-sm font-medium mb-1 font-cyber">
                  {book.series} • {book.volume}
                </div>
                <h2 className="text-xl font-bold text-cyber-primary mb-2 font-medieval">{book.title}</h2>
                <p className="text-cyber-light/80 text-sm mb-3 line-clamp-3 font-cyber">
                  {book.description}
                </p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {renderStars(book.rating)}
                  </div>
                  <span className="ml-2 text-sm text-cyber-light/60 font-cyber">
                    {book.rating} ({book.reviews} reseñas)
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-cyber-light/60 mb-4 font-cyber">
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {book.pages} páginas
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {book.year}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="bg-cyber-primary/20 text-cyber-primary px-2 py-1 rounded-full text-xs font-cyber">
                    {book.genre}
                  </span>
                </div>
                
                {book.awards.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center text-cyber-primary mb-2">
                      <Award className="h-4 w-4 mr-1" />
                      <span className="text-sm font-semibold font-cyber">Premios:</span>
                    </div>
                    <div className="space-y-1">
                      {book.awards.map((award, index) => (
                        <div key={index} className="text-xs text-cyber-light/80 bg-cyber-primary/10 px-2 py-1 rounded font-cyber">
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col space-y-2">
                  <button 
                    onClick={() => setSelectedBook(book)}
                    className="w-full bg-cyber-primary text-cyber-dark py-2 rounded-lg hover:bg-cyber-secondary transition-colors duration-300 font-semibold font-cyber cyber-glow"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Database className="h-4 w-4" />
                      <span>Ver detalles</span>
                    </div>
                  </button>
                  {book.status === 'Publicado' && (
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-cyber-green text-cyber-dark py-2 rounded-lg hover:bg-cyber-green/80 transition-colors duration-300 flex items-center justify-center space-x-1 font-cyber">
                        <Download className="h-4 w-4" />
                        <span>Descargar</span>
                      </button>
                      <button className="flex-1 bg-cyber-secondary text-cyber-dark py-2 rounded-lg hover:bg-cyber-secondary/80 transition-colors duration-300 flex items-center justify-center space-x-1 font-cyber">
                        <ExternalLink className="h-4 w-4" />
                        <span>Comprar</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Detail Modal */}
        {selectedBook && (
          <div className="fixed inset-0 bg-cyber-dark/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="hologram-effect rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto cyber-scroll">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-cyber-primary font-medieval">{selectedBook.title}</h2>
                  <button
                    onClick={() => setSelectedBook(null)}
                    className="text-cyber-primary hover:text-cyber-secondary text-xl transition-colors duration-300"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedBook.cover}
                      alt={selectedBook.title}
                      className="w-full h-96 object-cover rounded-lg border border-cyber-primary/30"
                    />
                  </div>
                  
                  <div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-cyber-primary mb-2 font-medieval">Sinopsis:</h3>
                        <p className="text-cyber-light/80 font-cyber">{selectedBook.fullDescription}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-cyber-primary mb-2 font-medieval">Capítulos:</h3>
                        <ul className="space-y-1">
                          {selectedBook.chapters.map((chapter, index) => (
                            <li key={index} className="text-cyber-light/80 text-sm font-cyber">
                              {index + 1}. {chapter}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-cyber-light/60 font-cyber">
                        <span>{selectedBook.pages} páginas</span>
                        <span>•</span>
                        <span>{selectedBook.genre}</span>
                        <span>•</span>
                        <span>{selectedBook.year}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {renderStars(selectedBook.rating)}
                        <span className="text-sm text-cyber-light/60 font-cyber">
                          {selectedBook.rating} ({selectedBook.reviews} reseñas)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;