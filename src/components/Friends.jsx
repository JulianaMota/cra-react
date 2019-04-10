import React from "react";

export default function Friends(props) {
  return (
    <article className="friend">
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
        <p>
          {props.name} have {props.pets} pets.
        </p>
      </header>
      <h2>Hobbies</h2>
      <ul>
        <li>{props.hobbies}</li>
      </ul>
    </article>
  );
}
