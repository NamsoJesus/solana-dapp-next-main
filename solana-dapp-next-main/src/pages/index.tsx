import Layout from "components/Layout";
import type { NextPage } from "next";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div className="w-full">
      <Layout title="Solana Marketplace">
      <HomeView  /> 
      </Layout>
    </div>
  );
};

export default Home;
