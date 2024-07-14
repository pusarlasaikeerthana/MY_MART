import React from 'react'
import { booksData } from '../data/books'

const Books = () => {

    const firstFiveImages = booksData.slice(0,5)

    return(
        <>
            <h2 className="proTitle">Computers</h2>
            
            <div class='proSection'>
                <ul>
                    {firstFiveImages.map((mobile) =>(
                        <div className="imgBox">
                        <li className = "proImage" key={mobile.id}>{mobile.company}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Books