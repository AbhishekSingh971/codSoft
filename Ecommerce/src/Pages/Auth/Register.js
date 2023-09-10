import React ,{useState} from "react";
import Layout from "../../Components/Layout/Layout";
import toast from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../../Style/AuthStyle.css';

const Register = () => {

  const[name , setName] = useState("")
  const[email , setEmail] = useState("")
  const[password , setPassword] = useState("")
  const[phone , setPhone] = useState("")
  const[address , setAddress] = useState("")
  const[answer , setAnswer] = useState("")
  const navigate = useNavigate()

  //form function
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try{
      const res = await axios.post(`http://localhost:5000/api/v1/auth/register`,{name,email, password, phone, address, answer});
      if(res.data.success){
        navigate('/login')
        toast.success(res.data.message);
      }else{
        toast.error(res.data.message)
      }
    }catch(error){
      console.log(error)
      toast.error('Somethind went wrong')

    }
  }

  return (
    <Layout title={"Register - Kharido"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <h1 className="title text-dark">Register Form</h1>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter Your Name"
              required
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
              required
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
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              placeholder="Enter Your Phone No."
              required
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
              required
            />
          </div>
          
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="naswer"
              value={answer}
              onChange={(e)=>setAnswer(e.target.value)}
              placeholder="What is Your Favorite Sports ?"
            />
          </div>
          <button type="submit" className=" btn btn-primary">REGISTER</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
