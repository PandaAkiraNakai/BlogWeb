import React, { useState, useEffect } from 'react';
import { Send, Users, MessageCircle, Heart, Star, Clock, User, Zap, Cpu, Database } from 'lucide-react';

const Community = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Ana.Lectora",
      message: "¡Acabo de terminar 'El Reino de las Sombras Digitales' y estoy sin palabras! ¿Cuándo sale la secuela neural?",
      timestamp: "2024-01-15T14:30:00Z",
      likes: 12,
      replies: 3,
      avatar: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 2,
      user: "Carlos.Fantasía",
      message: "Lyra.exe es mi entidad favorita de toda la saga. Su desarrollo neural a lo largo de la historia es increíble.",
      timestamp: "2024-01-15T13:45:00Z",
      likes: 8,
      replies: 5,
      avatar: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 3,
      user: "María.Aventura",
      message: "¿Alguien más piensa que Shadowmere.virus tiene una historia trágica fascinante? Me gustaría saber más sobre su corrupción digital.",
      timestamp: "2024-01-15T12:20:00Z",
      likes: 15,
      replies: 8,
      avatar: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 4,
      user: "Luis.Épico",
      message: "La descripción del Bosque Argénteo.forest me transportó completamente. ¡Qué imaginación cuántica!",
      timestamp: "2024-01-15T11:10:00Z",
      likes: 6,
      replies: 2,
      avatar: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 5,
      user: "Isabella.Mágica",
      message: "¿Habrá adaptación cinematográfica digital? Estos mundos híbridos merecen ser vistos en pantalla holográfica.",
      timestamp: "2024-01-15T10:30:00Z",
      likes: 20,
      replies: 12,
      avatar: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([
    { name: "Ana.Lectora", status: "online" },
    { name: "Carlos.Fantasía", status: "online" },
    { name: "María.Aventura", status: "away" },
    { name: "Luis.Épico", status: "online" },
    { name: "Isabella.Mágica", status: "online" },
    { name: "Pedro.Dragón", status: "away" },
    { name: "Sofía.Magia", status: "online" }
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: "Tú.Usuario",
        message: newMessage,
        timestamp: new Date().toISOString(),
        likes: 0,
        replies: 0,
        avatar: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
      };
      setMessages([message, ...messages]);
      setNewMessage('');
    }
  };

  const handleLike = (messageId) => {
    setMessages(messages.map(msg => 
      msg.id === messageId 
        ? { ...msg, likes: msg.likes + 1 }
        : msg
    ));
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now - time) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Ahora';
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
    return `${Math.floor(diffInMinutes / 1440)}d`;
  };

  return (
    <div className="min-h-screen py-8 bg-dark-gradient matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-primary mb-4 font-medieval neon-text">
            Network de Usuarios
          </h1>
          <p className="text-xl text-cyber-light/80 max-w-2xl mx-auto font-cyber">
            Únete a la conversación neural con otros fans y comparte tu pasión por las realidades híbridas
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Main Area */}
          <div className="lg:col-span-3">
            {/* Chat Header */}
            <div className="hologram-effect rounded-t-xl p-6 border-b border-cyber-primary/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <MessageCircle className="h-8 w-8 text-cyber-primary" />
                    <div className="absolute inset-0 h-8 w-8 text-cyber-primary opacity-30 animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-cyber-primary font-medieval">Chat Neural General</h2>
                    <p className="text-cyber-light/60 text-sm font-cyber">Conversación en tiempo real cuántico</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-cyber-primary font-cyber">
                  <Users className="h-5 w-5" />
                  <span className="text-sm font-medium">{onlineUsers.filter(u => u.status === 'online').length} conectados</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="hologram-effect max-h-96 overflow-y-auto p-6 space-y-4 cyber-scroll">
              {messages.map((message) => (
                <div key={message.id} className="flex space-x-3 group">
                  <div className="relative">
                    <img
                      src={message.avatar}
                      alt={message.user}
                      className="w-10 h-10 rounded-full object-cover border border-cyber-primary/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyber-green rounded-full border-2 border-cyber-dark"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-cyber-primary font-cyber">{message.user}</span>
                      <span className="text-xs text-cyber-light/60 flex items-center font-cyber">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatTimeAgo(message.timestamp)}
                      </span>
                    </div>
                    <p className="text-cyber-light/80 mb-2 font-cyber">{message.message}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <button
                        onClick={() => handleLike(message.id)}
                        className="flex items-center space-x-1 text-cyber-light/60 hover:text-cyber-red transition-colors font-cyber"
                      >
                        <Heart className="h-4 w-4" />
                        <span>{message.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-cyber-light/60 hover:text-cyber-primary transition-colors font-cyber">
                        <MessageCircle className="h-4 w-4" />
                        <span>{message.replies} respuestas</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="hologram-effect rounded-b-xl p-6 border-t border-cyber-primary/30">
              <div className="flex space-x-3">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="Tu avatar"
                    className="w-10 h-10 rounded-full object-cover border border-cyber-primary/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyber-green rounded-full border-2 border-cyber-dark"></div>
                </div>
                <div className="flex-1 flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Escribe tu mensaje neural..."
                    className="flex-1 px-4 py-2 bg-cyber-dark border border-cyber-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-primary focus:border-transparent text-cyber-light font-cyber"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-cyber-primary text-cyber-dark px-6 py-2 rounded-lg hover:bg-cyber-secondary transition-colors duration-300 flex items-center space-x-2 font-cyber cyber-glow"
                  >
                    <Send className="h-4 w-4" />
                    <span>Enviar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Online Users */}
            <div className="hologram-effect rounded-xl p-6">
              <h3 className="text-lg font-bold text-cyber-primary mb-4 flex items-center font-medieval">
                <Users className="h-5 w-5 mr-2" />
                Usuarios Conectados
              </h3>
              <div className="space-y-3">
                {onlineUsers.map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-cyber-dark" />
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-cyber-dark ${
                        user.status === 'online' ? 'bg-cyber-green' : 'bg-cyber-accent'
                      }`}></div>
                    </div>
                    <span className="text-sm text-cyber-light/80 font-cyber">{user.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="hologram-effect rounded-xl p-6">
              <h3 className="text-lg font-bold text-cyber-primary mb-4 font-medieval">
                Estadísticas del Network
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-cyber-light/80 font-cyber">Miembros totales:</span>
                  <span className="font-semibold text-cyber-primary font-cyber">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyber-light/80 font-cyber">Mensajes hoy:</span>
                  <span className="font-semibold text-cyber-primary font-cyber">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyber-light/80 font-cyber">Usuarios activos:</span>
                  <span className="font-semibold text-cyber-primary font-cyber">23</span>
                </div>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="hologram-effect rounded-xl p-6">
              <h3 className="text-lg font-bold text-cyber-primary mb-4 font-medieval">
                Temas Populares
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-cyber-primary" />
                  <span className="text-sm text-cyber-light/80 font-cyber">Teorías sobre Shadowmere.virus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-cyber-secondary" />
                  <span className="text-sm text-cyber-light/80 font-cyber">Entidades favoritas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-cyber-accent" />
                  <span className="text-sm text-cyber-light/80 font-cyber">Próximos lanzamientos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-cyber-green" />
                  <span className="text-sm text-cyber-light/80 font-cyber">Fanart y creaciones digitales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;