import { useContext, useState } from "react";
import forgetbg from "../assets/forget.jpg";
import { AllContext } from "../contextprovider/DataContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase.init";
import { toast } from "react-toastify";

const ForgetPassword = () => {
    const {resetmail} = useContext(AllContext);
    const [email, setEmail] = useState(resetmail || "")

    const handleReset = (e) =>{
        e.preventDefault();
        // const email = resetmail;
        if(email){
            sendPasswordResetEmail(auth, email)
            .then(()=>{
                // toast('password reset email sent to your email')
                toast('password reset')
                window.location.href = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox';
            }).catch(error=>{
                alert(error.message)
            })
        }
    }
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${forgetbg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <div className="card bg-black bg-opacity-10 w-full max-w-xl shrink-0 shadow-2xl">
              <form onSubmit={handleReset} className="card-body font-Roboto">
                <h1 className="font-bold text-black text-2xl font-Roboto">forget your password?</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    placeholder={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered text-black"
                    required
                  />
                </div>
                <div className="form-control">
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-neutral">Reset Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
