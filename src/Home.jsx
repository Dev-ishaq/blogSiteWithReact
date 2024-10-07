import React from 'react'
// import { useState, useEffect  } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); 

  const title = 'All blogs';
  const myTitle = "Ishaq's blogs";

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => (
  //     blog.id !== id
  //   ));
  //   setblogs(newBlogs);
  // }

  return (
    <div className="home">
      { error && <>{ error }</> }
      { isPending && <>Loading...</> }
    { blogs && <BlogList blogs={blogs} title={title} />}
      {/* <button onClick={() => (setName('Aliyu'))}>Change Name</button> */}
      {/* <p>{ name }</p> */}
    </div>
  )
}

export default Home
