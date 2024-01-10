import UseAuth from "../../Hooks/UseAuth";


const SocialLogin = () => {

    const {googleLogin} = UseAuth();
    const handleGoogleLogin = (media)=>{
      media()
      .then(res => console.log(res))
     .catch(error => console.log(error))

    }

 


  return (
    <div>
        <div className=" divider">Continue With</div>
        <div>
            <button 
            onClick={()=> handleGoogleLogin(googleLogin)}
            className="btn btn-accent">Sign in with Google</button>
        </div>
    </div>
  )
}

export default SocialLogin