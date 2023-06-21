import React from 'react'
import "./blog.css"
import { blogs } from '../../data'
import Product from '../Product/Product'

const Blog = () => {
  return (
    <div className='blogs'> 
      <div className='blogs-text'>
        <h1 className="blogs-title">Blogs</h1>
        <p className='blogs-desc'>Some Blogs written by me</p>
      </div>
      <div className="blogs-list">
        {blogs.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default Blog
