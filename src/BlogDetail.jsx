import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const Navigate = useNavigate();
    const handleClick = () => {
      fetch(`http://localhost:8000/blogs/` + blog.id, {
        method: "DELETE"
      }).then(() => {
        alert("Blog deleted successful..");
        Navigate("/");
      })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetail;
