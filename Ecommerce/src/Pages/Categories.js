// import React,{useState, useEffect} from 'react'
import useCategory from '../hooks/useCategory'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
        <div className='container'>
            <div className='row'>
                    {categories.map((c)=>(
                        <div className='col-md-4 mt-3 mb-3 gx-2 gy-3 text-center'  key={c._id}>
                                <Link className='btn btn-secondary w-75 m-2 p-3' to={`/categories/category/${c.slug}`}>
                                  <b>{c.name}</b></Link>
                        </div>
                    ))}
            </div>
        </div>
    </Layout>
  )
}

export default Categories