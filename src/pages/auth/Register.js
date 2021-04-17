import React,{useState} from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase";

const Register=()=>{
    const [email,setemail]=useState("");
    const handleSubmit=async (e) => {
        e.preventDefault();
        console.log(email);
const config={
    url:process.env.link,
    handleCodeInApp:true,
};

        await auth.sendSignInLinkToEmail(email,config)
        .then(        toast.success(`Email is sent to ${email} Click on the link`)
        );

    }
    return(
        <div>
            Register
            <form onSubmit={handleSubmit}>
<input type="email" value={email} onChange={e=>setemail(e.target.value)}></input>
<button type="submit">Register</button>
            </form>

        </div>
    )
};
export default Register;