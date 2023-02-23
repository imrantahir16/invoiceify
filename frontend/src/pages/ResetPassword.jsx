import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import useTheme from "../hooks/useTheme";

const ResetPassword = () => {
  const { theme } = useTheme();
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordConfirmShow, setPasswordConfirmShow] = useState(false);

  const resetHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-[calc(100vh-122px)] md:min-h-[calc(100vh-172px)] flex items-center justify-center px-2">
      <div
        className={`card w-96 ${
          theme === "light" ? "bg-base-300" : "bg-neutral"
        } shadow-xl my-8`}
      >
        <div className="card-body">
          <h2
            className={`text-xl md:text-3xl text-center ${
              theme === "light" ? "text-base-content" : "text-neutral-content"
            }`}
          >
            Reset Your Password
          </h2>
          <form onSubmit={resetHandler}>
            <div className="pt-8 flex flex-col gap-4">
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
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
