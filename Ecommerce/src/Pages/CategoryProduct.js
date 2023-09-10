import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../Style/CategoryProductStyles.css";
import axios from "axios";
import { useCart } from "../context/Cart";
import { toast } from "react-hot-toast";

const CategoryProduct = () => {
  const [cart, setCart] = useCart()
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
        <div className="d-flex flex-wrap" style={{height: "600px"}}>
              {products?.map((p) => (
                <div
                  key={p._id}
                  className="product-link mb-2 mt-2 category"
                >
                  <div
                    className="card"
                    
                  >
                    <h5 className="card-title ps-3 pt-3">{p.name}</h5>
                    <p className="card-text ps-3 pt-3">
                      {p.description.substring(0, 25)}..
                    </p>
                    <img
                      src={`http://localhost:5000/api/v1/product/product-photo/${p._id}`}
                      className="card-img"
                      alt={p.name}
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
                        className="d-flex card-name-price"
                      >
                        <p className="card-price">{p.price} Rs.</p>
                        <a href="/" className="h">
                          Read more
                        </a>
                      </div>
                      <button
                        className="btn btn-sm btn-primary ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      <button className="btn btn-sm btn-secondary ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem('cart',[...cart, p])
                        toast.success("Item Added to Cart", { duration: 5000 });
                      }}>
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="m-2 p-3 text-center">
              {products && products.length < total && (
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "Loading..." : "Loadmore"}
                </button>
              )}
            </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;