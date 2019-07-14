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
      <img src={imageSrc} alt={name}></img>
    </div>
  )
}

export default Item
