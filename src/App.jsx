import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import SimpleNavbar from "./component/SimpleNavbar";
import './App.css'
import BurtonManor from "./pages/BurtonManor";


function App() {

    const { pathname } = useLocation();
  const isCareers = pathname.startsWith("/careers");

  

  return (
    <>
      {isCareers ? <SimpleNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/burton" element={<BurtonManor/>} />
      </Routes>
    </>
  )
}

export default App
