import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniture = () => {
  const firstFiveImages = furnitureData.slice(0,5)

  return(
      <>
          <h2 className="proTitle">Furniture</h2>
          
          <div class='proSection'>
              <ul>
                  {firstFiveImages.map((item) =>(
                      <div className="imgBox">
                        <img src={item.image} alt=""/>
                      <li className = "proImage" key={item.id}>{item.company}</li>
                      </div>
                  ))}
              </ul>
          </div>
      </>
  )
}

export default Furniture;