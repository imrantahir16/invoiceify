import Head from "next/head";
import Home from "../components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Invoiceify</title>
        <meta
          name="description"
          content="Migrated from Create-react-app to next"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
