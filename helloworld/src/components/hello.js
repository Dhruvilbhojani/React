import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Dhruvil Bhojani</h1>
    //     </div>
    // )

    return (
        React.createElement(
            'div',
            { id: "helloid", className: "helloclass" },
            React.createElement(
                'h1',
                null,
                "Hello Dhruvil----"
            )
        )
    )
}

export default Hello;