import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/NavBar/Navbar";
// import { useEffect } from "react";
// import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Training from "./components/Traning/Training";
import Footer from "./components/Footer/footer";
import ContactUs from "./components/contactUs/ContcatUs";
import Achievements from "./components/Achievements/Achievements";

function App() {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1000,
  //     once: true
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Training />
      <Achievements />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
