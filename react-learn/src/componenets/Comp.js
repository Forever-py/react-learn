import React from 'react'

export default function Comp(props) {
console.log(props)
    return (
        <div className='comp'>
            {props.children || <h1>默认值</h1>}
            {/* {props.children || "默认值"} */}
        </div>
    )
}

/**
 * 
 */