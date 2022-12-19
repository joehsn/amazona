import { Roboto } from "@next/font/google";
import Layout from "../components/Layout";

const roboto = Roboto({ weight: ["100", "400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <Layout className={roboto.className}>
      <h1>Amazona</h1>
    </Layout>
  );
}
