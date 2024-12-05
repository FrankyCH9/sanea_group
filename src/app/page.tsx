import Image from "next/image";
import Header from "./Components/Header/Header";
import CarruselImg from "./Components/CarruselImg/CarruselImg";
import Footer from "./Components/Footer/Footer";
import Carrusel from "./Components/CarruselImg/Carrusel";
import WhatsAppWidget from "./Components/whatsap/whatsapwidget";
import AboutSection from "./Components/about/AboutSection";


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