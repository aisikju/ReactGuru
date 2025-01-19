import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const title = (
    <h1 className="head" tabIndex="5">
        React Guru using JSX
    </h1>
);


// Component Composition 


// React Functional Component - normal js function which returns a JSX / React Element
const HeadingComponent = () => (
    <div id="container">
       {title }
       <h1 className="heading">React Guru Functional Component</h1>
    </div>  
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />);  // Replace everything inside root