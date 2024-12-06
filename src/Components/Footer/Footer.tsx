import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Column */}
        <div className="space-y-4">
          <h2 className="text-emerald-400 text-2xl font-medium">
            Sanea <span className="text-blue-500">Group</span>
          </h2>

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
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Sobre Nosotros</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Contactanos</a></li>
          </ul>

          {/* Newsletter Subscription */}
          <div className="mt-8 space-y-4">
            <Input
              type="email"
              placeholder="Direccion de Correo"
              className="bg-slate-800 border-slate-700"
            />
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
              Suscribirse
            </Button>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.467-.399-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058h-.468z" />
              </svg>
            </a>
          </div>

          <p className="text-slate-400 text-sm">© 2024 Sanea Group - All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

