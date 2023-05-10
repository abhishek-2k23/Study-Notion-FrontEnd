/* eslint-disable jsx-a11y/img-redundant-alt */
import frameImage from "../assets/frame.png";
import {FcGoogle} from "react-icons/fc";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
const Tempelate = ({title,desc1,desc2,fromtype,image,setLoggedIn}) => {
    return (
        <div className="md:w-9/12 m-auto w-11/12 flex justify-between pt-10 ">
            <div className="w-[40%] ">
                <h1 className="text-3xl font-bold tracking-wide mb-3">{title}</h1>
                <div className="text-xl opacity-70">{desc1}</div>
                <div className="text-xl text-sky-300 opacity-90 italic tracking-wide mb-5">{desc2}</div>
                <div>
                    {
                    fromtype === "Login" ? (<LogInForm setLoggedIn={setLoggedIn}/>) : (<SignUpForm setLoggedIn={setLoggedIn}/>)
                    }
                </div>
                <div className="flex items-center justify-center mt-3 opacity-50">
                    <span className="h-[1px] w-44 bg-slate-500 opacity-75"></span>
                    <span className="capitalize mx-1 text-slate-500 ">OR</span>
                    <span className="h-[1px] w-44 bg-slate-500 opacity-75"></span>
                </div>
                <div className="relative mt-3">
                    <span className="absolute top-3 pt-1 left-28  text-2xl"> <FcGoogle/> </span>
                    <button className="px-36 py-3 text-center text-slate-500 border border-slate-400 tracking-wide rounded-md capitalize">Sign In with google</button>
                </div>
            </div>
            <div className="relative h-[406px] w-[460px]">
                <div className="z-20 absolute top-0   right-5">
                    <img src={image} alt="image" width={450} height={406} className=""/>
                </div>
                <div className="absolute top-3 ring-0">
                    <img src={frameImage} alt="frame-image" width={450} height={390} className=""/>
                </div>
            </div>
        </div>
    );
};
export default Tempelate;