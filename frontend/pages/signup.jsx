import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import useTheme from "../hooks/useTheme";

const SignUp = () => {
  const { theme } = useTheme();
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordConfirmShow, setPasswordConfirmShow] = useState(false);

  const signUpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-min flex items-center justify-center px-2">
      <div
        className={`card w-96 ${
          theme === "light" ? "bg-base-300" : "bg-neutral"
        } shadow-xl my-8`}
      >
        <div className="card-body">
          <div className="flex items-center justify-center mb-2 md:mb-4">
            <BsPersonCircle className="text-3xl md:text-5xl fill-primary" />
          </div>
          <h2
            className={`text-xl md:text-3xl text-center ${
              theme === "light" ? "text-base-content" : "text-neutral-content"
            }`}
          >
            Create account!
          </h2>
          <form onSubmit={signUpHandler}>
            <div className="pt-4 md:pt-8 flex flex-col gap-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
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
                  placeholder="Confirm password"
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
              <div className="divider ">OR</div>
              <button className="btn btn-outline">
                <FcGoogle className="mr-2" />
                Continue with Google
              </button>

              <div>
                <p
                  className={`${
                    theme === "light"
                      ? "text-base-content"
                      : "text-neutral-content"
                  }`}
                >
                  Already have an account?
                  <a href="/login" className="ml-2 text-primary cursor-pointer">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
