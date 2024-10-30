import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Ishaq');
  const [isPending, setIsPending] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch(`http://localhost:8000/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      alert("New blog Added");
      setIsPending(false)
      Navigate("/");
    })
    
  }

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => (setTitle(e.target.value))}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          ></textarea>
        <label>Blog Author:</label>
        <select 
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Ishaq">Ishaq</option>
          <option value="Nana">Nana</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Loading...</button>}
        {/* <p>{ title }</p>
        <p>{ body }</p>
        <p>{ author }</p> */}
      </form>
    </div>
  );
}

export default Create
