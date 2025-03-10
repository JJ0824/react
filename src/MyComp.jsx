/* 리액트의 반드시 숙지해야할 규칙 7가지
1. let, const
- 변수 선언시 사용함.
- let으로 선언하면 값이 변경된다해도 문제가 없음.
- const는 선언된 후 값이 변경될 수 없음
- const는 객체나 배열을 선언할 때 객체 자체를 변경할 수는 있지만, 참조를 재할당할 수는 없음

2. 화살표 함수 () => {}
- 익명 함수로서 많이 사용됨.
- function 기능을 보다 간결하게 사용할 수 있음

3. 구조 분해 할당 (Destructuring)
- let user = { name : five, age : 5 }
console.log(user.age); // 5
- let {name, age} = user;
console.log(name); // five

4. 스프레드 연산자 (...)
- let a = {1, 2, 3}; let b = {4, 5, 6};
let c = {a, b};
console.log{c}; // {{1,2,3}, {4,5,6}};
let c = {…a, …b};
console.log{c}; // {1,2,3,4,5,6};

let c = {…a}; // a값 복사

5. map, filter, find
- [1,2,3,4,5].map = 5개 내부 값 컨트롤 =⇒ [10, 20, 30, 40, 50]
- [1,2,3,4,5].filter=⇒ 개수 컨트롤 [2,4]
- find[3] = 2 ⇒ 3이 있는 인덱스값 리턴

6. async/await
- async/await 비동기 코딩
- async 함수() {
    const x= await 비동기함수();                        [비동기.js —————— 이 값이 불러와짐]
    const c = x + 100;
}

7. import, export
- 자바에서 쓰는 개념과 비슷, 외부 파일에 import하면 외부에 있는 함수 호출 가능
- export로 선언되어 있지 않은 함수는 import로 호출할 수 없음 (public과 비슷)
*/

// export 키워드를 붙이면 외부 파일의 컴포넌트가 import할 수 있음
export function MyComp() {
  return <>
    <MyCompOnly />
  </>;
}

// export 키워드가 없으면 같은 파일에서만 사용할 수 있음
function MyCompOnly() {
  return <></>;
}