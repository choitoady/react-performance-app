import React from "react";
//React.memo의 사용 감싸주면 된다.
const Message = React.memo(({ message }) => {
  return <p> {message} </p>;
});

const ListItem = React.memo(({ posts }) => {
  return (
    <li key={posts.id}>
      <p>{posts.title}</p>
    </li>
  );
});

const List = React.memo(({ posts }) => {
  return (
    <ul>
      {posts.map((posts) => (
        <ListItem key={posts.id} posts={posts} />
      ))}
    </ul>
  );
});

const B = ({ message, posts }) => {
  return (
    <div>
      <h1>B component</h1>
      <Message message={message} />
      <List posts={posts} />
    </div>
  );
};

export default B;
