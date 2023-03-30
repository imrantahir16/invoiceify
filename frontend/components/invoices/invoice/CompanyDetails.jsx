const CompanyDetails = () => {
  return (
    <div className="flex px-4 items-center justify-between bg-primary/60">
      <h2 className="text-5xl p-4 text-primary-content">Logo</h2>
      <div className="flex justify-between gap-6 p-4 text-left">
        <div className="flex gap-2 flex-col justify-end text-primary-content">
          <a href="tel:+4733378901">+47 333 78 901</a>
          <a href="email:email@example.com">email@example.com</a>
          <a href="">yourwebsite.com</a>
        </div>
        <address className="text-primary-content flex gap-2 flex-col items-end">
          <p>street</p>
          <p>city</p>
          <p>state,coutry</p>
          <p>ZIP CODE</p>
        </address>
      </div>
    </div>
  );
};
export default CompanyDetails;
