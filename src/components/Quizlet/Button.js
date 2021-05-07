import React from 'react'

export default function Button(props) {
    const log = () => { console.log("I was clicked") };
    return (
        <div className={"Button"}>
            <button onClick={log}>{props.name}</button>
        </div>
    )
}
