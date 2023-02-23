import useTheme from "../hooks/useTheme";

const Forgot = () => {
  const { theme } = useTheme();
  const forgotHandler = (e) => {
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
            Please enter your email
          </h2>
          <form onSubmit={forgotHandler}>
            <div className="pt-8 flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter email address"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Forgot;
