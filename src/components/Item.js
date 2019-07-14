import React from 'react'
import './Item.css'

const Item = ({
  name,
  imageSrc,
  occasion,
  isFavourite
}) => {
  return (
    <div className="item">
      <h2>{occasion}</h2>
      <img src={imageSrc} alt={name}></img>
    </div>
  )
}

export default Item
