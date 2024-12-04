import Image from "next/image";
import Header from "./Components/Header/Header";
import CarruselImg from "./Components/CarruselImg/CarruselImg";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";


export default function Home() {

  return (
    <main>
      <Header/>
      <CarruselImg/>
      <div className="App">
      <Services />
      <Footer/>
    </div>
    </main>
  );
}