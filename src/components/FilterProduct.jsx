import { Button, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../context/ClientProvider";
import SearchProduct from "./SearchProduct";
import Reset from "@mui/icons-material/HighlightOff";

const FilterProducts = () => {
  let search = new URLSearchParams(window.location.search);
  let navigate = useNavigate();
  const { getProducts } = useContext(ClientContext);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  //   const [value, setValue] = useState("");

  function filter(key, value) {
    search.set(key, value);
    const newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setFrom(search.get("price_gte"));
    setTo(search.get("price_lte"));
    // setValue(search.get("q"));
    getProducts();
  }
  function reset() {
    navigate("/products");
    getProducts();
    setFrom("");
    setTo("");
    // setValue("");
  }

  useEffect(() => {
    setFrom(search.get("price_gte"));
    setTo(search.get("price_lte"));
    // setValue(search.get("q"));
  }, []);

  return (
    <div className="filter-products">
      <div className="price-filter">
        <TextField
          onChange={(event) => filter("price_gte", event.target.value)}
          variant="standard"
          label="От"
          value={from}
        />
        <TextField
          onChange={(event) => filter("price_lte", event.target.value)}
          variant="standard"
          label="До"
          value={to}
        />
        <CloseIcon 
        style={{ cursor: "pointer" }}
        onClick={reset} />
      </div>
      <SearchProduct />
    </div>
  );
};

export default FilterProducts;
