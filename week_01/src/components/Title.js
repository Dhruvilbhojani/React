import React from 'react'

function Title(props) {
    return (
        <div>
            <h1>TatvaSoft Industrial Project {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Title