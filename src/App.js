import React, { useEffect, useState } from "react";

import A from "./components/A";
import B from "./components/B";

function App() {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []); //가짜데이터 가져오기

  return (
    <div style={{ padding: "1rem" }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <div style={{ display: "flex" }}>
        <A message={value} posts={posts} />
        <B message={value} posts={posts} />
      </div>
    </div>
  );
}

export default App;
//A컴포넌트는 컴포넌트가 하나고, B컴포넌트는 여러컴포넌트로 구성되어있다. 어떤게 성능이 좋은지? 보는 테스트 프로젝트이다.
//B컴포넌트가 성능이 더 안좋다.
//->해결을 위해 react.memo사용
