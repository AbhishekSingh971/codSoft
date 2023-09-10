import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/Cart";
import { toast } from "react-hot-toast";

const ProductDetails = () => {
  const [cart, setCart] = useCart();
  const params = useParams();
  const [product, setProduct] = useState({});
  const [realtedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();

  //inital details
  useEffect(() => {
    if (params?.slug) getProduct();
    // eslint-disable-next-line
  }, [params?.slug]);

  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar products
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row container mt-3 ms-3">
        <div className="col-md-6">
          <img
            src={`http://localhost:5000/api/v1/product/product-photo/${product._id}`}
            className="card-img mb-4"
            style={{
              borderRight: "2px solid white",
              borderBottom: "2px solid white",
            }}
            alt={product.name}
            width={"300px"}
            height={"400px"}
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Product Details</h1>
          <pre>
            <b>Name : </b> {product.name}
          </pre>
          <pre>
            <b>Description : </b> {product.description}
          </pre>
          <pre>
            <b>Price : </b> {product.price} Rs.
          </pre>
          <pre>
            <b>Category : </b> {product.category?.name}
          </pre>
          <button
            className="btn btn-sm btn-secondary ms-1"
            onClick={() => {
              setCart([...cart, product]);
              localStorage.setItem("cart", JSON.stringify([...cart, product]));
              toast.success("Item Added to Cart", { duration: 5000 });
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <hr />
      <div className="row container ms-3">
        <h3 className="text-warning">Similar Products</h3>
        {realtedProducts.length < 1 && (
          <h5 className="text-center text-danger m-5">
            No Similar Products Found
          </h5>
        )}
        <div className="d-flex flex-wrap">
          {realtedProducts?.map((p) => (
            <Link
              to={`/product/${p.slug}`}
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
                  {p.description.substring(0, 25)} ...
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
                    <a href="/" className="readMore">
                      Read more
                    </a>
                    <p className="card-text ">{p.price} Rs.</p>
                  </div>
                  <button
                    className="btn btn-sm btn-primary ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-sm btn-secondary ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to Cart", { duration: 5000 });
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
