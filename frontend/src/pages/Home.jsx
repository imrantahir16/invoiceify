import image from "../assets/89367.jpg";
const Home = () => {
  return (
    <div>
      <section className="w-4/5 md:w-1/2 my-12 mx-auto">
        <h1 className="font-medium text-4xl md:text-7xl text-center py-4 ">
          Professional <span className="text-primary">Invoicing</span> Made
          Simple with Invoiceify
        </h1>
        <div className="py-8 textmd  md:text-2xl text-center leading-8">
          <p>
            Invoiceify simplifies professional invoicing. Create customized
            invoices, track payments, and manage your finances effortlessly.
            Spend less time on invoicing and more time on growing your business
            with Invoiceify.
          </p>
        </div>
        <div className="mt-12 flex items-center justify-center ">
          <img
            className="w-[40rem] md:w-[1200px] md:mx-28 mx-auto"
            src={image}
            alt="invoicing app mockup"
          />
        </div>
      </section>
    </div>
  );
};
export default Home;
