import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Project/Projects";
import Qualification from "./components/Resume";
import Skills from "./components/Skills";
import "./App.css";
import ContactForm from "./components/ContactForm";
// import Resume from "./components/Resume";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Qualification />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
