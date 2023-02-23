import React from 'react'

function Title({ name, children }) {
    return (
        <div>
            <h1>TatvaSoft Industrial Project {name}</h1>
            {children}
        </div>
    )
}

export default Title