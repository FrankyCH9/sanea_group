import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Column */}
        <div className="space-y-4">
          <a href="/" className="flex items-center">
            <img src="/images/Logo_SinFondo.png" alt="Logo" className="h-16" />
          </a>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="h-5 w-5 text-slate-400" />
              <span>Miraflores-Saens Peña 302</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="h-5 w-5 text-slate-400" />
              <span>998998318</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="h-5 w-5 text-slate-400" />
              <span>comercial@saneagroupperu.com</span>
            </div>
          </div>
        </div>

        {/* Services Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-medium">Servicios</h2>
          <ul className="space-y-2">
            <li><a href="/plaga" className="hover:text-emerald-400 transition-colors">Control de Plaga</a></li>
            <li><a href="/desinfeccion" className="hover:text-emerald-400 transition-colors">Desinfección de Ambientes</a></li>
            <li><a href="/limpieza" className="hover:text-emerald-400 transition-colors">Limpieza de Reservorios de Agua</a></li>
            <li><a href="/aviar" className="hover:text-emerald-400 transition-colors">Control aviar y Animales menores</a></li>
            <li><a href="/reservorio" className="hover:text-emerald-400 transition-colors">Mantenimiento de Reservorios de agua</a></li>
            <li><a href="/consultoria" className="hover:text-emerald-400 transition-colors">Consultoria</a></li>
          </ul>
        </div>

        {/* Navigation Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-medium">Navegacion</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-emerald-400 transition-colors">Inicio</a></li>
            <li><a href="/nosotros" className="hover:text-emerald-400 transition-colors">Sobre Nosotros</a></li>
            <li><a href="/contacto" className="hover:text-emerald-400 transition-colors">Contactanos</a></li>
            <li><a href="/ubi" className="hover:text-emerald-400 transition-colors">Ubicación</a></li>
          </ul>

          {/* Newsletter Subscription */}
          <div className="mt-8 space-y-4">

          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a href="https://www.facebook.com/saneagroup" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/sanea_group/?hl=es" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.6 141 224.1 141zm0 186c-39.6 0-71.9-32.3-71.9-71.9s32.3-71.9 71.9-71.9 71.9 32.3 71.9 71.9-32.3 71.9-71.9 71.9zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-.2-35.3-9.6-66.7-35.3-92.4s-57.1-35.1-92.4-35.3c-36.4-.2-144.8-.2-181.1 0-35.3.2-66.7 9.6-92.4 35.3S9.5 109.5 9.3 144.8c-.2 36.4-.2 144.8 0 181.1.2 35.3 9.6 66.7 35.3 92.4s57.1 35.1 92.4 35.3c36.4.2 144.8.2 181.1 0 35.3-.2 66.7-9.6 92.4-35.3s35.1-57.1 35.3-92.4c.2-36.4.2-144.8 0-181.1zm-48.1 229c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.1 9-132.9 9s-103.5 2.6-132.9-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.1-9-132.9s-2.6-103.5 9-132.9c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.1-9 132.9-9s103.5-2.6 132.9 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.1 9 132.9s2.7 103.5-9 132.9z" />
              </svg>
            </a>

          </div>

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Sanea Group - Creado por 
            <a href="/https://www.facebook.com/profile.php?id=61562778300214" className="text-blue-400 hover:underline ml-2">
              Fiel-Store
            </a>
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer

