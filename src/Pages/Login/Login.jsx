

import Swal from 'sweetalert2'
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
import video from '../../assets/login.mp4'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// import { Helmet } from 'react-helmet';
import useAuth from '../../Hooks/useAuth';
import Effectbutton from '../Shared/Effect button/EffectButton';
import Googlelogin from '../../Providers/Googlelogin';

const Login = () => {
   const {signIn}=useAuth()
   const location = useLocation();
   const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const videoRef = useRef(null);
    useEffect(() => {
        
        videoRef.current.play();
    videoRef.current.addEventListener('ended', () => {
          videoRef.current.play();
        });
      }, []);
    const HandeLogin=e=>{
        // -----------------loading off-----------------------------//
        e.preventDefault();
       
      
        console.log(e.currentTarget)
        const form=new FormData(e.currentTarget);
        const email=form.get('email')
        const password=form.get('password')
       
       
      
        
        signIn(email,password)
        .then(result=>{
          console.log(result.user)
        
          if (result.user.email) {
            Swal.fire(
              'Login success!',
              'Welcome to my Website',
              'success'
            );
          } 
          // ------------NAVIGATE-----------------
          
          navigate(location?.state?location.state:'/');
        })
        
        .catch(error => {
          
          console.error(error);
          Swal.fire(
            'Login failed',
            'Email or password is incorrect',
            'error'
          );
        
        });
        
        }
    return (
     <div>
       {/* <Helmet>
      <title>Login</title>
      <meta name='Home' content='This is home page' />
      </Helmet> */}
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <video
        ref={videoRef}
        autoPlay
        muted 
        width="440"
        height="350"
      >
        <source
          src={video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

       

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {/* ----------google sign in---------- */}
            {/* <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
<svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
</svg>
Sign in with Google
</button> */}
<Googlelogin></Googlelogin>
{/*--------- end -----------*/}
      <form onSubmit={HandeLogin}>
      
      
      <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                 name='email'
                 type="email" 
                 placeholder="email" 
                 className="input input-bordered"
                 required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="showbtn inline-flex gap-2 relative ">
                        <input
                          type={showPassword ? "text":"password"}
                          name="password"
                          placeholder="password"
                          className="input input-bordered"
                          required
                        />
                        <span
                          className="mt-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <BsEyeSlashFill></BsEyeSlashFill>
                          ) : (
                            <BsEyeFill></BsEyeFill>
                          )}
                        </span>
                      </div>
                <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative"><Effectbutton></Effectbutton></span>
  </button>
              </div>
      </form>
      {/* ---------------- */}
      <div>
      <p>Already have an account ! please <Link className="text-blue-700
       font-bold text-xl" to="/signup">Register</Link></p>
           </div>
           {/* --------------------- */}
            </div>
          </div>
        </div>
      </div>
     </div>
    );
};

export default Login;