import React, { useState } from 'react';
import { Search, MapPin, Mountain, Castle, TreePine, Waves, Sun, Moon, Zap, Cpu, Database } from 'lucide-react';

const Places = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const placeTypes = [
    { id: 'all', name: 'Todos', count: 10 },
    { id: 'kingdoms', name: 'Reinos Digitales', count: 3 },
    { id: 'cities', name: 'Ciudades Cyber', count: 4 },
    { id: 'natural', name: 'Realms Naturales', count: 3 }
  ];

  const places = [
    {
      id: 1,
      name: "Reino de Aethermoor.net",
      type: 'kingdoms',
      description: "Un reino flotante entre las nubes digitales, donde la magia del viento cuántico es la fuerza dominante.",
      fullDescription: "Aethermoor.net es un reino único que flota a miles de metros sobre el suelo virtual, sostenido por antiguos cristales de viento cuántico. Sus ciudades están construidas sobre plataformas de piedra flotante conectadas por puentes de luz digital.",
      climate: "Ventoso y fresco (clima simulado)",
      population: "500,000 habitantes virtuales",
      ruler: "Reina Lyra Ventolámina.exe",
      specialties: ["Magia del viento cuántico", "Construcción flotante digital", "Navegación aérea virtual"],
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "El Reino de las Sombras Digitales",
      landmarks: ["Palacio de los Vientos Cuánticos", "Jardines Flotantes.exe", "Torre del Observatorio Neural"],
      dangers: ["Tormentas eléctricas digitales", "Criaturas voladoras virtuales", "Caídas mortales al vacío digital"]
    },
    {
      id: 2,
      name: "La Ciudadela Sombría.virus",
      type: 'cities',
      description: "Fortaleza de Shadowmere, envuelta en perpetua oscuridad digital y hogar de criaturas sombra virtuales.",
      fullDescription: "Esta antigua ciudadela fue corrompida por la magia oscura digital de Shadowmere. Ahora es un lugar donde la luz no puede penetrar, y las sombras cobran vida propia en el código.",
      climate: "Eternamente oscuro y frío (ambiente corrupto)",
      population: "Desconocida (entidades corruptas)",
      ruler: "Shadowmere.virus el Corrupto",
      specialties: ["Magia sombría digital", "Invocación de sombras virtuales", "Corrupción de datos"],
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "El Reino de las Sombras Digitales",
      landmarks: ["Torre de Shadowmere.exe", "Pozo de las Almas Digitales", "Murallas Vivientes.ai"],
      dangers: ["Criaturas sombra virtuales", "Magia corrupta digital", "Pérdida del alma neural"]
    },
    {
      id: 3,
      name: "Bosque Argénteo.forest",
      type: 'natural',
      description: "Un bosque mágico digital donde los árboles brillan con luz lunar virtual y viven los elfos sanadores.",
      fullDescription: "El Bosque Argénteo.forest es un lugar sagrado donde la magia de la luna virtual se concentra. Los árboles absorben la luz lunar digital y la irradian, creando un resplandor plateado que nunca se desvanece.",
      climate: "Templado y húmedo (simulación perfecta)",
      population: "10,000 elfos digitales",
      ruler: "Consejo de Ancianos Élficos.ai",
      specialties: ["Magia lunar digital", "Curación virtual", "Alquimia natural cuántica"],
      image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "Crónicas del Amanecer Cyber",
      landmarks: ["Árbol de la Luna Digital", "Fuente de la Vida Virtual", "Círculo de Sanación Neural"],
      dangers: ["Espíritus guardianes digitales", "Laberintos naturales virtuales", "Magia inestable cuántica"]
    },
    {
      id: 4,
      name: "Montañas Celestes.peak",
      type: 'natural',
      description: "Picos montañosos que tocan el cielo digital, hogar de los maestros herreros y guardianes del viento cuántico.",
      fullDescription: "Estas montañas virtuales son tan altas que sus picos están constantemente envueltos en nubes digitales. Es aquí donde se forjan las armas más poderosas del mundo, utilizando el metal estelar que cae del cielo virtual.",
      climate: "Frío y ventoso (simulación extrema)",
      population: "50,000 habitantes digitales",
      ruler: "Clan Forjahierro.sys",
      specialties: ["Herrería mágica digital", "Minería de metal estelar virtual", "Domesticación de águilas cibernéticas"],
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "El Reino de las Sombras Digitales",
      landmarks: ["Forjas Celestes.exe", "Pico del Martillo Cuántico", "Nido de Águilas Gigantes.ai"],
      dangers: ["Avalanchas digitales", "Temperaturas extremas virtuales", "Dragones de montaña cyber"]
    },
    {
      id: 5,
      name: "Puerto Dorado.port",
      type: 'cities',
      description: "Próspera ciudad portuaria digital donde confluyen comerciantes de todos los reinos conocidos del ciberespacio.",
      fullDescription: "Puerto Dorado.port es el centro comercial más importante del mundo virtual conocido. Sus muelles dorados (literalmente hechos de oro mágico digital) nunca se oxidan y brillan constantemente.",
      climate: "Mediterráneo cálido (simulación perfecta)",
      population: "800,000 habitantes virtuales",
      ruler: "Consejo de Mercaderes.corp",
      specialties: ["Comercio digital", "Navegación virtual", "Diplomacia cyber"],
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "Los Guardianes del Tiempo Cuántico",
      landmarks: ["Muelles Dorados.exe", "Gran Bazar Digital", "Faro de las Mil Luces Virtuales"],
      dangers: ["Piratas digitales", "Tormentas marinas virtuales", "Conflictos comerciales cyber"]
    },
    {
      id: 6,
      name: "Desierto de Cristal.crystal",
      type: 'natural',
      description: "Vasto desierto digital donde la arena se ha convertido en cristal por la magia ancestral cuántica.",
      fullDescription: "Este desierto fue creado por una gran explosión mágica digital hace milenios. La arena se cristalizó instantáneamente, creando un paisaje brillante y mortal donde la luz se refracta infinitamente.",
      climate: "Extremadamente caluroso durante el día, helado por la noche (simulación extrema)",
      population: "Nómadas digitales (número desconocido)",
      ruler: "Ninguno (territorio libre)",
      specialties: ["Magia de cristal digital", "Supervivencia extrema virtual", "Navegación por las estrellas cuánticas"],
      image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      book: "Los Guardianes del Tiempo Cuántico",
      landmarks: ["Oasis de Esmeralda.gem", "Palacio de Cristal Digital", "Torres de Vigilancia Neural"],
      dangers: ["Tormentas de cristal virtual", "Espejismos mágicos digitales", "Criaturas cristalizadas.exe"]
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
    <div className="min-h-screen py-8 bg-dark-gradient matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-primary mb-4 font-medieval neon-text">
            Realms Fantásticos
          </h1>
          <p className="text-xl text-cyber-light/80 max-w-2xl mx-auto font-cyber">
            Explora los mundos mágicos digitales donde se desarrollan las aventuras más extraordinarias
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-primary h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar realms..."
                className="w-full pl-10 pr-4 py-3 bg-cyber-dark border border-cyber-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-primary focus:border-transparent text-cyber-light font-cyber cyber-glow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {placeTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium font-cyber transition-all duration-300 ${
                    selectedType === type.id
                      ? 'bg-cyber-primary text-cyber-dark cyber-glow'
                      : 'bg-cyber-dark border border-cyber-primary/30 text-cyber-primary hover:bg-cyber-primary/10'
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
            <div key={place.id} className="hologram-effect rounded-xl overflow-hidden hover:cyber-glow transition-all duration-300 group medieval-frame">
              <div className="relative overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-semibold font-cyber ${
                    place.type === 'kingdoms' ? 'bg-cyber-secondary text-cyber-dark' :
                    place.type === 'cities' ? 'bg-cyber-primary text-cyber-dark' :
                    'bg-cyber-green text-cyber-dark'
                  }`}>
                    {getTypeIcon(place.type)}
                    <span>
                      {place.type === 'kingdoms' ? 'Reino Digital' :
                       place.type === 'cities' ? 'Ciudad Cyber' : 'Realm Natural'}
                    </span>
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-cyber-dark/80 backdrop-blur-sm text-cyber-primary px-2 py-1 rounded-full text-sm font-cyber">
                  {place.book}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-cyber-primary mb-2 font-medieval">{place.name}</h2>
                
                <p className="text-cyber-light/80 mb-4 font-cyber">
                  {place.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyber-light/60 font-medium font-cyber">Clima:</span>
                    <span className="text-sm text-cyber-light font-cyber">{place.climate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyber-light/60 font-medium font-cyber">Población:</span>
                    <span className="text-sm text-cyber-light font-cyber">{place.population}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyber-light/60 font-medium font-cyber">Gobernante:</span>
                    <span className="text-sm text-cyber-light font-cyber">{place.ruler}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-cyber-primary mb-2 font-medieval">Especialidades:</h4>
                  <div className="flex flex-wrap gap-1">
                    {place.specialties.map((specialty, index) => (
                      <span key={index} className="bg-cyber-primary/20 text-cyber-primary px-2 py-1 rounded-full text-xs font-cyber">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-cyber-primary mb-2 font-medieval">Lugares de Interés:</h4>
                  <div className="flex flex-wrap gap-1">
                    {place.landmarks.map((landmark, index) => (
                      <span key={index} className="bg-cyber-secondary/20 text-cyber-secondary px-2 py-1 rounded-full text-xs font-cyber">
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-cyber-primary mb-2 font-medieval">Peligros:</h4>
                  <div className="flex flex-wrap gap-1">
                    {place.dangers.map((danger, index) => (
                      <span key={index} className="bg-cyber-red/20 text-cyber-red px-2 py-1 rounded-full text-xs font-cyber">
                        {danger}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-cyber-primary text-cyber-dark py-2 rounded-lg hover:bg-cyber-secondary transition-colors duration-300 font-semibold font-cyber cyber-glow">
                  <div className="flex items-center justify-center space-x-2">
                    <Database className="h-4 w-4" />
                    <span>Explorar en Detalle</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <Cpu className="h-16 w-16 text-cyber-primary/50 mx-auto mb-4" />
            <p className="text-cyber-light/80 text-lg font-cyber">No se encontraron realms que coincidan con tu búsqueda neural.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Places;