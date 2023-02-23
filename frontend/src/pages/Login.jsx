import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
const Login = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-min flex items-center justify-center">
      <div className="card w-96 bg-neutral shadow-xl my-8">
        <div className="card-body">
          <div className="flex items-center justify-center mb-4">
            <BiLogInCircle className="text-5xl fill-primary" />
          </div>
          <h2 className="text-3xl text-center text-neutral-content">
            Welcome!
          </h2>
          <p className="text-center text-neutral-content">
            Sign in to your account
          </p>
          <form onSubmit={loginHandler}>
            <div className="pt-8 flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter email address"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <div className="relative">
                <input
                  type="password"
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
              <div className="flex items-center justify-between">
                <div className="form-control">
                  <label className="label cursor-pointer ">
                    <input
                      type="checkbox"
                      checked={isRememberMe}
                      onChange={() => setIsRememberMe(!isRememberMe)}
                      className="checkbox checkbox-primary"
                    />
                    <span className="ml-2 label-text text-sm md:text-base text-neutral-content">
                      Remember me
                    </span>
                  </label>
                </div>
                <a
                  href="forgot"
                  className="text-primary cursor-pointer text-sm md:text-base"
                >
                  Forgot Password ?
                </a>
              </div>
              <button className="btn btn-primary">Login</button>
              <div>
                <p className="text-neutral-content">Don't have an account?</p>
                <a href="/signup" className="text-primary cursor-pointer">
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
