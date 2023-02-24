import {
  BsCardText,
  BsCashCoin,
  BsCheck2Circle,
  BsClock,
  BsStackOverflow,
} from "react-icons/bs";
import Card from "../components/dashboard/Card";
import Table from "../components/dashboard/Table";
const data = [
  {
    title: "Payment Recieved",
    value: 3500,
    icon: <BsCheck2Circle className="h-7 w-7 fill-primary" />,
  },
  {
    title: "Pending Amount",
    value: 4600,
    icon: <BsClock className="h-7 w-7 fill-primary" />,
  },
  {
    title: "Total Amount",
    value: 8100,
    icon: <BsCashCoin className="h-7 w-7 fill-primary" />,
  },
  {
    title: "Overdue",
    value: 4600,
    icon: <BsStackOverflow className="h-7 w-7 fill-primary" />,
  },
  {
    title: "Paid Invoices",
    value: 2,
    icon: <BsCheck2Circle className="h-7 w-7 fill-primary" />,
  },
  {
    title: "Pending Invoices",
    value: 2,
    icon: <BsClock className="h-7 w-7 fill-primary" />,
  },
  {
    title: "Total Invoices",
    value: 4,
    icon: <BsCardText className="h-7 w-7 fill-primary" />,
  },
  {
    title: "Unpaid Invoices",
    value: 2,
    icon: <BsStackOverflow className="h-7 w-7 fill-primary" />,
  },
];
const Dashboard = () => {
  return (
    <div className="min-h-[calc(100vh-122px)] md:min-h-[calc(100vh-172px)] py-8 px-8 lg:px-12 flex flex-col gap-4">
      <section className="mx-auto w-full grid gap-4 lg:gap-x-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {data.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </section>
      <section>
        <h1 className="text-center p-8 text-2xl">Recent Payments</h1>
        <Table />
      </section>
    </div>
  );
};
export default Dashboard;
