import ClientTable from "../components/clients/ClientTable";

const Clients = () => {
  return (
    <div className="min-h-[calc(100vh-122px)] md:min-h-[calc(100vh-172px)] px-2 py-8 sm:px-8 lg:px-12 flex flex-col gap-4">
      <div>
        <div className="form-control">
          <div className="input-group input-group-sm sm:input-group-md">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered input-sm sm:input-md"
            />
            <button className="btn bg-base-200 hover:bg-base-300 border-base-200 hover:border-0 btn-square btn-sm sm:btn-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center p-2 text-xl sm:text-2xl">Clients</h1>
        <ClientTable />
      </div>
    </div>
  );
};
export default Clients;
