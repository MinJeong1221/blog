import { useState } from "react";
import "./App.css";

function App() {
  let post = "React Blog ";
  let [blogName, setBlogName] = useState([
    "남자코드 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [num, setNum] = useState(0);

  const handleNum = () => {
    setNum(num + 1);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>{post}</h4>
      </div>
      <div className="list">
        <button
          onClick={() => {
            const copy = [...blogName];
            copy[0] = "여자 코드 추천";
            setBlogName(copy);
          }}
        >
          변경
        </button>
        <button
          onClick={() => {
            const copy1 = [...blogName];
            setBlogName(copy1.sort());
          }}
        >
          가나다순변경
        </button>
        <h4>
          {blogName[0]}
          <span onClick={handleNum}>💕</span> {num}
        </h4>
        <p>9월 12일 발행</p>
      </div>
      <div className="list">
        <h4>{blogName[1]}</h4>
        <p>9월 12일 발행</p>
      </div>
      <div className="list">
        <h4>{blogName[2]}</h4>
        <p>9월 12일 발행</p>
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
