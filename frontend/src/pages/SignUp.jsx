import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const SignUp = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordConfirmShow, setPasswordConfirmShow] = useState(false);

  const signUpHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-min flex items-center justify-center">
      <div className="card w-96 bg-neutral shadow-xl my-8">
        <div className="card-body">
          <div className="flex items-center justify-center mb-4">
            <BsPersonCircle className="text-5xl fill-primary" />
          </div>
          <h2 className="text-3xl text-center text-neutral-content">
            Create account!
          </h2>
          <form onSubmit={signUpHandler}>
            <div className="pt-8 flex flex-col gap-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter first name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter last name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <span
                  className="absolute top-4 right-5 cursor-pointer"
                  onClick={() => setPasswordShow(!passwordShow)}
                >
                  {!passwordShow ? <MdVisibility /> : <MdVisibilityOff />}
                </span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter password"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <span
                  className="absolute top-4 right-5 cursor-pointer"
                  onClick={() => setPasswordConfirmShow(!passwordConfirmShow)}
                >
                  {!passwordConfirmShow ? (
                    <MdVisibility />
                  ) : (
                    <MdVisibilityOff />
                  )}
                </span>
              </div>

              <button className="btn btn-primary">Sign Up</button>
              <div>
                <p className="text-neutral-content">Already have an account?</p>
                <a href="/login" className="text-primary cursor-pointer">
                  Login
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
