import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white tracking-wide">TuMarca</h2>
          <p className="text-sm text-gray-400 mt-1">Creando experiencias digitales únicas.</p>
        </div>

        {/* Enlaces de navegación */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </nav>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TuMarca. Todos los derechos reservados.
      </div>
    </footer>
  );
}