import { useContext } from "react";
import Layout from "../../Components/Layout/layout";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";

function All() {
  const context: any = useContext(HackerNewsContext);
  return (
    <Layout>{context.loadingApi ? <p>Loading...</p> : <h2>All</h2>}</Layout>
  );
}

export default All;
