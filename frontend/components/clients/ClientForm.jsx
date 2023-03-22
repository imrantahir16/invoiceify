const ClientForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className="w-full" onSubmit={submitHandler}>
      <div className="pt-4 md:pt-8 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-primary w-full min-w-xs"
        />
        <input
          type="email"
          placeholder="Email address"
          className="input input-bordered input-primary w-full min-w-xs"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="input input-bordered input-primary w-full min-w-xs"
        />
        <input
          type="text"
          placeholder="Address"
          className="input input-bordered input-primary w-full min-w-xs"
        />
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
};
export default ClientForm;
