import React from "react";
import ReactDOM from "react-dom/client";


// React Element
const element = <h1>React Element</h1>;
// Funtional Component
const Title = () => {
    return <h1 className="heading">Hello, Vishnu!</h1>;
};

// Component Composition 
const JsxElement = () => 
    (
    <div id="container">
        {element}
        <Title /> 
        <h1>Will meet you soon! </h1>
    </div>
    );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxElement />);
