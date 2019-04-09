import React from "react";
import Friends from "./Friends";

export default function App() {
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
    return <Friends {...friend} />;
  });
  return (
    <div id="App">
      <header>Header</header>
      {friends}
      <footer>Footer</footer>
    </div>
  );
}
