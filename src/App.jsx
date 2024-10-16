import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./singer";
import BookStore from "./bookStore";

function App() {
  const [count, setCount] = useState(0);


  const books =[
    {id : 1, name: "physics",price: 100},
    {id : 2, name: "math",price: 200},
    {id : 3, name: "chemistry",price: 130},
    {id : 4, name: "biology",price: 150}

  ]




     const actors = ["sakib",'Shoriful raj','jashim', 'rubel']
     const singers =[
    {id:1, name: 'dr.mahfojur rahman',age: 68},
    {id:2, name: 'eva rahman',age:33},
    {id:3, name:'subro dev', age: 58},
    {id:4, name: 'Pritom', age:28}
     ]
  return (
    <>
      <h1>Vite + React</h1>
     <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }



       <Actor name={"bappa Raz"}></Actor>
       {
        actors.map(actor => <Actor name={actor}></Actor>)
       }

      {/* <Todo 
      note="learn react" 
      isDone={true}>
      </Todo>

      <Todo 
      note="explore core consepts" 
      isDone={false}>
      </Todo>

      <Todo 
      note="try jsx" 
      isDone={true}>
      </Todo> */}
      {/* <Person></Person>
      <Person></Person>
      <Student grade="10" score="99"></Student>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
      <Developer></Developer>
      <Device name="laptop" price="500"></Device>
      <Device name="mobile" price="200"></Device>
      <Device name="tablet" price="300"></Device> */}
    </>
  );
}

function Person() {
  const age = 13;
  const money = 10;
  const person = {
    name: "mehedi hasan",
    age: 23,
    isMarrid: false,
    "d-ev": "react",
  };
  return (
    <h3>
      This is {person.name}, I am a {person["dev"]} developer, My Age :{" "}
      {age + money}
    </h3>
  );
}

const { grade, score } = { grade: "10", score: "99" };
//we can pass object value in fubction by object destructuring
function Student({ grade = 7, score = 0 }) {
  console.log(grade, score);
  return (
    //if we want to add style object in style than we need to write {{}},
    <div style={{ border: "1px solid red", borderRadius: "12px" }}>
      <h1>i am a student </h1>
      <p>i am currently learning web dev</p>
      <p>grade:{grade}</p>
      <p>score:{score} </p>
    </div>
  );
}

function Developer() {
  // we can add style from variable
  const developerStyle = {
    backgroundColor: "red",
    color: "white",
    boeder: "2px solid black",
    borderRadius: "12px",
    padding: "10px",
    marginTop: "10px",
  };
  return (
    //style adding
    <div style={developerStyle}>
      <h3>name: mehedi hasan</h3>
      <p>age : 23</p>
      <p>height : 179cm</p>
    </div>
  );
}

function Device(props) {
  // console.log(props)
  //adding dynamic values
  return (
    <h2>
      device : {props.name} , price : $ {props.price}
    </h2>
  );
}

export default App;
