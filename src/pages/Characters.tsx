import React, { useState } from 'react';
import { Search, Crown, Sword, Shield, Heart, Star, MapPin, Zap, Cpu, Database } from 'lucide-react';

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', count: 12 },
    { id: 'protagonists', name: 'Protagonistas', count: 4 },
    { id: 'antagonists', name: 'Antagonistas', count: 3 },
    { id: 'supporting', name: 'Entidades de Apoyo', count: 5 }
  ];

  const characters = [
    {
      id: 1,
      name: "Lyra Ventolámina.exe",
      category: 'protagonists',
      title: "La Guardiana del Viento Cuántico",
      description: "Una joven hacker-maga con la capacidad de controlar los vientos digitales. Su valentía neural y determinación la convierten en una líder natural.",
      fullDescription: "Lyra creció en las montañas digitales del norte, donde aprendió a dominar los elementos cuánticos desde muy joven. Su poder sobre el viento digital es legendario, pero su mayor fortaleza reside en su compasión neural y su inquebrantable sentido de la justicia híbrida.",
      abilities: ["Control del viento cuántico", "Vuelo digital", "Comunicación con aves cibernéticas"],
      origin: "Montañas Celestes.net",
      age: "23 años (v2.3)",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "El Reino de las Sombras Digitales",
      personality: ["Valiente", "Compasiva Neural", "Determinada"],
      relationships: ["Hermana de Kael.exe", "Mentora de Finn.ai"]
    },
    {
      id: 2,
      name: "Shadowmere.virus",
      category: 'antagonists',
      title: "Señor de las Sombras Digitales",
      description: "Un poderoso hechicero-hacker que busca sumir el mundo en la oscuridad eterna digital. Su sed de poder cuántico no conoce límites.",
      fullDescription: "Antes conocido como Meridian.exe el Sabio, Shadowmere cayó en la corrupción digital al buscar poder para salvar a su amada. Ahora es una sombra de lo que fue, consumido por la oscuridad que una vez intentó controlar.",
      abilities: ["Magia sombría digital", "Inmortalidad virtual", "Corrupción de datos"],
      origin: "La Ciudadela Perdida.404",
      age: "Milenios (versión corrupta)",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "El Reino de las Sombras Digitales",
      personality: ["Manipulador Neural", "Obsesivo", "Trágico Digital"],
      relationships: ["Enemigo de Lyra.exe", "Antiguo amor de Celestia.ai"]
    },
    {
      id: 3,
      name: "Kael Forjahierro.sys",
      category: 'protagonists',
      title: "El Herrero Guerrero Cuántico",
      description: "Hermano de Lyra y maestro herrero digital. Sus armas mágicas son legendarias en todo el reino virtual.",
      fullDescription: "Kael heredó el don de su familia para forjar armas mágicas digitales. Su martillo cuántico, forjado con metal estelar virtual, puede crear armas que canalizan el poder elemental de quien las empuña.",
      abilities: ["Herrería mágica digital", "Combate con martillo cuántico", "Resistencia sobrehumana"],
      origin: "Montañas Celestes.net",
      age: "28 años (v3.1)",
      image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "El Reino de las Sombras Digitales",
      personality: ["Leal", "Protector Neural", "Ingenioso"],
      relationships: ["Hermano de Lyra.exe", "Esposo de Mira.ai"]
    },
    {
      id: 4,
      name: "Celestia Lunabrillante.ai",
      category: 'supporting',
      title: "La Sanadora Lunar Digital",
      description: "Una curandera élfica que utiliza la luz de la luna virtual para sanar heridas tanto físicas como espirituales.",
      fullDescription: "Celestia es la última de una línea ancestral de curanderos élficos digitales. Su conexión con la luna virtual le permite acceder a magias curativas que se creían perdidas en el código.",
      abilities: ["Curación lunar digital", "Telepatía neural", "Longevidad élfica virtual"],
      origin: "Bosque Argénteo.forest",
      age: "347 años (v12.7)",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "Crónicas del Amanecer Cyber",
      personality: ["Sabia Digital", "Paciente", "Misteriosa Neural"],
      relationships: ["Mentora de Lyra.exe", "Antigua aliada de Meridian.exe"]
    },
    {
      id: 5,
      name: "Finn Cazasombras.bot",
      category: 'protagonists',
      title: "El Arquero Sombra Digital",
      description: "Un joven arquero-hacker con la habilidad de moverse entre las sombras digitales. Aprendiz de Lyra y corazón valiente.",
      fullDescription: "Finn perdió a su familia en un ataque de criaturas sombra digitales. Su deseo de venganza lo llevó a desarrollar la habilidad de caminar entre las sombras virtuales, convirtiéndose en un cazador letal.",
      abilities: ["Teletransportación sombra digital", "Tiro con arco cuántico", "Sigilo virtual"],
      origin: "Villa Esperanza.exe",
      age: "19 años (v1.9)",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "El Reino de las Sombras Digitales",
      personality: ["Vengativo Digital", "Leal", "Intrépido Neural"],
      relationships: ["Aprendiz de Lyra.exe", "Rival de Drak.virus"]
    },
    {
      id: 6,
      name: "Drak Sangrefría.malware",
      category: 'antagonists',
      title: "El Asesino Carmesí Digital",
      description: "Un asesino despiadado al servicio de Shadowmere. Su frialdad neural y precisión lo convierten en un enemigo temible.",
      fullDescription: "Drak fue programado desde su creación para ser el arma perfecta. Su lealtad a Shadowmere es absoluta, y su habilidad para eliminar objetivos es inigualable.",
      abilities: ["Combate sigiloso digital", "Velocidad sobrehumana virtual", "Inmunidad al dolor neural"],
      origin: "Desconocido.404",
      age: "Desconocido (versión clasificada)",
      image: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      book: "El Reino de las Sombras Digitales",
      personality: ["Frío Digital", "Calculador Neural", "Leal"],
      relationships: ["Sirviente de Shadowmere.virus", "Rival de Finn.bot"]
    }
  ];

  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || character.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 bg-dark-gradient matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-primary mb-4 font-medieval neon-text">
            Entidades Digitales
          </h1>
          <p className="text-xl text-cyber-light/80 max-w-2xl mx-auto font-cyber">
            Conoce a los héroes neurales, villanos digitales y aliados que dan vida a mis realidades híbridas
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-primary h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar entidades..."
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

        {/* Characters Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCharacters.map((character) => (
            <div key={character.id} className="hologram-effect rounded-xl overflow-hidden hover:cyber-glow transition-all duration-300 group medieval-frame">
              <div className="relative overflow-hidden">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold font-cyber ${
                    character.category === 'protagonists' ? 'bg-cyber-green text-cyber-dark' :
                    character.category === 'antagonists' ? 'bg-cyber-red text-white' :
                    'bg-cyber-secondary text-cyber-dark'
                  }`}>
                    {character.category === 'protagonists' ? 'Protagonista' :
                     character.category === 'antagonists' ? 'Antagonista' : 'Entidad de Apoyo'}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {character.category === 'protagonists' && <Crown className="h-6 w-6 text-medieval-gold" />}
                  {character.category === 'antagonists' && <Sword className="h-6 w-6 text-cyber-red" />}
                  {character.category === 'supporting' && <Shield className="h-6 w-6 text-cyber-secondary" />}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-cyber-primary mb-1 font-medieval">{character.name}</h2>
                <p className="text-cyber-secondary font-medium mb-3 font-cyber">{character.title}</p>
                
                <p className="text-cyber-light/80 mb-4 line-clamp-3 font-cyber">
                  {character.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-cyber-light/60 font-cyber">
                    <MapPin className="h-4 w-4 mr-2 text-cyber-primary" />
                    <span>{character.origin}</span>
                  </div>
                  <div className="flex items-center text-sm text-cyber-light/60 font-cyber">
                    <Star className="h-4 w-4 mr-2 text-cyber-primary" />
                    <span>{character.book}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-cyber-primary mb-2 font-medieval">Habilidades:</h4>
                  <div className="flex flex-wrap gap-1">
                    {character.abilities.map((ability, index) => (
                      <span key={index} className="bg-cyber-primary/20 text-cyber-primary px-2 py-1 rounded-full text-xs font-cyber">
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-cyber-primary mb-2 font-medieval">Personalidad:</h4>
                  <div className="flex flex-wrap gap-1">
                    {character.personality.map((trait, index) => (
                      <span key={index} className="bg-cyber-secondary/20 text-cyber-secondary px-2 py-1 rounded-full text-xs font-cyber">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-cyber-primary text-cyber-dark py-2 rounded-lg hover:bg-cyber-secondary transition-colors duration-300 font-semibold font-cyber cyber-glow">
                  <div className="flex items-center justify-center space-x-2">
                    <Database className="h-4 w-4" />
                    <span>Acceder Perfil Completo</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCharacters.length === 0 && (
          <div className="text-center py-12">
            <Cpu className="h-16 w-16 text-cyber-primary/50 mx-auto mb-4" />
            <p className="text-cyber-light/80 text-lg font-cyber">No se encontraron entidades que coincidan con tu búsqueda neural.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Characters;