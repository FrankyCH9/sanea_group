import Image from "next/image";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Carrusel from "./Components/CarruselImg/Carrusel";
import Whatsapp from "./Components/whatsap/Whatsapp";




export default function Home() {

  return (
    <main>
      <Header/>
      <Carrusel/>
      <Whatsapp/>
      <Footer/>
    
    
    </main>
  );
}