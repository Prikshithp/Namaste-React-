const heading =React.createElement("h1",{id : "heading"},"Hello world from react") // empty obj is for giving attributes // Props are children and attributes
console.log(heading); // React Object
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading); // coverting heading into h1 and put it on web



// Nested Elements

/* <div id="parent">
<div id="child">
<h1> </h1>
<h2> <h2>
</div>
</div> */
// for multiple children use an array [ ]

 const parent =React.createElement("div",{id:"parent"},
 React.createElement("div",{id:"child"},[React.createElement("h1",{}," i am a H1 tag"),
 React.createElement("h2",{},"i am an H2")]))
 root.render(parent)
