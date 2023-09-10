import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import AdminMenu from "../../Components/Layout/AdminMenu";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //get all Products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/product/get-product`
      );
      setProducts(data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title="Dashboard - All Products" >
      <div className="container-fluid m-3 p-3 dashboard" >
      <div className="row">
        <div className="col-md-3" style={{}}>
          <AdminMenu />
        </div>
        <div className="col-md-9"  style={{marginBottom: '100px',fontFamily: "cursive",}}>
          <h1 className="text-center"> All Products List</h1>
          <div className="product-div">
            {products?.map((p) => (
              <Link to={`/dashboard/admin/product/${p.slug}`} key={p._id} className="product-link mb-2 mt-2">
                <div className="card product-card-div" style={{ width: "21rem" }}>
                  <img src={`http://localhost:5000/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                  <div className="card-body" style={{zIndex : "3",minHeight: "50px",maxHeight: "200px"}}>
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Products;
