
import './App.css';
import{ BrowserRouter,
  Routes,
  Route} from "react-router-dom";
  import NavBar from './components/Navbar';
  import Hello from './Pages/hello';
  import About from './Pages/About';
 
  

function App() {
  return (


    <>
    <NavBar/>
    
    <Routes>
      <Route path="hello" element={<Hello />} /> 
      <Route path="About" element={<About />} />
      {/* <Route path="contact" element={<Contact />} /> */} 
     </Routes>
    </>

  //   <Routes>
  //   <Route path="home" element={<Home />} /> 
  //   <Route path="about" element={<About />} />
  //   <Route path="contact" element={<Contact />} />
  //  </Routes>


  //link ese dalni hai header me (import { Link } from "react-router-dom";)
  // <Link className="nav-link active" to="/home" >Home</Link>
  // <Link className="nav-link active" to="/About" >About</Link>
  //   <Link className="nav-link active" to="/contact" >Contact Us</Link>
  
    
      
   
  );
}

export default App;
