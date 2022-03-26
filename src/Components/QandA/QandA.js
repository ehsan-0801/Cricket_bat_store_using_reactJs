import React from 'react';

const QandA = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h6 className="text-primary fw-bold">How react works?</h6>
                        <p>React is a JavaScript library (not a framework) that uses declarative code to build user interfaces (UIs) that are predictable and efficient. It may be used to create single-page applications with other libraries.Declarative code is used by programmers to generate components, which are the components that are used to show data. Components are reusable user interfaces that let you divide your project into discrete sections that work independently of one another. Components take any data input (a prop) and return a React element that specifies what should be displayed on the screen. They can use props to communicate with other components, resulting in a complicated user interface.</p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h6 className="text-primary fw-bold">How 'useState' works?</h6>
                        <p>useState is a Hook that enables state variables to be used in functional components. This function takes the initial state and returns a variable with the current state value (not necessarily the starting state) and another function to update it.useState allows you to add state to function components, as previously stated. I'm dialing React. When you use useState inside a function component, it creates a single piece of state for that component. Whereas in a class, the state is always an object, Hooks' state can be any type. Each state item has a single value, which can be an object, an array, a boolean, or any other kind.</p>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default QandA;