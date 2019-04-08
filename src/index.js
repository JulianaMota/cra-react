import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Footer = () => {
  return <footer>&copy; 2018</footer>;
};
function App() {
  return (
    <div id="App">
      <Header />
      <Person />
      <Person />
      <Person />
      <Person />
      <Footer />
    </div>
    // <header>
    //   <h1>This is React</h1>
    // </header>
  );
}
function Header() {
  return (
    <header>
      <h1>This is React</h1>
    </header>
  );
}
function Person() {
  return (
    <article>
      <h1>Ju</h1>
      <p>ola</p>
    </article>
  );
}
//JSX = ex:"<App />" html elemts form react always capitalized
ReactDOM.render(<App />, document.getElementById("root"));
