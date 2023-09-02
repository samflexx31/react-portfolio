import Navbar from "./Components/Navbar";
import Intro from "./Components/intro";
import './App.css'
import Services from "./Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/portfolio";
import Testimonials from "./Components/Testimonials/testimonials";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white' : ''
    }}
    >
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Works/>
     <Portfolio/>
     <Testimonials/> 
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
