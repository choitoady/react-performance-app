import React, { useCallback } from "react";
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

const List = React.memo(({ posts, testFunction }) => {
  console.log("List Component is Rendering");
  return (
    <ul>
      {posts.map((posts) => (
        <ListItem key={posts.id} posts={posts} />
      ))}
    </ul>
  );
});

const B = ({ message, posts }) => {
  console.log("B component is Rendering");
  const testFunction = useCallback(() => {}, []);
  return (
    <div>
      <h1>B component</h1>
      <Message message={message} />
      <List posts={posts} testFunction={testFunction} />
    </div>
  );
};

export default B;
//useCallback을 이용한 함수 최적화
