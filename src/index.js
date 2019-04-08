import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Footer = () => {
  return <footer>&copy; 2018</footer>;
};
function App() {
    const data = {
        age:26,
        skills = ["a", "b"]

    }
  return (
    <div id="App">
      <Header />
      <Person mydata={data} name="Ulla" />
      <Person mydata={data} name="Bo" />
      <Person mydata={data} name="Ib" />
      <Person mydata={data} name="Ask" />
      <Footer mydata={data} name="Ask" />
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
      <section>
        writen by <Person name="ju" />
      </section>
    </header>
  );
}
function Person(props) {
  console.log(props.name);
  return (
    <article>
      <h1>{props.name}</h1>
      <p>ola</p>
    </article>
  );
}
//JSX = ex:"<App />" html elemts form react always capitalized
ReactDOM.render(<App />, document.getElementById("root"));
