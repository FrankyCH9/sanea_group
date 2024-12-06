import Image from "next/image";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Carrusel from "./Components/CarruselImg/Carrusel";
import WhatsAppWidget from "./Components/whatsap/whatsapwidget";



export default function Home() {

  return (
    <main>
      <Header/>
       
      <Carrusel/>
      <WhatsAppWidget/>
      <Footer/>
    
    
    </main>
  );
}