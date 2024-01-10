import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import SocialProvider from "../Social/SocialProvider";
import { useState } from "react";
import toast from "react-hot-toast";

 
const Login = () => {
  const [sucess, setSuccess] =useState('');
  const [LoginError, setLoginError] = useState('');
  const {signIn} = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();


  const HandleLogin = (e)=>{
    e.preventDefault();
    setLoginError('');
    setSuccess('');
    const form = new FormData(e.currentTarget)
    const email = (form.get('email'));
   
    const password = (form.get('password'))
    console.log(email, password)

    signIn(email,password)
    .then(res=> {
      console.log(res.user)
      
          
      navigate(location?.state ? location.state : '/')
      setSuccess('user Login sucessfully')
      toast.success('User Login successfully');

    })

    .catch(error => console.error(error))
  }

  return (
    <div >
      <h1 className="text-2xl text-center ">Please Login </h1>
      
      {
        LoginError && <p className="text-red-700">{LoginError}</p>
      }
      {
        // sucess && <p className="text-green-600"> {sucess}</p>
        sucess && <h2 className="text-green-700 text-center text-2xl mt-3 mb-3">{sucess}</h2>
      }
      <form onSubmit={HandleLogin}
       className="card-body md:w-3/4 lg:w-1/2 mx-auto ">
       
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Dont have an account ? <Link to='/register'> <button>Register</button></Link></p>
            <SocialProvider/>

      </form>
    </div>
  )
}

export default Login