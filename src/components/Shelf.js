import React from 'react'
import Item from './Item'
import Slider from "react-slick" 

const Shelf = ({
  name,
  items
}) => {

  const itemBoxes = items.map(item => 
    <Item 
      name={item.fileName} 
      imageSrc={`/itemImages/${item.fileName}`}
      isFavourite={item.isFavourite}
      occasion={item.occasion}
    />
  )
  return (
    <div className="shelf">
      <h2>{name}</h2>
        {itemBoxes}
      </Slider>
  )
}

export default Shelf
