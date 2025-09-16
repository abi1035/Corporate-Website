import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import SimpleNavbar from "./component/SimpleNavbar";
import AboutUsNavBar from "./pages/AboutUsNav";
import './App.css'
import BurtonManor from "./pages/BurtonManor";
import ExecutiveTeam from "./pages/ExecutiveTeam";
import DocumentView from "./pages/DocumentView";


function App() {

    const { pathname } = useLocation();
  const isCareers = pathname.startsWith("/careers");
  const isAbout = pathname.startsWith("/about");
  const isExecutive= pathname.startsWith("/executive")
  const isDocs = pathname.startsWith("/docs");


  

  return (
    <>
     {isCareers ? (
        <SimpleNavbar />
      ) : isAbout || isExecutive ? (
        <AboutUsNavBar />
      ) : isDocs ? (
        <AboutUsNavBar /> 
      ) : (
        <Navbar />
      )}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/burton" element={<BurtonManor/>} />
        <Route path="/executive" element={<ExecutiveTeam/>} />
        <Route path="/docs/:id" element={<DocumentView />} />
      </Routes>
    </>
  )
}

export default App
