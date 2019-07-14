import React from 'react';
import Header from './components/Header'
import Shelf from './components/Shelf'
import './App.css';

const App = () => {
  const tops = [
    {
        "fileName": "cropped-top.jpg",
        "occasion": "casual",
        "favourite": true
    },
    {
        "fileName": "floral-top.jpg",
        "occasion": "casual",
        "favourite": false
    },
    {
        "fileName": "green.jpg",
        "occasion": "work",
        "favourite": false
    },
    {
        "fileName": "hot-pink.jpg",
        "occasion": "work",
        "favourite": true
    },
    {
        "fileName": "red-top.jpg",
        "occasion": "casual",
        "favourite": true
    },
    {
        "fileName": "yellow-shoulder.jpg",
        "occasion": "casual",
        "favourite": true
    },
    {
        "fileName": "yellow-top.jpg",
        "occasion": "casual",
        "favourite": false
    }
  ]
  const bottoms = [
    {
        "fileName": "baggy-jeans.jpg",
        "occasion": "casual",
        "isFavourite": true
    },
    {
        "fileName": "checker-joggers.jpg",
        "occasion": "work",
        "isFavourite": true
    },
    {
        "fileName": "cropped-pants.jpg",
        "occasion": "work",
        "isFavourite": false
    },
    {
        "fileName": "dark-jeans.jpg",
        "occasion": "work",
        "isFavourite": true
    },
    {
        "fileName": "denium-skirt.jpg",
        "occasion": "casual",
        "isFavourite": true
    },
    {
        "fileName": "floral-skirt.jpg",
        "occasion": "casual",
        "isFavourite": false
    },
    {
        "fileName": "fun-pants.jpg",
        "occasion": "work",
        "isFavourite": true
    },
    {
        "fileName": "light-jeans.jpg",
        "occasion": "casual",
        "isFavourite": false
    },
    {
        "fileName": "mini-skirt.jpg",
        "occasion": "casual",
        "isFavourite": true
    },
    {
        "fileName": "pattern-pants.jpg",
        "occasion": "casual",
        "isFavourite": false
    },
    {
        "fileName": "tan-pants.jpg",
        "occasion": "work",
        "isFavourite": false
    }
]
  return (
    <div className="App">
      <Header />
      <Shelf name="Tops" items={tops} />
      <Shelf name="Bottoms" items={bottoms} />
    </div>
  );
}

export default App;
