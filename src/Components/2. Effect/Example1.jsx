import { useEffect, useState } from "react";

export function Example1() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("항상 렌더링됨. 현재 변수 count : " + count);
  });
  useEffect(() => {
    console.log("이 코드는 마운트(=로딩)될 때만 실행됨");
  }, []);
  useEffect(()=>{
    console.log("카운트가 변경될 때만 렌더링됨. Count : " + count);
  }, [count]);

  return (<>
      <div>
        <p>당신이 누른 횟수 : {count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
  </>);
}