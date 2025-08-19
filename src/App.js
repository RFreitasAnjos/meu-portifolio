import './App.css';
import { useTranslation } from "react-i18next";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';

function App() {

  const {t, i18n } = useTranslation();
  
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
