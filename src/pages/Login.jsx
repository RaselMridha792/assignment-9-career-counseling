import React from "react";
import herobg from "../assets/hero-bg-2.jpg";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      >
        <div className="hero-overlay bg-gray-400 bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className=" font-Roboto bg-white bg-opacity-70 shrink-0 shadow-2xl">
            <form className="card-body">
                <h1 className="text-black text-3xl font-bold uppercase">Login now</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 space-y-5">
                  <button className="btn btn-neutral">Login</button>
                  <button className="btn btn-neutral btn-outline text-xl"><FaGoogle /> Login with Google</button>
                </div>
              <div className="text-black">
                dont have any account? please <Link className="text-red-500" to='/register'>Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
