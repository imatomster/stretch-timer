import React from 'react'

export default function Button() {
    const log = () => { console.log("I was clicked") };
    return (
        <div className={"Button"}>
            <button onClick={log}>Previous</button>
        </div>
    )
}
