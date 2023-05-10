import Tempelate from "../Components/Tempelate";
import loginImage from "../assets/login.png";
const Login= ({setLoggedIn}) =>{
    return(
        <Tempelate
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={loginImage}
        fromtype="Login"
        setLoggedIn = {setLoggedIn}
        />
    );
};
export default Login;