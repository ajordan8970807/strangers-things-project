import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Posts = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  function postMatches(post, string) {
      const{ title, description} = post;
  
      if (title.toLowerCase().includes(string.toLowerCase()) || description.toLowerCase().includes(string.toLowerCase())) {
          return post;
      }
  }

const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  return (   
    <div>
      <div>
        <form className='search'
          onSubmit={(ev) => {
            ev.preventDefault();
            // searchTerm();
          }}>

          <input
            className="searchInput"
            type="text"
            onChange={(ev) => setSearchTerm(ev.target.value)}
            placeholder="What cha lookin for?"
          ></input>
          <button id="btn" type="search">
            Search
          </button>
          <button id="btn"><Link to={'/posts/create-post'}>
            New Post</Link>
          </button>
        </form>
      </div>

      {postsToDisplay.map((post) => {
        const { description, location, price, title, _id, isAuthor } = post;
        return (
          <div className="postHolder" key={_id}>
            <h3 className="postTitle">{title}</h3>
            <p className="postDescription">Description: {description}</p>
            <p className="postPrice">Price: {price}</p>
            <p className="postLocation">Location: {location}</p>
            {isAuthor ? (
              <button className="btn">
                <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
              </button>
            ) : (
              <button className="btn">
                <Link to={`/posts/${_id}`}>View</Link>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}


export default Posts;