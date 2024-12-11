import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './Components/Navbar/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import myResume from "./Components/assets/img/Gokul-Resume.pdf"
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {


  const downloadFile = (fileUrl, fileName) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleButtonClick = () => {
    // Use the imported PDF file and provide the desired file name
    downloadFile(myResume, "Gokul-Resume.pdf");
  };
  return (
    <Router>
      <>
        <NavComp handleDownloadCv={handleButtonClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </Router>
  );
}

export default App;
