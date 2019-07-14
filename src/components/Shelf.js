import React from 'react'
import Item from './Item'
import Slider from "react-slick" 

const Shelf = ({
  name,
  items
}) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true
  }

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
      <Slider {...sliderSettings}>
        {itemBoxes}
      </Slider>
    </div>
  )
}

export default Shelf
