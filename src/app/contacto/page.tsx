'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
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

    // Construir el mensaje para WhatsApp
    const whatsappMessage = `Hola, soy ${name}.\n\nMi correo es: ${email}.\n\nMensaje:\n${message}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirigir a WhatsApp
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">
          Contáctenos por WhatsApp
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Completa el formulario y envía tu consulta directamente a nuestro WhatsApp.
        </p>

        <form className="grid grid-cols-1 gap-6" onSubmit={handleSend}>
          <div>
            <label className="block text-gray-700 font-medium">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Escribe tu correo electrónico"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje"
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300"
            >
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
