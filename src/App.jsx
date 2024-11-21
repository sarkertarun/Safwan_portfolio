
import Banner from "./Components/Layouts/Banner"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Components/Layouts/Navbar"

import Service from "./Components/Layouts/Service"

import Whowe from "./Components/Layouts/AboutMe"
import Project from "./Components/Layouts/Project";
import MyWork from "./Components/Layouts/MyWork";
import CirculerProgressBar from "./Components/Layouts/CirculerProgressBar";
import FeedBack from "./Components/Layouts/FeedBack";
import Contact from "./Components/Layouts/Contact";
import Blog from "./Components/Layouts/Blog";
import Footer from "./Components/Layouts/Footer";


function App() {

  return (
    <>
    <Navbar />
    <Banner />
    <Service />
    <Whowe />
    <CirculerProgressBar/>
    <Project/>
    <MyWork/>
    <FeedBack/>
    <Contact/>
    <Blog/>
    <Footer/>

      
      



    
    </>
  )
}

export default App
