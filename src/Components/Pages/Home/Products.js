import { CContainer, CRow, CSpinner } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://shrouded-hollows-39187.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <div>
      <CContainer className="mt-4">
        <h2 className="text-success text-center mb-3">Featured Books</h2>
        {products.length === 0 ? (
          <div className="d-flex justify-content-center">
            <CSpinner />{" "}
          </div>
        ) : (
          <div>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4}}>
              {products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </CRow>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <NavLink
                className="text-white btn btn-primary my-4"
                to="/explore"
              >
                Explore All Books
              </NavLink>
            </div>
          </div>
        )}
      </CContainer>
    </div>
  );
};

export default Products;
