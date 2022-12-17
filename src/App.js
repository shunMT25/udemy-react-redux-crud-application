import React, {Component} from "react";

// class App extends Component {
//   render() {
//     // const greeting = "Hi! Tom";
//     // const dom = <h1 className="foo">{greeting}</h1>
//     // const imput = <input type="text" onChange={() => {console.log("I am Tom")}}></input>
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input id="bar" type="text" onChange={() => {console.log("I am Tom")}}></input>
//       </React.Fragment>
//     );
//   }
// }


const App = () => {
  return (
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
