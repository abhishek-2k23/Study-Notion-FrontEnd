import React, { useState } from "react";
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignUpForm({setLoggedIn}) {
    //for the form data storage
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });
  
  //for password visible
  const [ispasswordVisibleCRT,setPasswordVisibleCRT] = useState(false);
  const [ispasswordVisibleCNF,setPasswordVisibleCNF] = useState(false);

  //for account type
  const [accountType,setAccoutType] = useState("student");

  //for changes in the form
  function changeHandler(event) {
    setFormData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }
  const Navigate = useNavigate();

  //for Submit
  function submitHandler(event){
    event.preventDefault();
    let value = formData.createPassword === formData.confirmPassword;
    (value) ? setLoggedIn(true) : (setLoggedIn(false));
    (value) ? toast.success("Signed Up") : toast.error("Password doesn't matched");
    (value) && Navigate("/Dashboard");
    
  }
  return (
    <div>
      <div className="flex gap-2 w-fit px-1 py-1 bg-[#161D29] rounded-[2rem] border-b-2 border-slate-600 mb-3 opacity-60">

        <button onClick={()=>setAccoutType("student")} className={`${(accountType === "student" ? ("bg-[#000814]"):("bg-transparent"))} transition-all duration-200 px-5 py-2 rounded-[1.5rem] text-md tracking-wider`}>Student</button>

        <button onClick={() => setAccoutType("instructor")} className={`${(accountType === "instructor" ? ("bg-[#000814]"):("bg-transparent"))} transition-all duration-200 px-5 py-2 rounded-[1.5rem] text-md tracking-wider`}>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        {/* for first name and last name */}
        <div className="flex gap-5">
            {/* firstName */}
            <label>
            <p className="text-base opacity-80 mb-1">
                First Name <sup className="text-[red] mr-1 text-xl">*</sup>
            </p>
            <input className="mb-3 bg-[#161D29] focus:border border-b-2 border-slate-600 rounded-md py-3 pr-4 pl-2 text-white "
            required
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={formData.firstName}
                onChange={changeHandler}
            ></input>
            </label>
            {/* lastName */}
            <label>
            <p className="text-base opacity-80 mb-1">
                Last Name <sup className="text-[red] mr-1 text-xl">*</sup>
            </p>
            <input className="mb-3 bg-[#161D29] focus:border border-b-2 border-slate-600 rounded-md py-3 pr-4 pl-3 text-white "
                required
                type="text"
                placeholder="Enter last Name"
                name="lastName"
                value={formData.lastName}
                onChange={changeHandler}
            ></input>
            </label>
        </div>
        {/* Email Address */}
        <label>
          <p className="text-base opacity-80 mb-1">
            Email Address<sup className="text-[red] mr-1 text-xl">*</sup>
          </p> 
          <input className="mb-3 bg-[#161D29] focus:border border-b-2 border-slate-600 rounded-md py-3 pr-60 pl-3 text-white "
            required
            type="email"
            placeholder="Enter Email Address"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          ></input>
        </label>

        {/* For the password */}
        <div className="flex gap-5">
            {/* for createPassword */}
            <label className="relative">
            <p className="text-base opacity-80 mb-1">
                Create Password<sup className="text-[red] mr-1 text-xl">*</sup>
            </p>
            <input className="mb-3 bg-[#161D29] focus:border border-b-2 border-slate-600 rounded-md py-3 pr-5 pl-2 text-white "
            required
                type={!ispasswordVisibleCRT ? "password" : "text"}
                placeholder="Enter Password"
                name="createPassword"
                value={formData.createPassword}
                onChange={changeHandler}
            ></input>
            <span onClick={() => setPasswordVisibleCRT((prev) => !prev)} className="absolute text-center py-4 cursor-pointer right-4 text-xl">
                {ispasswordVisibleCRT ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            </label>

            {/* for confirm password     */}
            <label className="relative">
            <p className="text-base opacity-80 mb-1">
              Confirm Password<sup className="text-[red] mr-1 text-xl">*</sup>
            </p>
            <input className="mb-3 bg-[#161D29] focus:border border-b-2 border-slate-600 rounded-md py-3 pr-5 pl-2 text-white "
            required
                type={!ispasswordVisibleCNF ? "password" : "text"}
                placeholder="confirm  password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={changeHandler}
            ></input>
            <span onClick={() => setPasswordVisibleCNF((prev) => !prev)} className="absolute text-center py-4 cursor-pointer right-4 text-xl">
                {ispasswordVisibleCNF ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            </label>
        </div>
        <button className="px-36 mt-3 bg-[#FFD60A] py-2 text-xl text-black font-semibold tracking-wide rounded-md">Create Account</button>
      </form>
    </div>
  );
}
export default SignUpForm;
