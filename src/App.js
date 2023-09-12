import { useState } from "react";
import "./App.css";

function App() {
  let post = "React Blog ";
  let [blogName, setBlogName] = useState([
    "남자코드 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [num, setNum] = useState([0, 0, 0]);

  const [showModal, setShowModal] = useState(false);

  const changeName = () => {
    const copy = [...blogName];
    copy[0] = "여자 코드 추천";
    setBlogName(copy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>{post}</h4>
      </div>
      <button onClick={changeName}>변경</button>
      <button
        onClick={() => {
          const copy1 = [...blogName];
          setBlogName(copy1.sort());
        }}
      >
        가나다순변경
      </button>
      {blogName.map((item, i) => {
        return (
          <div key={i} className="list">
            <h4 onClick={() => setShowModal(!showModal)}>{item}</h4>
            <h4>{blogName[i]}</h4>
            <span
              onClick={() => {
                const copyNum = [...num];
                copyNum[i] = copyNum[i] + 1;
                setNum(copyNum);
              }}
            >
              💕
            </span>{" "}
            {num[i]}
            <p>9월 12일 발행</p>
          </div>
        );
      })}
      {showModal === true ? (
        <Modal changeName={changeName} blogName={blogName} color={"red"} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.blogName[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeName}>글수정</button>
    </div>
  );
}

export default App;
