import React from "react";

export default function Friends(props) {
  //const car = <p>Car: {props.car}</p>; works but thus the same ting if it was down
  /*let car = "";
  if (props.car){
    car =  <p>Car: {props.car}</p>
  }*/
  // const car = props.car ? <p>Car: {props.car}</p> : "";^
  // with variable using a if statemnts in other way if props.car? do sometings : do someting
  return (
    <article className="friend">
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
        <p>
          {props.name} have {props.pets} pets.
        </p>
      </header>
      {/* {car} when you use a vairable you put curlibrakects and the varaibe name*/}
      {/* you can also simplfy by useing 2 statments is like if (2>4 && age=26) will never happen in js because 2 is never greater that 4 in js but this is used in react as you can see below */}
      {props.car && <p>Car: {props.car}</p>}
      <h2>Hobbies</h2>
      <ul>
        <li>{props.hobbies}</li>
      </ul>
    </article>
  );
}
