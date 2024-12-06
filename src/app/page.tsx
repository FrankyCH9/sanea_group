import Image from "next/image";
import Carrusel from "../Components/CarruselImg/Carrusel";
import Whatsapp from "../Components/whatsap/Whatsapp";
import About from "../Components/about/About";


export default function Home() {

  return (
    <main>
      <About/>
      <Carrusel/>
      <Whatsapp/>
    </main>
  );
}