import React from 'react';
import { BookOpen, Mail, Twitter, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-amber-300" />
              <span className="text-2xl font-bold">AutorBlog</span>
            </div>
            <p className="text-amber-200 mb-4 max-w-md">
              Sumérgete en mundos fantásticos donde la imaginación no tiene límites. 
              Únete a miles de lectores que han encontrado su escape perfecto en estas páginas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-amber-200">
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/characters" className="hover:text-white transition-colors">Personajes</a></li>
              <li><a href="/places" className="hover:text-white transition-colors">Lugares</a></li>
              <li><a href="/books" className="hover:text-white transition-colors">Libros</a></li>
              <li><a href="/community" className="hover:text-white transition-colors">Comunidad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-amber-200">
              <li>
                <a href="mailto:autor@example.com" className="hover:text-white transition-colors">
                  autor@example.com
                </a>
              </li>
              <li>Newsletter</li>
              <li>Eventos</li>
              <li>Colaboraciones</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-amber-200 text-sm">
            © 2024 AutorBlog. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-1 text-amber-200 text-sm mt-4 md:mt-0">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>para los amantes de la fantasía</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;