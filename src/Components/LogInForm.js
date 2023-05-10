import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const LogInForm = ({ setLoggedIn }) => {
  // to store the form data
  const [formData, setFormData] = useState({ email: "", password: "" });
  console.log(formData);
  //for password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  //For every changes in the form
  function changeHandler(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  const Navigate = useNavigate();
  // on submit
  function submitHandler(event) {
    event.preventDefault();
    setLoggedIn(true);
    toast.success("Logged In");
    Navigate("/Dashboard");
  }
  return (
    <div >
      <form onSubmit={submitHandler}>
        {/* for Email Id */}
        <label >
          <p className="text-base opacity-80 mb-1">
            Email Address<sup className="text-[red] mr-1 text-xl">*</sup>
          </p> 
          <input className="mb-3 bg-[#161D29] focus:border border-b-2 border-slate-600 rounded-md py-3 pr-60 pl-3 text-white "
            required
            type="email"
            placeholder="Enter email address"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          ></input>
        </label>

        {/* For password */}

        <label className="relative">
          <p className="text-base opacity-80 mb-1">
            Password<sup className="text-[red] mr-1 text-xl">*</sup>
          </p>
          <input className=" mb-5 bg-[#161D29] focus:border border-b-2 border-slate-600 rounded-md py-3 pr-60 pl-3 text-white "
            required
            type={passwordVisible ? "password" : "text"}
            placeholder="Enter  password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          ></input>
          <span onClick={() => setPasswordVisible((prev) => !prev)} className="absolute text-center py-4 cursor-pointer right-4 text-xl">
            {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
            <NavLink to="#">
              <p className="absolute -right-1 -bottom-9 w-28 text-sky-300 opacity-90 text-sm cursor-pointer italic tracking-wider">forgot Password</p>
            </NavLink>
        </label>
        <div className="mt-7">
          <button className="px-44 pl-48 bg-[#FFD60A] py-2 text-xl text-black font-semibold tracking-wide rounded-md">Sign In</button>
        </div>
      </form>
    </div>
  );
};
export default LogInForm;
