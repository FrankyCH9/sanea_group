'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phoneNumber = "51998998318"; // Reemplaza con tu número de WhatsApp (sin +)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const whatsappMessage = `Hola, soy ${name}.\nMi correo es: ${email}.\nMensaje:\n${message}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappLink;
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Sección del video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/video/2.mp4" type="video/mp4" />
        </video>
        {/* Capa oscura para mejorar la visibilidad del formulario */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Sección del formulario */}
      <div className="relative z-10 w-full max-w-lg p-8 bg-white bg-opacity-90 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">
          Contáctenos
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Completa el formulario y envía tu consulta directamente a nuestro WhatsApp.
        </p>

        <form className="space-y-6" onSubmit={handleSend}>
          <div className="relative">
            <FaUser className="absolute left-4 top-3 text-gray-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre completo"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-700 transition duration-300 active:scale-95"
            >
              <FaPaperPlane /> Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
