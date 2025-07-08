import React, { useState } from 'react';
import { Search, MapPin, Mountain, Castle, TreePine, Waves, Sun, Moon } from 'lucide-react';

const Places = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const placeTypes = [
    { id: 'all', name: 'Todos', count: 10 },
    { id: 'kingdoms', name: 'Reinos', count: 3 },
    { id: 'cities', name: 'Ciudades', count: 4 },
    { id: 'natural', name: 'Lugares Naturales', count: 3 }
  ];

  const places = [
    {
      id: 1,
      name: "Reino de Aethermoor",
      type: 'kingdoms',
      description: "Un reino flotante entre las nubes, donde la magia del viento es la fuerza dominante.",
      fullDescription: "Aethermoor es un reino único que flota a miles de metros sobre el suelo, sostenido por antiguos cristales de viento. Sus ciudades están construidas sobre plataformas de piedra flotante conectadas por puentes de luz.",
      climate: "Ventoso y fresco",
      population: "500,000 habitantes",
      ruler: "Reina Lyra Ventolámina",
      specialties: ["Magia del viento", "Construcción flotante", "Navegación aérea"],
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "El Reino de las Sombras",
      landmarks: ["Palacio de los Vientos", "Jardines Flotantes", "Torre del Observatorio"],
      dangers: ["Tormentas eléctricas", "Criaturas voladoras", "Caídas mortales"]
    },
    {
      id: 2,
      name: "La Ciudadela Sombría",
      type: 'cities',
      description: "Fortaleza de Shadowmere, envuelta en perpetua oscuridad y hogar de criaturas sombra.",
      fullDescription: "Esta antigua ciudadela fue corrompida por la magia oscura de Shadowmere. Ahora es un lugar donde la luz no puede penetrar, y las sombras cobran vida propia.",
      climate: "Eternamente oscuro y frío",
      population: "Desconocida",
      ruler: "Shadowmere el Corrupto",
      specialties: ["Magia sombría", "Invocación de sombras", "Corrupción"],
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "El Reino de las Sombras",
      landmarks: ["Torre de Shadowmere", "Pozo de las Almas", "Murallas Vivientes"],
      dangers: ["Criaturas sombra", "Magia corrupta", "Pérdida del alma"]
    },
    {
      id: 3,
      name: "Bosque Argénteo",
      type: 'natural',
      description: "Un bosque mágico donde los árboles brillan con luz lunar y viven los elfos sanadores.",
      fullDescription: "El Bosque Argénteo es un lugar sagrado donde la magia de la luna se concentra. Los árboles absorben la luz lunar y la iradian, creando un resplandor plateado que nunca se desvanece.",
      climate: "Templado y húmedo",
      population: "10,000 elfos",
      ruler: "Consejo de Ancianos Élficos",
      specialties: ["Magia lunar", "Curación", "Alquimia natural"],
      image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "Crónicas del Amanecer",
      landmarks: ["Árbol de la Luna", "Fuente de la Vida", "Círculo de Sanación"],
      dangers: ["Espíritus guardianes", "Laberintos naturales", "Magia inestable"]
    },
    {
      id: 4,
      name: "Montañas Celestes",
      type: 'natural',
      description: "Picos montañosos que tocan el cielo, hogar de los maestros herreros y guardianes del viento.",
      fullDescription: "Estas montañas son tan altas que sus picos están constantemente envueltos en nubes. Es aquí donde se forjan las armas más poderosas del mundo, utilizando el metal estelar que cae del cielo.",
      climate: "Frío y ventoso",
      population: "50,000 habitantes",
      ruler: "Clan Forjahierro",
      specialties: ["Herrería mágica", "Minería de metal estelar", "Domesticación de águilas"],
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "El Reino de las Sombras",
      landmarks: ["Forjas Celestes", "Pico del Martillo", "Nido de Águilas Gigantes"],
      dangers: ["Avalanchas", "Temperaturas extremas", "Dragones de montaña"]
    },
    {
      id: 5,
      name: "Puerto Dorado",
      type: 'cities',
      description: "Próspera ciudad portuaria donde confluyen comerciantes de todos los reinos conocidos.",
      fullDescription: "Puerto Dorado es el centro comercial más importante del mundo conocido. Sus muelles dorados (literalmente hechos de oro mágico) nunca se oxidan y brillan constantemente.",
      climate: "Mediterráneo cálido",
      population: "800,000 habitantes",
      ruler: "Consejo de Mercaderes",
      specialties: ["Comercio", "Navegación", "Diplomacia"],
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "Los Guardianes del Tiempo",
      landmarks: ["Muelles Dorados", "Gran Bazar", "Faro de las Mil Luces"],
      dangers: ["Piratas", "Tormentas marinas", "Conflictos comerciales"]
    },
    {
      id: 6,
      name: "Desierto de Cristal",
      type: 'natural',
      description: "Vasto desierto donde la arena se ha convertido en cristal por la magia ancestral.",
      fullDescription: "Este desierto fue creado por una gran explosión mágica hace milenios. La arena se cristalizó instantáneamente, creando un paisaje brillante y mortal donde la luz se refracta infinitamente.",
      climate: "Extremadamente caluroso durante el día, helado por la noche",
      population: "Nómadas (número desconocido)",
      ruler: "Ninguno",
      specialties: ["Magia de cristal", "Supervivencia extrema", "Navegación por las estrellas"],
      image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "Los Guardianes del Tiempo",
      landmarks: ["Oasis de Esmeralda", "Palacio de Cristal", "Torres de Vigilancia"],
      dangers: ["Tormentas de cristal", "Espejismos mágicos", "Criaturas cristalizadas"]
    }
  ];

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || place.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type) => {
    switch(type) {
      case 'kingdoms': return <Castle className="h-5 w-5" />;
      case 'cities': return <MapPin className="h-5 w-5" />;
      case 'natural': return <TreePine className="h-5 w-5" />;
      default: return <MapPin className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Lugares Fantásticos
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Explora los mundos mágicos donde se desarrollan las aventuras más extraordinarias
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar lugares..."
                className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {placeTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedType === type.id
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white text-amber-600 border border-amber-300 hover:bg-amber-50'
                  }`}
                >
                  {getTypeIcon(type.id)}
                  <span>{type.name} ({type.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Places Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredPlaces.map((place) => (
            <div key={place.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-semibold ${
                    place.type === 'kingdoms' ? 'bg-purple-500 text-white' :
                    place.type === 'cities' ? 'bg-blue-500 text-white' :
                    'bg-green-500 text-white'
                  }`}>
                    {getTypeIcon(place.type)}
                    <span>
                      {place.type === 'kingdoms' ? 'Reino' :
                       place.type === 'cities' ? 'Ciudad' : 'Natural'}
                    </span>
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                  {place.book}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-amber-900 mb-2">{place.name}</h2>
                
                <p className="text-amber-700 mb-4">
                  {place.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-amber-600 font-medium">Clima:</span>
                    <span className="text-sm text-amber-800">{place.climate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-amber-600 font-medium">Población:</span>
                    <span className="text-sm text-amber-800">{place.population}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-amber-600 font-medium">Gobernante:</span>
                    <span className="text-sm text-amber-800">{place.ruler}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-900 mb-2">Especialidades:</h4>
                  <div className="flex flex-wrap gap-1">
                    {place.specialties.map((specialty, index) => (
                      <span key={index} className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-900 mb-2">Lugares de Interés:</h4>
                  <div className="flex flex-wrap gap-1">
                    {place.landmarks.map((landmark, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-amber-900 mb-2">Peligros:</h4>
                  <div className="flex flex-wrap gap-1">
                    {place.dangers.map((danger, index) => (
                      <span key={index} className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                        {danger}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 font-semibold">
                  Explorar en detalle
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <p className="text-amber-700 text-lg">No se encontraron lugares que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Places;