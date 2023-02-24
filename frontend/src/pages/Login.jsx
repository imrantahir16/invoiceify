import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import useTheme from "../hooks/useTheme";
const Login = () => {
  const { theme } = useTheme();
  const [passwordShow, setPasswordShow] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);

  const loginHandler = (e) => {
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
            <BiLogInCircle className="text-3xl md:text-5xl fill-primary" />
          </div>
          <h2
            className={`text-xl md:text-3xl text-center ${
              theme === "light" ? "text-base-content" : "text-neutral-content"
            }`}
          >
            Welcome!
          </h2>
          <p
            className={`text-center ${
              theme === "light" ? "text-base-content" : "text-neutral-content"
            }`}
          >
            Sign in to your account
          </p>
          <form onSubmit={loginHandler}>
            <div className="pt-4 md:pt-8 flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <div className="relative">
                <input
                  type="password"
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
              <div className="flex items-center justify-between">
                <div className="form-control">
                  <label className="label cursor-pointer ">
                    <input
                      type="checkbox"
                      checked={isRememberMe}
                      onChange={() => setIsRememberMe(!isRememberMe)}
                      className="checkbox checkbox-sm md:checkbox-md checkbox-primary"
                    />
                    <span
                      className={`ml-2 label-text text-sm md:text-base ${
                        theme === "light"
                          ? "text-base-content"
                          : "text-neutral-content"
                      }`}
                    >
                      Remember me
                    </span>
                  </label>
                </div>
                <a
                  href="forgot"
                  className="text-primary cursor-pointer text-sm md:text-base"
                >
                  Forgot Password?
                </a>
              </div>

              <button className="btn btn-primary">Login</button>
              <div className="divider">OR</div>
              <button className="btn btn-outline">
                <FcGoogle className="mr-2" />
                Login with Google
              </button>

              <div>
                <p
                  className={`${
                    theme === "light"
                      ? "text-base-content"
                      : "text-neutral-content"
                  }`}
                >
                  Don't have an account?
                  <a
                    href="/signup"
                    className="ml-2 text-primary cursor-pointer"
                  >
                    Sign Up
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
export default Login;
