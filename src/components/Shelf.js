import React from 'react'
import Item from './Item'
import Slider from 'react-slick'
import './Shelf.css'

const Shelf = ({
  name,
  items
}) => {
  const sliderSettings = {
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
      <h2 className="shelf-name">{name}</h2>
      <Slider className="shelf-slider" {...sliderSettings}>
        {itemBoxes}
      </Slider>
    </div>
  )
}

export default Shelf
