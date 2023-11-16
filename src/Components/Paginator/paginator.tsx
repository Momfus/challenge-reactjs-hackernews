import Pagination from "@mui/material/Pagination";
import { ChangeEvent, useContext } from "react";
import Layout from "../Layout/layout";
import { HackerNewsContext } from "../../Contexts/hackerNewsContext";

interface PaginatorProps {
  pageCount: number;
  onPageChange: (page: number) => void;
}

const Paginator = ({ pageCount, onPageChange }: PaginatorProps) => {
  const context = useContext(HackerNewsContext);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Layout>
      {pageCount > 0 ? (
        <Pagination
          count={pageCount}
          page={context.page}
          onChange={handleChange}
        />
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default Paginator;
