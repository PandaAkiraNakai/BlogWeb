import React, { useState } from 'react';
import { Star, Calendar, BookOpen, Award, Download, ExternalLink } from 'lucide-react';

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "El Reino de las Sombras",
      series: "Saga de Aethermoor",
      volume: "Libro 1",
      description: "Una épica aventura en un mundo donde la magia y la tecnología coexisten en perfecta armonía.",
      fullDescription: "En un mundo flotante entre las nubes, Lyra Ventolámina descubre que es la última heredera de un poder ancestral. Cuando las fuerzas oscuras de Shadowmere amenazan con sumir el mundo en la oscuridad eterna, Lyra debe reunir a un grupo de héroes improbables para salvar todo lo que ama. Una historia de valor, sacrificio y la lucha eterna entre la luz y la oscuridad.",
      cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      year: "2023",
      pages: 456,
      rating: 4.8,
      reviews: 1247,
      genre: "Fantasía Épica",
      status: "Publicado",
      awards: ["Premio Nacional de Fantasía 2023", "Mejor Debut Novel Fantasy Awards"],
      chapters: [
        "El Despertar del Viento",
        "La Profecía Olvidada",
        "Los Guardianes del Cielo",
        "El Primer Encuentro",
        "La Forja de Alianzas"
      ]
    },
    {
      id: 2,
      title: "Crónicas del Amanecer",
      series: "Saga de Aethermoor",
      volume: "Libro 2",
      description: "La historia continúa mientras nuevos enemigos emergen y antiguos secretos son revelados.",
      fullDescription: "Seis meses después de la derrota de Shadowmere, el mundo parece estar en paz. Pero cuando antiguos artefactos comienzan a despertar y nuevas amenazas emergen desde las profundidades del tiempo, Lyra y sus compañeros deben enfrentar enemigos aún más poderosos que antes. Los secretos del pasado salen a la luz, y el destino de todos los mundos pende de un hilo.",
      cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      year: "2022",
      pages: 512,
      rating: 4.9,
      reviews: 2156,
      genre: "Fantasía Épica",
      status: "Publicado",
      awards: ["Mejor Secuela 2022", "Hugo Award Nominee"],
      chapters: [
        "Ecos del Pasado",
        "El Despertar Ancestral",
        "Los Fragmentos del Tiempo",
        "La Última Profecía",
        "El Precio del Poder"
      ]
    },
    {
      id: 3,
      title: "Los Guardianes del Tiempo",
      series: "Saga de Aethermoor",
      volume: "Libro 3",
      description: "La saga épica llega a su conclusión con una batalla final que determinará el destino de todos los mundos.",
      fullDescription: "En el capítulo final de la saga, los límites entre pasado, presente y futuro se desdibujan. Lyra debe viajar a través del tiempo mismo para prevenir una catástrofe que amenaza con destruir no solo su mundo, sino toda la realidad. Con la ayuda de aliados de todas las épocas, deberá enfrentar la verdad sobre su linaje y tomar la decisión más difícil de su vida.",
      cover: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      year: "2021",
      pages: 587,
      rating: 5.0,
      reviews: 3420,
      genre: "Fantasía Épica",
      status: "Publicado",
      awards: ["Mejor Libro del Año 2021", "World Fantasy Award", "Nebula Award"],
      chapters: [
        "El Último Guardián",
        "Viajes Temporales",
        "La Convergencia",
        "Sacrificios Necesarios",
        "El Nuevo Amanecer"
      ]
    },
    {
      id: 4,
      title: "El Despertar de los Dragones",
      series: "Nueva Saga",
      volume: "Libro 1",
      description: "Una nueva aventura comienza cuando los dragones regresan al mundo después de mil años de ausencia.",
      fullDescription: "En un mundo donde los dragones fueron extintos hace mil años, una joven arqueóloga descubre un huevo de dragón en una antigua ruina. Su eclosión desencadena una serie de eventos que cambiarán el mundo para siempre. Mientras los dragones despiertan uno por uno, las naciones se preparan para una nueva era de magia y guerra.",
      cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      year: "2024",
      pages: 420,
      rating: 4.7,
      reviews: 892,
      genre: "Fantasía de Dragones",
      status: "Próximamente",
      awards: [],
      chapters: [
        "El Huevo Perdido",
        "El Primer Vuelo",
        "La Llamada Ancestral",
        "El Consejo de Naciones",
        "La Nueva Alianza"
      ]
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Mis Libros
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Descubre las sagas épicas que han cautivado a miles de lectores alrededor del mundo
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    book.status === 'Publicado' ? 'bg-green-500 text-white' : 'bg-amber-500 text-white'
                  }`}>
                    {book.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                    {book.year}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-amber-600 text-sm font-medium mb-1">
                  {book.series} • {book.volume}
                </div>
                <h2 className="text-xl font-bold text-amber-900 mb-2">{book.title}</h2>
                <p className="text-amber-700 text-sm mb-3 line-clamp-3">
                  {book.description}
                </p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {renderStars(book.rating)}
                  </div>
                  <span className="ml-2 text-sm text-amber-600">
                    {book.rating} ({book.reviews} reseñas)
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-amber-600 mb-4">
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
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs">
                    {book.genre}
                  </span>
                </div>
                
                {book.awards.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center text-amber-600 mb-2">
                      <Award className="h-4 w-4 mr-1" />
                      <span className="text-sm font-semibold">Premios:</span>
                    </div>
                    <div className="space-y-1">
                      {book.awards.map((award, index) => (
                        <div key={index} className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded">
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col space-y-2">
                  <button 
                    onClick={() => setSelectedBook(book)}
                    className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 font-semibold"
                  >
                    Ver detalles
                  </button>
                  {book.status === 'Publicado' && (
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>Descargar</span>
                      </button>
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-1">
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
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-amber-900">{selectedBook.title}</h2>
                  <button
                    onClick={() => setSelectedBook(null)}
                    className="text-amber-600 hover:text-amber-800 text-xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedBook.cover}
                      alt={selectedBook.title}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-amber-900 mb-2">Sinopsis:</h3>
                        <p className="text-amber-700">{selectedBook.fullDescription}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-amber-900 mb-2">Capítulos:</h3>
                        <ul className="space-y-1">
                          {selectedBook.chapters.map((chapter, index) => (
                            <li key={index} className="text-amber-700 text-sm">
                              {index + 1}. {chapter}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-amber-600">
                        <span>{selectedBook.pages} páginas</span>
                        <span>•</span>
                        <span>{selectedBook.genre}</span>
                        <span>•</span>
                        <span>{selectedBook.year}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {renderStars(selectedBook.rating)}
                        <span className="text-sm text-amber-600">
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