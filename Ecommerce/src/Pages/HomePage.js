import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/auth";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../Components/Prices";
import ImgSlider from "../Components/ImagSlider";
import CategoriesSlider from "../Components/CategoriesSlider";
import { useCart } from "../context/Cart";
import { toast } from "react-hot-toast";

const HomePage = () => {
  // const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTotal count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/product/product-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  /// filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/product/product-filters",
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Kharido - Best Offers %"}>
      <div className="pt-4">
        <ImgSlider />
      </div>
      <div>
        <CategoriesSlider />
      </div>
      <div className="row mt-3 ms-2">
        <div className="col-md-2 d-flex flex-column">
          <div className="sticky">
            {/* ==================================category filter========================== */}
            <h4 className="text-center mt-2">Filter By Category</h4>
            <div className="d-flex flex-column">
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  className="text-light"
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
          </div>

          {/*============================ price filter =============================*/}
          <h4 className="text-center mt-4 ms-2">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p.name}>
                  <Radio className="text-light" value={p.array}>
                    {p.name}
                  </Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger mt-3"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>

        <div className="col-md-10">
          {/* <h1 className="text-center">All Products</h1> */}
          <div className="d-flex flex-wrap">
            {/* <div className="product-div"> */}
            {products?.map((p) => (
              <div
                to={`http://localhost:5000/dashboard/admin/product/${p.slug}`}
                key={p._id}
                className="product-link mb-2 mt-2"
              >
                <div
                  className="card product-card-div"
                  style={{
                    width: "400px",
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
                        localStorage.setItem('cart',JSON.stringify([...cart, p]))  
                        toast.success("Item Added to Cart", { duration: 5000 });
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}
          <div className="m-2 p-3 text-center">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
