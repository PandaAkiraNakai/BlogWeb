import React from 'react';
import { BookOpen, Mail, Twitter, Instagram, Facebook, Heart, Zap, Shield, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-gradient border-t border-cyber-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Zap className="h-8 w-8 text-cyber-primary" />
                <div className="absolute inset-0 h-8 w-8 text-cyber-primary opacity-30 animate-ping"></div>
              </div>
              <span className="text-2xl font-bold font-medieval text-cyber-primary neon-text">CyberScribe</span>
            </div>
            <p className="text-cyber-light/80 mb-6 max-w-md font-cyber">
              Inmersión total en realidades digitales donde la fantasía medieval se fusiona con la tecnología cuántica. 
              Únete a miles de usuarios que han encontrado su escape en estos mundos híbridos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyber-primary hover:text-cyber-secondary transition-colors duration-300 cyber-glow p-2 rounded-lg">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-primary hover:text-cyber-secondary transition-colors duration-300 cyber-glow p-2 rounded-lg">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-primary hover:text-cyber-secondary transition-colors duration-300 cyber-glow p-2 rounded-lg">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-primary hover:text-cyber-secondary transition-colors duration-300 cyber-glow p-2 rounded-lg">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-medieval text-cyber-primary flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3 text-cyber-light/80 font-cyber">
              <li>
                <a href="/blog" className="hover:text-cyber-primary transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></span>
                  Data Logs
                </a>
              </li>
              <li>
                <a href="/characters" className="hover:text-cyber-primary transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-cyber-secondary rounded-full mr-2"></span>
                  Entities
                </a>
              </li>
              <li>
                <a href="/places" className="hover:text-cyber-primary transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-cyber-accent rounded-full mr-2"></span>
                  Realms
                </a>
              </li>
              <li>
                <a href="/books" className="hover:text-cyber-primary transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-medieval-gold rounded-full mr-2"></span>
                  Archives
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-cyber-primary transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-cyber-green rounded-full mr-2"></span>
                  Network
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-medieval text-cyber-primary flex items-center">
              <Cpu className="h-5 w-5 mr-2" />
              Contacto
            </h3>
            <ul className="space-y-3 text-cyber-light/80 font-cyber">
              <li>
                <a href="mailto:cyberscribe@nexus.com" className="hover:text-cyber-primary transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></span>
                  cyberscribe@nexus.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyber-secondary rounded-full mr-2"></span>
                Neural Link
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyber-accent rounded-full mr-2"></span>
                Quantum Events
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-medieval-gold rounded-full mr-2"></span>
                Guild Alliances
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-primary/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-cyber-light/60 text-sm font-cyber">
            © 2024 CyberScribe Nexus. Todos los derechos reservados en todas las dimensiones.
          </div>
          <div className="flex items-center space-x-2 text-cyber-light/60 text-sm mt-4 md:mt-0 font-cyber">
            <span>Forjado con</span>
            <Heart className="h-4 w-4 text-cyber-red animate-pulse" />
            <span>para los exploradores de realidades híbridas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;