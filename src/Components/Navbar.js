import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import {toast} from 'react-hot-toast';
const Navbar = ({isLoggedIn,setLoggedIn}) =>{

    return(
        <div className="flex md:justify-between justify-evenly m-auto items-center md:w-9/12 w-11/12">
            <NavLink to="/" className="flex">
                <img src={logo} alt="img" width={160} height={32}></img>
            </NavLink> 
            <ul className="flex gap-10">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
            <div className="flex gap-5">
                {!isLoggedIn && <NavLink to="/Login"><button className="bg-[#161D29] px-5 py-2 border border-slate-700 rounded-md ">Login</button> </NavLink>}
                {!isLoggedIn && <NavLink to="/Signup"><button className="bg-[#161D29] px-4 py-2 border border-slate-700 rounded-md ">Signup</button> </NavLink>}
                {isLoggedIn &&  <NavLink to="/login" onClick={()=>{setLoggedIn(false); toast.success("logged Out")}}><button className="bg-[#161D29] px-4 py-2 border border-slate-700 rounded-md ">Logout</button> </NavLink>}
                {isLoggedIn &&  <NavLink to="/Dashboard"><button className="bg-[#161D29] px-4 py-2 border border-slate-700 rounded-md ">Dashboard</button> </NavLink>}
            </div>
        </div>
    )
}
export default Navbar;