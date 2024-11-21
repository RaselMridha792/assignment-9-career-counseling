import React, { useContext, useRef, useState } from "react";
import herobg from "../assets/hero-bg-2.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";
import { AllContext } from "../contextprovider/DataContext";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, signInGoogle, handleResetPassword } =
    useContext(AllContext);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();
  const location = useLocation();

  const [toogle, setToogle] = useState(true);
  const handleToogleEye = () => {
    setToogle(!toogle);
  };

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrorMessage("");
    if (password.length < 6) {
      setErrorMessage("password mast be 6 caracter or longer");
      return;
    }
    e.target.reset();
    loginUser(email, password)
      .then((result) => {
        toast.success("login successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.success(error.message);
        setErrorMessage(error.message);
      });
  };

  const handleLoginWithGoogle = () => {
    signInGoogle()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleResetPass = () => {
    if (emailRef) {
      handleResetPassword(emailRef);
      navigate("/forget");
    } else {
      toast.error("please enter your email first");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Login | Career Compass</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      >
        <div className="hero-overlay bg-gray-400 bg-opacity-20"></div>
        <ToastContainer></ToastContainer>
        <div className="hero-content text-neutral-content text-center">
          <div className=" m-t-20 font-Roboto bg-white bg-opacity-70 shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-black text-3xl font-bold uppercase">
                Login now
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="email"
                  className="input input-bordered text-black bg-opacity-20"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={toogle ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered text-black bg-opacity-20"
                  required
                />
                <div
                  onClick={handleToogleEye}
                  className="text-black absolute top-[52px] right-6"
                >
                  {toogle ? <FaRegEye /> : <FaEyeSlash />}
                </div>
                <label className="label">
                  <Link
                    onClick={handleResetPass}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6 space-y-5">
                <button className="btn btn-neutral">Login</button>
                <button
                  onClick={handleLoginWithGoogle}
                  className="btn btn-neutral btn-outline text-xl"
                >
                  <FaGoogle /> Login with Google
                </button>
              </div>
              <div className="text-black">
                dont have any account? please{" "}
                <Link className="text-red-500" to="/register">
                  Register
                </Link>
              </div>
            </form>
            <div>
              {errorMessage && (
                <p className="text-red-500 pb-5">{errorMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
