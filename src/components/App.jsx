import React from "react";
import Friends from "./Friends";

export default function App() {
  const data = [
    {
      id: 1,
      name: "Ju",
      hobbies: ["drawing", "gaming", "anime"],
      email: "ju@kea.dk",
      pets: 0,
      car: "mini"
    },
    {
      id: 2,
      name: "Pedro",
      hobbies: ["youtube", "gaming", "series"],
      email: "pe@kea.dk",
      pets: 1,
    },
    {
      id: 3,
      name: "Laura",
      hobbies: ["series", "read", "gaming"],
      email: "lau@kea.dk",
      pets: 2
    }
  ];
  const friends = data.map((friend, index) => {
    //uniq id as a key could be an id form the data if you dont have maybe an email
    //but if you dont have a uniq iformtion per each data you can try to use index but that is
    //not the best beacuse the index will always change
    //key={friend.id} or key={friend.email} or key={index}
    return <Friends key={friend.id} {...friend} />;
  });
  return (
    <div id="App">
      <header>Header</header>
      {friends}
      <footer>Footer</footer>
    </div>
  );
}
