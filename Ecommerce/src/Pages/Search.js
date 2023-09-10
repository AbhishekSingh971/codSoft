import React from "react";
import Layout from "./../Components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/Cart";
import {toast} from 'react-hot-toast'

const Search = () => {
  const [cart, setCart] = useCart()
  const navigate = useNavigate();
  const [values] = useSearch();
  return (
    <Layout title={"Search result"}>
      <div className="container">
        <div className="text-center">
          <h1>Search results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
              {/* <div className="product-div"> */}
              {values?.results.map((p) => (
                <div
                  to={`http://localhost:5000/dashboard/admin/product/${p.slug}`}
                  key={p._id}
                  className="product-link mb-2 mt-2"
                >
                  <div
                    className="card product-card-div"
                    style={{
                      width: "300px",
                      maxHeight: "400px",
                      marginInline: "7px",
                    }}
                  >
                    <h5 className="card-title ps-3 pt-3">{p.name}</h5>
                    <p className="card-text ps-3 pt-3">
                      {p.description.substring(0, 25)}..
                    </p>
                    <img
                      src={`http://localhost:5000/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      style={{ width: "280px", height: "220px" }}
                    />
                    <div
                      className="card-body"
                      style={{
                        zIndex: "3",
                        minHeight: "50px",
                        maxHeight: "180px",
                      }}
                    >
                      <div
                        className="d-flex"
                        style={{
                          flexDirection: "row-reverse",
                          justifyContent: "space-between",
                        }}
                      >
                        <a href="/" className="h">
                          Read more
                        </a>
                        <p className="card-text ">{p.price} Rs.</p>
                      </div>
                      <button className="btn btn-sm btn-primary ms-1" onClick={()=>{navigate(`/product/${p.slug}`)}}>
                        More Details
                      </button>
                      <button className="btn btn-sm btn-secondary ms-1" onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem('cart',JSON.stringify([...cart, p]))  
                        toast.success("Item Added to Cart", { duration: 5000 });
                      }}>
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
