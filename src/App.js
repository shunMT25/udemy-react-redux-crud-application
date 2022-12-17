import React, {Component} from "react";
import propTypes from "prop-types"

const App = () => {
  const profiles = [
    { name:"Taro", age: 10},
    { name:"Hanako", age: 5},
    { name:"Ziro", age: 9},
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

User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}

export default App;
