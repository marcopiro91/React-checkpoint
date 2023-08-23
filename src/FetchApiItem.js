import React, { useState } from "react";


export function FetchApiItem({data}) {
    const [inputValue, setInputValue] = useState(false)

    function handleCheckboxChange(event) {
        setInputValue(event.target.checked)
    }

    return (
        <>
         <input type="checkbox" checked={inputValue} onChange={handleCheckboxChange}></input>
        </>
        
    )

}