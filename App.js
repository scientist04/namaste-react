import React from "react";
import ReactDOM from "react-dom/client";



//React.createElement => gives a ReactElement => creates an JS Object => when we render to DOM then it becomes HTML element
// const heading = React.createElement(
//     "h1",
//     {id: "heading"}, 
//     "Namaste React 🚀"
// );
// console.log(heading)



//JSX - makes developers life easy
//JSX (transpiled before it reaches the JS engine) => PARCEL => BABEL(converts the JSX code to React Code that browser understands)
//JSX code => Babel transpiles it to React.createElement converts to => JS Object converts to => HTML element with the help to render function 
//React Element
const heading = (
  <h1 className="head" tabIndex="5">"Namaste React using JSX 🚀"</h1>
); 
console.log(heading);

//React Element
const elem = (
    <div>
      {heading}
      <span>React Element</span>
    </div>
);


//React Component - 2 types
//1. class-based components -> OLD way of writing components -> today no one writes class-based component 
//2. functional component -> NEW way of writing components


//React Functional Component
const ReactComponent1 = () => {
    return <h1>React Functional Component using curly brackets, here we need to write return keyword</h1>
}

const ReactComponent2 = () => (
    <h1>React Functional Component using round brackets, here we not have to write return keyword</h1>
)

const ReactComponent3 = () => (
    //nested jsx code
    <div className="heading ">
      <h1 className="heading3">nested jsx code in react component</h1>
    </div>
)

//component composition -> composing two components into one another
const ReactComponent4 = () => (
    <div>
      {elem}
      <h1>{1000+100+10+1}</h1>
      {1+2}
      <ReactComponent1/>
      <ReactComponent2/>
      <ReactComponent3/>
      <h1>Component Composition</h1>
    </div>
)

//we can compose anything inside anything in our react code using curly braces

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent4/>);  //rendering react component