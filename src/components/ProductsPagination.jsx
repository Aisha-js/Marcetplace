import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ClientContext } from "../context/ClientProvider";

export default function ProductsPagination() {
  const { postPerPage, totalProductsCount, currentPage, setCurrentPage } =
    React.useContext(ClientContext);
  const pagesCount = Math.ceil(totalProductsCount / postPerPage);
  return (
    <Stack spacing={2}>
      <Pagination
        style={{ display: "flex", justifyContent: "center" }}
        color="secondary"
        variant="outlined"
        count={pagesCount}
        page={currentPage}
        onChange={(_, newPage) => {
          setCurrentPage(newPage);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      />
    </Stack>
  );
}
