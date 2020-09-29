import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [items, setItems] = useState([])


    const addOne = () => setCounter(counter + 1)

    useEffect(() => {
     fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=coronavirus")
    .then(response => response.json())
    .then(data => setItems(data["response"]["results"]))
    }, [])

    return (
        <div>
            {counter}
            <button onClick = {addOne}>add</button>
            {items.map(item => <p>{item["webTitle"]}</p>)}
        </div>
    )
}
export default Counter