// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz:"abc"},    //attributes
//     "Hellow World from React!"
// );

// console.log(heading);  //returns object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);





/*

<div id="parent">
   <div id="child1">
      <h1>I'm an h1 tag</h1>
      <h2>I'm an h2 tag</h2>
   </div>
   <div id="child2">
      <h1>I'm an h1 tag</h1>
      <h2>I'm an h2 tag</h2>
   </div>
</div>     

*/

const heading = React.createElement("div", {id:"parent"}, 
        [React.createElement("div", {id:"child1"},
           [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]),
           React.createElement("div", {id:"child2"},
           [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")])]
           )

//to avoid this above complex code we use JSX
//JSX will make our life easy whwn we have to create tags

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
