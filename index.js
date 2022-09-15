React

Creating React Component

-Create a file with .js extension
Import React from react
  import React from ‘react’

-Create a function.

  default function Component(){
return()
}

-Return to Root folder and import react component.

Import Component from ‘./Component’’

React Properties

-Include Prop in function.
import React from "react";

export default function Student(props) {
  return (
    <h1>
      {props.firstName} {props.lastName} is {props.age}.
    </h1>
  )
}

-Inside the react component function use props.`name`
  <h1>
      {props.firstName} {props.lastName} is {props.age}.
  </h1>
-In react root component add variable of what is in your component
<Student firstName="Julie" lastName="Johnson" age={23} pro={true} />



