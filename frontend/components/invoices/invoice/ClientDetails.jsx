const ClientDetails = ({ id }) => {
  return (
    <div className="flex items-center justify-between p-8">
      <div className="flex gap-8 text-left">
        <div>
          <p className="text-neutral-content/60 text-sm">Bill To:</p>
          <p>Client Name</p>
          <a href="tel:+923334555430">+923334555430</a>
          <p>street,city</p>
          <p>state,country</p>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-neutral-content/60 text-sm">Invoice #</p>
            <p>{id}</p>
          </div>
          <div>
            <p className="text-neutral-content/60 text-sm">Date of Issue:</p>
            <p>25/05/2023</p>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="text-neutral-content/60 text-sm">Invoice Total</p>
        <p className="text-4xl text-primary">$ 4590.90</p>
      </div>
    </div>
  );
};
export default ClientDetails;
