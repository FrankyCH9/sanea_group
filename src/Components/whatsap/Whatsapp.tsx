'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Definimos el tipo de las propiedades para el componente WhatsAppButton
interface WhatsAppButtonProps {
  productou?: string; // Puedes especificar el tipo de 'productou' según sea necesario
}

const Whatsapp: React.FC<WhatsAppButtonProps> = ({ productou }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>('');
  const [showTooltip, setShowTooltip] = useState<boolean>(false); // Estado para mostrar el mensaje emergente
  const phoneNumber: string = '51998998318';

  const isMobile = (): boolean => {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const sendWhatsAppMessage = (productou?: string): void => {
    const message = userMessage
      ? userMessage
      : `¡Hola! 👋 Gracias por ponerte en contacto con el equipo de SANEA GROUP. Coméntanos en qué podemos asistirte y en breve un Asesor Comercial se pondrá en contacto con usted.`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = isMobile()
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  const closeChat = (): void => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setShowMessage(false);
      setIsAnimatingOut(false);
    }, 300);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-10">
      {showTooltip && (
        <div className="flex items-center justify-start bg-green-100 text-green-700 p-3 rounded-full">
        <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 mr-2 text-lg" />
        <span className="text-sm font-medium">¿Consultas? Nosotros te ayudaremos</span>
      </div>
      

      )}

      {showMessage ? (
        <div className={`relative mb-2 w-80 ${isAnimatingOut ? 'animate-slideOut' : 'animate-slideIn'}`}>
          <div className="bg-white rounded-xl shadow-lg border">
            <div className="bg-green-500 rounded-t-xl p-3 flex items-center justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faWhatsapp} className="text-white mr-2 text-lg" />
                <span className="text-white font-bold text-lg">WhatsApp</span>
              </div>
              <button onClick={closeChat} className="text-white">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="p-4 bg-gray-50">
              <div className="relative bg-green-100 p-4 rounded-xl shadow-inner mb-3 before:absolute before:content-[''] before:left-0 before:top-4 before:bg-green-100 before:w-4 before:h-4 before:transform before:rotate-45 before:-ml-2">
                <p className="text-gray-800">Hola, ¿en qué podemos ayudarte?</p>
              </div>

              <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
                placeholder="Escribe tu mensaje..."
                rows={3}
                style={{
                  backgroundColor: '#f0f0f0',
                  color: '#333',
                  fontSize: '14px',
                  resize: 'none',
                }}
              />

              <button
                onClick={() => sendWhatsAppMessage(productou)}
                className="bg-green-500 text-white w-full py-3 rounded-br-full flex items-center justify-center hover:bg-green-600 transition"
                style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0', borderTopRightRadius: '0', borderBottomRightRadius: '50px' }}
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-white mr-2" />
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setShowMessage(true)}
          onMouseEnter={() => setShowTooltip(true)} // Mostrar el mensaje emergente al pasar el cursor
          onMouseLeave={() => setShowTooltip(false)} // Ocultar el mensaje emergente al salir el cursor
          className="bg-green-500 w-14 h-14 flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:bg-green-600"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
        </div>
      )}
    </div>
  );
};

export default Whatsapp;
