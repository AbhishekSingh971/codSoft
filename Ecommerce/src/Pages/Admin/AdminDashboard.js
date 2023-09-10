import React from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminMenu from '../../Components/Layout/AdminMenu'
import {useAuth} from '../../context/auth'

const AdminDashboard = () => {
  const [auth ] = useAuth();
  return (
    <Layout>
    <div className='container-fluid m-3 p-3'>
      <div className='row'>
      <div className='col-md-3'>
        <AdminMenu />
      </div>
      <div className='col-md-9'>
        <div className='card w-75 p-3 border border-warning border-w-25' style={{fontFamily: 'cursive'}}>
          <div className='d-flex justify-content-center align-items-center pb-4 border-bottom border-warning'>
          <h2>Welcome {auth.user.name}</h2>
          </div>
          <h3>Email : {auth.user.email}</h3>
          <h3>Phone No. : {auth.user.phone}</h3>
          <h3>Address : {auth.user.address}</h3>
        </div>
      </div>
      </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard