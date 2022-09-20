
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
   <>
   {/* <Router> */}
   
   <Navbar title="syedarhamhasan" />
   <div className='container my-3'>

    <Textarea/>

   {/* <Router>
         </Router> <Route exact path="/" element={<Textarea/>}/>
          </><Route exact path="/about" element={<About/>}/>
          
  <Routes> */}
  
   </div>
   {/* </Router> */}
   </>
  );
}

export default App;
