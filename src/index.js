import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const data = [
    {
      name: "Ju",
      hobbies: ["drawing", "gaming", "anime"],
      email: "ju@kea.dk",
      pets: 0
    },
    {
      name: "Pedro",
      hobbies: ["youtube", "gaming", "series"],
      email: "pe@kea.dk",
      pets: 1
    },
    {
      name: "Laura",
      hobbies: ["series", "read", "gaming"],
      email: "lau@kea.dk",
      pets: 2
    }
  ];
  const friends = data.map(friend => {
    return (
      <Friends
        name={friend.name}
        email={friend.email}
        hobbies={friend.hobbies}
        pets={friend.pets}
      />
    );
  });
  return (
    <div id="App">
      <header>Header</header>
      {friends}
      <footer>Footer</footer>
    </div>
  );
}
function Friends(props) {
  return (
    <article>
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </header>
      <h2>Hobbies</h2>
      <ul>
        <li>{props.hobbies}</li>
      </ul>
    </article>
  );
}

//JSX = ex:"<App />" html elemts form react always capitalized
ReactDOM.render(<App />, document.getElementById("root"));
