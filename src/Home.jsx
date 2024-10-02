import React from 'react'
import { useState, useEffect  } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setblogs] = useState([
    { title: 'My new website', body: 'lorem ipsum..', author: 'Ishaq', id: 1 },
    { title: 'Welcome party', body: 'lorem ipsum..', author: 'Nana', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum..', author: 'Ishaq', id: 3 }
  ]);
  const [name, setName] = useState('Ishaq');
  const title = 'All blogs';
  const myTitle = "Ishaq's blogs";

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => (
      blog.id !== id
    ));
    setblogs(newBlogs);
  }

  useEffect(() => {
    console.log('My name is ishaq');
    console.log(name)
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title={title} handleDelete={handleDelete} />
      <button onClick={() => (setName('Aliyu'))}>Change Name</button>
      <p>{ name }</p>
    </div>
  )
}

export default Home