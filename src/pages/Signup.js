import Tempelate from "../Components/Tempelate";
import signUpImage from "../assets/signup.png";
const Signup= ({setLoggedIn}) =>{
    return(
        <Tempelate
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signUpImage}
        fromtype="signup"
        setLoggedIn={setLoggedIn}
        />
    );
};
export default Signup;