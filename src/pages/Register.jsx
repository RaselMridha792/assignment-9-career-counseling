import React, { useContext, useState } from "react";
import herobg from "../assets/hero-bg-2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AllContext } from "../contextprovider/DataContext";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [toogle, setToogle] = useState(true);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const { createUser, signInGoogle } = useContext(AllContext);
  const navigate = useNavigate();

  const handleToogleEye = () =>{
    setToogle(!toogle);
  }


  const handleRegister = (e) => {
    setErrorMessage('');
    setSuccess(false);
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if(password.length < 6){
        setErrorMessage('password should be at least 6 caracters or longer');
        return;
    };
    if(!passwordRegex.test(password)){
        setErrorMessage('password should be at least one Uppercase One LowerCase and Must be 6 caracter or longer');
        return;
    }
    e.target.reset();
    createUser(email, password)
      .then((result) => {
        console.log("account created successfully");
        setSuccess(true);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
        setSuccess(false)
      });
  };

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };
  return (
    <>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${herobg})`,
          }}
        >
          <div className="hero-overlay bg-gray-400 bg-opacity-20"></div>
          <div className="min-h-screen hero-content text-neutral-content text-center">
            <div className="font-Roboto mt-20 md:w-96  bg-white bg-opacity-70 shrink-0 shadow-2xl">
              <form onSubmit={handleRegister} className="card-body">
                <h1 className="text-black text-3xl font-bold uppercase">
                  Register now
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered bg-opacity-20"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo url"
                    className="input input-bordered bg-opacity-20"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-opacity-20 text-black"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    // type="password"
                    type={toogle?"password":"text"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered text-black bg-opacity-20"
                    required
                  />
                  <div onClick={handleToogleEye} className="text-black absolute top-[52px] right-6">
                    {toogle?<FaRegEye />:<FaEyeSlash />}
                  </div>
                </div>
                <div className="form-control mt-6 space-y-5">
                  <button className="btn btn-neutral">Register</button>
                  <button
                    onClick={handleGoogleLogin}
                    className="btn btn-neutral btn-outline text-xl"
                  >
                    <FaGoogle /> Sign Up with Google
                  </button>
                </div>
                <div className="text-black">
                  have an account? please{" "}
                  <Link className="text-red-500" to="/login">
                    Login
                  </Link>
                </div>
              </form>
              <div>
                {errorMessage && (
                  <p className="text-red-500 pb-5">
                    {errorMessage}
                  </p>
                )}
              </div>
              <div>
                {success && <p className="text-green-500">successfully account created</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
