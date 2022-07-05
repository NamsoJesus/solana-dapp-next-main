import Layout from "components/Layout";

import type { NextPage } from "next";
import { StoreView } from "views";


const Store: NextPage = (props) => {
  return (
    <div className="w-full">
      <Layout title="Solana Store">
  <StoreView/>
      </Layout>
    </div>
  );
};

export default Store;
