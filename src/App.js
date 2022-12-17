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
  const profiles = [
    { name:"Taro", age: 10},
    { name:"Hanako", age: 5},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and years {props.age}</div>
}

export default App;
