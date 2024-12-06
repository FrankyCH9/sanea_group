'use client';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Define the type of productou
interface Product {
  name: string;
  // Add other properties if needed (e.g., id, price, description, etc.)
  description?: string;  // Optional property
}

interface WhatsAppWidgetProps {
  productou: Product | null; // productou can be null or a Product object
}

const WhatsAppwidget: React.FC<WhatsAppWidgetProps> = ({ productou }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const [hoverTime, setHoverTime] = useState(0);  // Variable to track hover time
  const phoneNumber = '51987307281';

  const isMobile = () => {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const sendWhatsAppMessage = (productou: Product | null) => {
    const message = userMessage
      ? userMessage
      : `Hola, estoy interesado en el producto: ${productou ? productou.name : ''}. Quisiera más información.`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = isMobile()
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  const closeChat = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setShowMessage(false);
      setIsAnimatingOut(false);
    }, 300);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (hoverTime > 2) {  // If hover time exceeds 2 seconds, open chat automatically
      setShowMessage(true);
    } else {
      timer = setTimeout(() => {
        if (hoverTime > 0) {
          setHoverTime(hoverTime + 1);  // Increment hover time
        }
      }, 1000);  // Wait 1 second before incrementing the hover time
    }

    return () => clearTimeout(timer);
  }, [hoverTime]);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-10">
      {/* Tooltip when hovering over the WhatsApp button */}
      {showTooltip && (
        <div className="absolute bottom-16 left-0 bg-white text-gray-700 px-4 py-2 rounded-xl shadow-lg border">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 mr-2 text-lg" />
            <span className="text-sm font-medium">¿Consultas? Contacta con un Asesor T&S</span>
          </div>
        </div>
      )}

      {showMessage ? (
        <div className={`relative mb-2 w-80 ${isAnimatingOut ? 'animate-slideOut' : 'animate-slideIn'}`}>
          <div className="bg-white rounded-xl shadow-lg border">
            <div className="bg-[#128C7E] rounded-t-xl p-3 flex items-center justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faWhatsapp} className="text-white mr-2 text-lg" />
                <span className="text-white font-bold text-lg">WhatsApp</span>
              </div>
              <button onClick={closeChat} className="text-white">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="p-4 bg-gray-50">
              <div className="relative bg-[#D1F2E1] p-4 rounded-xl shadow-inner mb-3 before:absolute before:content-[''] before:left-0 before:top-4 before:bg-[#D1F2E1] before:w-4 before:h-4 before:transform before:rotate-45 before:-ml-2">
                <p className="text-gray-800">Hola, ¿en qué podemos ayudarte?</p>
              </div>

              <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#128C7E] focus:border-transparent mb-3"
                placeholder="Escribe tu mensaje..."
                rows={3}  // Asegúrate de que esto sea un número válido
                style={{
                  backgroundColor: '#f0f0f0',
                  color: '#333',
                  fontSize: '14px',
                  resize: 'none',
                }}
              />

              <button
                onClick={() => sendWhatsAppMessage(productou)}
                className="bg-[#128C7E] text-white w-full py-3 rounded-br-full flex items-center justify-center hover:bg-[#075E54] transition"
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
          onMouseEnter={() => { setShowTooltip(true); setHoverTime(1); }}  // Start counting hover time
          onMouseLeave={() => { setShowTooltip(false); setHoverTime(0); }}  // Reset hover time when leaving
          className="bg-[#128C7E] w-14 h-14 flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:bg-[#075E54]"
        >

          <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
        </div>
      )}
    </div>
  );
};

export default WhatsAppwidget;
