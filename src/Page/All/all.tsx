import { useContext } from "react";
import Layout from "../../Component/Layout/layout";
import { HackerNewsContext } from "../../Context/hackerNewsContext";

function All() {
  const context: any = useContext(HackerNewsContext);
  return (
    <Layout>{context.loadingApi ? <p>Loading...</p> : <h2>All</h2>}</Layout>
  );
}

export default All;
