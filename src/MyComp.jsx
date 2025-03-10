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
- 배열 내부 value를 쉽게 선언하여 빼낼 수 있음. + [] 대괄호 사용해야함
- let fruits = ["apple", "grape", "berry", "strawberry"];
console.log(fruits);
- const [first, second, third] = fruits;
console.log(first, second, third); // apple, grape, berry
- 객체 구조 분해 할당 시 주의할 점 : key값과 선언하는 값이 다르면 에러남. + {} 중괄호 사용해야함
- let user = { name : five, age : 5 }
console.log(user.age); // 5
- const {name, age} = user;
console.log(name); // five

4. 스프레드 연산자 (...)
- let a = {1, 2, 3}; let b = {4, 5, 6};
let c = {a, b};
console.log{c}; // {{1,2,3}, {4,5,6}};
let c = {…a, …b};
console.log{c}; // {1,2,3,4,5,6};
- 참조복사가 아니라, 값복사 가능
let c = a; // a값 참조복사
let c = {…a}; // a값 복사

5. map, filter, find
- [1,2,3,4,5].map // 5개 내부 값 컨트롤 =⇒ [10, 20, 30, 40, 50]
- [1,2,3,4,5].filter // 개수 컨트롤 [2,4]
- find[3] = 2 ⇒ 3이 있는 인덱스값 리턴

6. async/await
- async/await 비동기 코딩
- async 함수() {
    const x= await 비동기함수(); // [비동기.js —————— 이 값이 불러와짐]
    const c = x + 100;
}

7. import, export
- 자바에서 쓰는 개념과 비슷, 외부 파일에 import하면 외부에 있는 함수 호출 가능
- export로 선언되어 있지 않은 함수는 import로 호출할 수 없음 (public과 비슷)
*/

// export 키워드를 붙이면 외부 파일의 컴포넌트가 import할 수 있음
export function MyComp() {
  const colors = ["black", "white", "blue"];
  const [first, second] = colors;
  // 배열의 구조분해할당. [] 대괄호 사용

  const user = {
    name : "Notch",
    age : 25,
  };
  const { age, name } = user;
  // 객체의 구조분해할당. {} 중괄호 사용
  console.log(first + " " + second);
  console.log(name + " " + age);

  const array1 = [1,2,3];
  const array2 = [4,5,6];
  const array3 = [...array1, ...array2];
  console.log(array3);
  // 스프레드 연산자의 유용한 사용법
  // 배열에 새로운 데이터를 추가하는데 항상 제일 앞에 추가
  const array4 = [10, ...array3];
  console.log(array4);
  const array5 = [...array4, 100]; // 제일 뒤에 추가하고 싶을 때
  console.log(array5);
  // 참조복사가 아닌 값복사를 할 수 있음
  const array6 = array1; // 참조복사
  const array7 = [...array1];
  console.log(array6); // [1,2,3];
  array1[0] = 10;
  console.log(array6); // [10,2,3];
  console.log(array7); // [1,2,3];

  const numbers = [1,2,3];
  const mapResult = numbers.map((num)=> num*2);
  console.log(mapResult); // 2,4,6
  const filterResult = numbers.filter(num => num%2 === 0);
  console.log(filterResult); // 2
  const users = [
    {id : 1, name: "K"},
    {id : 2, name: "I"},
    {id : 3, name: "D"},
  ];
  const findResult = users.find(user => user.id === 2);
  console.log(findResult);

  function method1(x) {
    console.log("method1함수의 출력 : " + x);
  }
  
  const isLoggedIn = true;

  return (
    <>
      <p>나의 컴포넌트</p>
      <MyCompOnly />
      <div onClick={()=> method1("1000")}>여기를 클릭하시오!</div>
      {isLoggedIn ? <p>로그인 하셨습니다.</p> : <p>로그인해주세요.</p>}
    </>
  );
}

// export 키워드가 없으면 같은 파일에서만 사용할 수 있음
function MyCompOnly() {
  return (
    <>
      <p>내부 컴포넌트</p>
    </>
  );
}