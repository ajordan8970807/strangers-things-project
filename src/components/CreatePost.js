import React, { useState } from 'react';
import { createPost } from '../api';

const CreatePost = ({ token, fetchPosts, navigate }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newWillDeliver, setNewWillDeliver] = useState(false);
  
  async function addPost() {
    const newPost = {
      title: newTitle,
      description: newDesc,
      price: newPrice,
      location: newLocation,
      willDeliver: newWillDeliver
    }

    const results = await createPost(token, newPost)
    fetchPosts();
    navigate(`/posts`)
  }
  
  return (
    // This needs to be a form that accepts the 5 request parameters for creating a post
    <form className='create' onSubmit={(ev) => {
      ev.preventDefault();
      addPost();
    }}>

      <input className='createInput'
        type='text'
        placeholder="title"
        onChange={(ev) => setNewTitle(ev.target.value)}
      />
      <input className='createInput'
        type='text'
        placeholder="description"
        onChange={(ev) => setNewDesc(ev.target.value)}
      />
      <input className='createInput'
        type='text'
        placeholder="location"
        onChange={(ev) => setNewLocation(ev.target.value)}
      />
      <input className='createInput'
        type='text'
        placeholder="price"
        onChange={(ev) => setNewPrice(ev.target.value)}
      />
      <label>Will Deliver
        <input 
          type='checkbox'
          checked="newWillDeliver"
          onChange={(ev) => setNewWillDeliver(ev.target.checked)}
        />
      </label>
      <button id="btn" type='submit'>Post it up!!</button>
      <br></br>
      <button id="btn"type='submit' onClick={() =>{deletePost(token, postID);
      }}>Delete This!!</button>
    </form>
  )
}

export default CreatePost;