import image from "../assets/89367.jpg";
const Home = () => {
  return (
    <div>
      <section className="w-4/5 md:w-1/2 my-12 mx-auto">
        <h1 className="font-medium text-4xl md:text-8xl text-center py-4 ">
          Easiest <span className="text-primary">Invoicing</span> for businesses
        </h1>
        <div className="py-8 textmd  md:text-2xl text-center">
          <p>
            Free and Open Source Invoicing application made with MongoDB,
            Express, React & Nodejs
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
