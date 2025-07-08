import React, { useState, useEffect } from 'react';
import { Send, Users, MessageCircle, Heart, Star, Clock, User } from 'lucide-react';

const Community = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Ana Lectora",
      message: "¡Acabo de terminar 'El Reino de las Sombras' y estoy sin palabras! ¿Cuándo sale la secuela?",
      timestamp: "2024-01-15T14:30:00Z",
      likes: 12,
      replies: 3,
      avatar: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 2,
      user: "Carlos Fantasía",
      message: "Lyra es mi personaje favorito de toda la saga. Su desarrollo a lo largo de la historia es increíble.",
      timestamp: "2024-01-15T13:45:00Z",
      likes: 8,
      replies: 5,
      avatar: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 3,
      user: "María Aventura",
      message: "¿Alguien más piensa que Shadowmere tiene una historia trágica fascinante? Me gustaría saber más sobre su pasado.",
      timestamp: "2024-01-15T12:20:00Z",
      likes: 15,
      replies: 8,
      avatar: "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 4,
      user: "Luis Épico",
      message: "La descripción del Bosque Argénteo me transportó completamente. ¡Qué imaginación!",
      timestamp: "2024-01-15T11:10:00Z",
      likes: 6,
      replies: 2,
      avatar: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 5,
      user: "Isabella Mágica",
      message: "¿Habrá adaptación cinematográfica? Estos mundos merecen ser vistos en pantalla grande.",
      timestamp: "2024-01-15T10:30:00Z",
      likes: 20,
      replies: 12,
      avatar: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([
    { name: "Ana Lectora", status: "online" },
    { name: "Carlos Fantasía", status: "online" },
    { name: "María Aventura", status: "away" },
    { name: "Luis Épico", status: "online" },
    { name: "Isabella Mágica", status: "online" },
    { name: "Pedro Dragón", status: "away" },
    { name: "Sofía Magia", status: "online" }
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: "Tú",
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
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Comunidad de Lectores
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Únete a la conversación con otros fans y comparte tu pasión por las historias
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Main Area */}
          <div className="lg:col-span-3">
            {/* Chat Header */}
            <div className="bg-white rounded-t-xl shadow-lg p-6 border-b border-amber-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-8 w-8 text-amber-600" />
                  <div>
                    <h2 className="text-xl font-bold text-amber-900">Chat General</h2>
                    <p className="text-amber-600 text-sm">Conversación en tiempo real</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-amber-600">
                  <Users className="h-5 w-5" />
                  <span className="text-sm font-medium">{onlineUsers.filter(u => u.status === 'online').length} en línea</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-white shadow-lg max-h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex space-x-3 group">
                  <img
                    src={message.avatar}
                    alt={message.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-amber-900">{message.user}</span>
                      <span className="text-xs text-amber-600 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatTimeAgo(message.timestamp)}
                      </span>
                    </div>
                    <p className="text-amber-700 mb-2">{message.message}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <button
                        onClick={() => handleLike(message.id)}
                        className="flex items-center space-x-1 text-amber-600 hover:text-red-500 transition-colors"
                      >
                        <Heart className="h-4 w-4" />
                        <span>{message.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-amber-600 hover:text-amber-800 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span>{message.replies} respuestas</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="bg-white rounded-b-xl shadow-lg p-6 border-t border-amber-100">
              <div className="flex space-x-3">
                <img
                  src="https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Tu avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 flex items-center space-x-2"
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
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Usuarios Conectados
              </h3>
              <div className="space-y-3">
                {onlineUsers.map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                    </div>
                    <span className="text-sm text-amber-700">{user.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-amber-900 mb-4">
                Estadísticas de la Comunidad
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-amber-700">Miembros totales:</span>
                  <span className="font-semibold text-amber-900">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-700">Mensajes hoy:</span>
                  <span className="font-semibold text-amber-900">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-700">Usuarios activos:</span>
                  <span className="font-semibold text-amber-900">23</span>
                </div>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-amber-900 mb-4">
                Temas Populares
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span className="text-sm text-amber-700">Teorías sobre Shadowmere</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span className="text-sm text-amber-700">Personajes favoritos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span className="text-sm text-amber-700">Próximos lanzamientos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span className="text-sm text-amber-700">Fanart y creaciones</span>
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