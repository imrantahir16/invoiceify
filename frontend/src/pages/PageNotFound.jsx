const PageNotFound = () => {
  return (
    <div className="min-h-[calc(100vh-122px)] md:min-h-[calc(100vh-172px)] flex flex-col items-center justify-center px-2 gap-4">
      <p className="text-6xl md:text-9xl text-secondary font-bold">Oops!</p>
      <p className="text-base md:text-2xl uppercase">404 Page not found</p>
      <p className=" w-1/2 text-center text-xs md:text-base">
        The page you are looking for have been removed, had its name changed or
        is temporarily unavailable
      </p>
      <a href="/" className="btn btn-primary">
        Go To Homepage
      </a>
    </div>
  );
};
export default PageNotFound;
