import { Link, useNavigate } from "react-router-dom";
// import UseAuth from "./Hooks/UseAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialProvider from "../Social/SocialProvider";
import UseAuth from "../../Hooks/UseAuth";

const Register = () => {

  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');
  const [sucess, setSuccess] =useState('');

  const {createUser, handleUpdateProfile} = UseAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const name = (form.get('name'));
    const email = (form.get('email'));
    const photo = (form.get('photo'));
    const password = (form.get('password'))
    console.log(name, email, photo, password)

    
// rester error
    setRegisterError('');
    setSuccess('');

    // validation
    // if (password.length < 6) {
    //   setRegisterError("toast.error('six char')")
    //   return;
      
    // }
     if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/.test(password)){
      setRegisterError('Password should be minimum six characters, at least one letter and one special character')
      return;
    }
    
    

    

    createUser(email,password,name,photo)
  

    .then(res => {
      console.log(res.user)
      handleUpdateProfile(name,photo)
      .then(()=>{
        setSuccess('user created sucessfully')
        toast.success('User created successfully');
        navigate('/')
      })

    })
    .catch(error => {
      console.error(error);
      setRegisterError(error.message)
    })


  }
  return (
    <>
      
  
    
    <div >
      <h1 className="text-2xl text-center ">Please Register </h1>
      {
        registerError && <p className="text-red-700">{registerError}</p>
      }
      {
        // sucess && <p className="text-green-600"> {sucess}</p>
        sucess && <h2 className="text-green-700 text-center text-2xl mt-3 mb-3">{sucess}</h2>
      }
      <form onSubmit={handleRegister}
       className="card-body md:w-3/4 lg:w-1/2 mx-auto ">

<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered" />
        </div>

        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo" name="photo" className="input input-bordered" />
        </div> */}
        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='photo' />
                            </div>


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
          <input type="text" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account ? <Link to='/'> <button>Login</button></Link></p>

            <SocialProvider/>

      </form>
     
    </div>
 
    </>
  )
}

export default Register