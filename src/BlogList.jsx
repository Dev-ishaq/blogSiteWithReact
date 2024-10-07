import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const BlogList = ( { blogs, title, handleDelete } ) => {
  // const blogs = props.blogs;
  // const title = props.title;
  return (
    <div className="blog-list">
      <h2>{ title }</h2>
          {blogs.map((blog) => (
          <Link to='/BlogDetail' className="name-Preview" key={blog.id}>
            <div className="main-blog">
            <h2>{blog.title}</h2>
            <p>Created by {blog.author}</p>
            </div>
            {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
          </Link>
        ))}
    </div>
  )
}

export default BlogList