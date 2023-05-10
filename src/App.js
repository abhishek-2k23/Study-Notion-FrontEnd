import "./App.css";
import {useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './PrivateRoute'
function App() {
  
  //For login check
  const [isLoggedIn,setLoggedIn] = useState(false);
  return (
    <div className="bg-[#000814] min-h-screen max-h-full text-white py-5">
      <div>
        <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
      </div>
      <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Dashboard" element=
            {
            <PrivateRoute isLoggedIn={isLoggedIn}>
              {<Dashboard/>}
            </PrivateRoute>
            }
           />
          <Route path="/Login" element={<Login setLoggedIn={setLoggedIn}/>} />
          <Route path="/Signup" element={<Signup setLoggedIn={setLoggedIn}/>} />

      </Routes>
    </div>
    );
}

export default App;
