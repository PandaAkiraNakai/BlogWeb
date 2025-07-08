import React, { useState } from 'react';
import { Search, Crown, Sword, Shield, Heart, Star, MapPin } from 'lucide-react';

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', count: 12 },
    { id: 'protagonists', name: 'Protagonistas', count: 4 },
    { id: 'antagonists', name: 'Antagonistas', count: 3 },
    { id: 'supporting', name: 'Secundarios', count: 5 }
  ];

  const characters = [
    {
      id: 1,
      name: "Lyra Ventolámina",
      category: 'protagonists',
      title: "La Guardiana del Viento",
      description: "Una joven maga con la capacidad de controlar los vientos. Su valentía y determinación la convierten en una líder natural.",
      fullDescription: "Lyra creció en las montañas del norte, donde aprendió a dominar los elementos desde muy joven. Su poder sobre el viento es legendario, pero su mayor fortaleza reside en su compasión y su inquebrantable sentido de la justicia.",
      abilities: ["Control del viento", "Vuelo", "Comunicación con aves"],
      origin: "Montañas Celestes",
      age: "23 años",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "El Reino de las Sombras",
      personality: ["Valiente", "Compasiva", "Determinada"],
      relationships: ["Hermana de Kael", "Mentora de Finn"]
    },
    {
      id: 2,
      name: "Shadowmere el Corrupto",
      category: 'antagonists',
      title: "Señor de las Sombras",
      description: "Un poderoso hechicero que busca sumir el mundo en la oscuridad eterna. Su sed de poder no conoce límites.",
      fullDescription: "Antes conocido como Meridian el Sabio, Shadowmere cayó en la corrupción al buscar poder para salvar a su amada. Ahora es una sombra de lo que fue, consumido por la oscuridad que una vez intentó controlar.",
      abilities: ["Magia sombría", "Inmortalidad", "Corrupción"],
      origin: "La Ciudadela Perdida",
      age: "Milenios",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "El Reino de las Sombras",
      personality: ["Manipulador", "Obsesivo", "Trágico"],
      relationships: ["Enemigo de Lyra", "Antiguo amor de Celestia"]
    },
    {
      id: 3,
      name: "Kael Forjahierro",
      category: 'protagonists',
      title: "El Herrero Guerrero",
      description: "Hermano de Lyra y maestro herrero. Sus armas mágicas son legendarias en todo el reino.",
      fullDescription: "Kael heredó el don de su familia para forjar armas mágicas. Su martillo, forjado con metal estelar, puede crear armas que canalizan el poder elemental de quien las empuña.",
      abilities: ["Herrería mágica", "Combate con martillo", "Resistencia sobrehumana"],
      origin: "Montañas Celestes",
      age: "28 años",
      image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "El Reino de las Sombras",
      personality: ["Leal", "Protector", "Ingenioso"],
      relationships: ["Hermano de Lyra", "Esposo de Mira"]
    },
    {
      id: 4,
      name: "Celestia Lunabrillante",
      category: 'supporting',
      title: "La Sanadora Lunar",
      description: "Una curandera élfica que utiliza la luz de la luna para sanar heridas tanto físicas como espirituales.",
      fullDescription: "Celestia es la última de una línea ancestral de curanderos élficos. Su conexión con la luna le permite acceder a magias curativas que se creían perdidas.",
      abilities: ["Curación lunar", "Telepatía", "Longevidad élfica"],
      origin: "Bosque Argénteo",
      age: "347 años",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "Crónicas del Amanecer",
      personality: ["Sabia", "Paciente", "Misteriosa"],
      relationships: ["Mentora de Lyra", "Antigua aliada de Meridian"]
    },
    {
      id: 5,
      name: "Finn Cazasombras",
      category: 'protagonists',
      title: "El Arquero Sombra",
      description: "Un joven arquero con la habilidad de moverse entre las sombras. Aprendiz de Lyra y corazón valiente.",
      fullDescription: "Finn perdió a su familia en un ataque de criaturas sombra. Su deseo de venganza lo llevó a desarrollar la habilidad de caminar entre las sombras, convirtiéndose en un cazador letal.",
      abilities: ["Teletransportación sombra", "Tiro con arco", "Sigilo"],
      origin: "Villa Esperanza",
      age: "19 años",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "El Reino de las Sombras",
      personality: ["Vengativo", "Leal", "Intrépido"],
      relationships: ["Aprendiz de Lyra", "Rival de Drak"]
    },
    {
      id: 6,
      name: "Drak Sangrefría",
      category: 'antagonists',
      title: "El Asesino Carmesí",
      description: "Un asesino despiadado al servicio de Shadowmere. Su frialdad y precisión lo convierten en un enemigo temible.",
      fullDescription: "Drak fue entrenado desde niño para ser el arma perfecta. Su lealtad a Shadowmere es absoluta, y su habilidad para matar es inigualable.",
      abilities: ["Combate sigiloso", "Velocidad sobrehumana", "Inmunidad al dolor"],
      origin: "Desconocido",
      age: "Desconocido",
      image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "El Reino de las Sombras",
      personality: ["Frío", "Calculador", "Leal"],
      relationships: ["Sirviente de Shadowmere", "Rival de Finn"]
    }
  ];

  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || character.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Personajes
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Conoce a los héroes, villanos y aliados que dan vida a mis historias
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar personajes..."
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

        {/* Characters Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCharacters.map((character) => (
            <div key={character.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    character.category === 'protagonists' ? 'bg-green-500 text-white' :
                    character.category === 'antagonists' ? 'bg-red-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {character.category === 'protagonists' ? 'Protagonista' :
                     character.category === 'antagonists' ? 'Antagonista' : 'Secundario'}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {character.category === 'protagonists' && <Crown className="h-6 w-6 text-yellow-400" />}
                  {character.category === 'antagonists' && <Sword className="h-6 w-6 text-red-400" />}
                  {character.category === 'supporting' && <Shield className="h-6 w-6 text-blue-400" />}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-amber-900 mb-1">{character.name}</h2>
                <p className="text-amber-600 font-medium mb-3">{character.title}</p>
                
                <p className="text-amber-700 mb-4 line-clamp-3">
                  {character.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-amber-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{character.origin}</span>
                  </div>
                  <div className="flex items-center text-sm text-amber-600">
                    <Star className="h-4 w-4 mr-2" />
                    <span>{character.book}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-900 mb-2">Habilidades:</h4>
                  <div className="flex flex-wrap gap-1">
                    {character.abilities.map((ability, index) => (
                      <span key={index} className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs">
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-900 mb-2">Personalidad:</h4>
                  <div className="flex flex-wrap gap-1">
                    {character.personality.map((trait, index) => (
                      <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 font-semibold">
                  Ver detalles completos
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCharacters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-amber-700 text-lg">No se encontraron personajes que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Characters;