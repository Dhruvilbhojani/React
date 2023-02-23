import React from 'react';

// function greet() {
//     return <h1>Hello Dhruvil</h1>;
// }

export const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} lastname: {props.lname}</h1>
            {props.children}
        </div>
    )
};
// export default greet;