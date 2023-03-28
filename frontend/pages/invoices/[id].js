import { useRouter } from "next/router";
import Invcoice from "../../components/invoices/Invoice";

const invoice = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="text-center">
      <Invcoice id={id} />
    </div>
  );
};
export default invoice;
