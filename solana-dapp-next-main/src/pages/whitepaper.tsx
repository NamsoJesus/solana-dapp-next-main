import Layout from "components/Layout";

import type { NextPage } from "next";

import { WhitepaperView } from "views/whitepaper";


const Store: NextPage = (props) => {
  return (
    <div className="w-full">
      <Layout title="Solana Whitepaper">
  <WhitepaperView/>
      </Layout>
    </div>
  );
};

export default Store;
