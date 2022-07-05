import Layout from "components/Layout";

import type { NextPage } from "next";

import { ForgottenView } from "views";


const Forgotten: NextPage = (props) => {
  return (
    <div className="w-full">
      <Layout title="Solana Store">
  <ForgottenView/>
      </Layout>
    </div>
  );
};

export default Forgotten;