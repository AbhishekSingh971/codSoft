import React, { useState,useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import UserMenu from "../../Components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { toast } from "react-hot-toast";

const Profile = () => {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(()=>{
    const {name, email, phone, address} = auth.user;
    setName(name)
    setEmail(email)
    setPhone(phone)
    setAddress(address)
  }, [auth?.user])

   //form function
   const handleSubmit= async (e)=>{
    e.preventDefault()
    try{
      const {data} = await axios.put(`http://localhost:5000/api/v1/auth/profile`,{name,email, password, phone, address});
      if(data?.error){
        toast?.error(data.message)
      }else{
        setAuth({...auth, user: data?.updatedUser})
        let ls = localStorage.getItem('auth')
        ls = JSON.parse(ls)
        ls.user = data.updatedUser
        localStorage.setItem("auth", JSON.stringify(ls))
        toast.success(data.message)
      }
    }catch(error){
      console.log(error)
      toast.error('Somethind went wrong')

    }
  }

  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
          <div className="form-container">
        <form onSubmit={handleSubmit} style={{backgroundColor: "black",borderRadius: "20px"}}>
        <h1 className="title text-warning">USER PROFILE</h1>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter Your Name"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"  
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter Your Email"
              disabled
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              id="phone"
              pattern="[0-9]{10}"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              placeholder="Enter Your Phone No."
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              placeholder="Enter Your Address"
            />
          </div>
          <button type="submit" className="btn btn-outline-success">UPDATE</button>
        </form>
      </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
