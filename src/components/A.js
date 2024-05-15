import React from 'react'

const A = ({ message, posts }) => {
  return (
    <div>
      <h1>A Component</h1>
      <p>{message}</p>
      <ul>
        {posts.map(posts => {
          return (
            <li key={posts.id}>
                <p>{posts.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default A;