import React from 'react';
//import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import img1 from './pic/enspire_hoddie_01.png';
import img2 from './pic/enspire_hoodie_02.png';
import img3 from './pic/enspire_tshirt_01.png';
import img4 from './pic/enspire_tshirt_02.png';
import img5 from './pic/equi_cap.png';
import img6 from './pic/equi_sweatshirt.png';
import img7 from './pic/equi_tshirt.png';
import Colors from './components/colors';


const products = [
  {
    id: '1',
    title: 'ENSPIRE HOODIE',
    name: 'Product 1',
    description: ' Description',
    price: 50.00,
    colors:["red","black","crimson","teal"],
    imageUrl: img1,
  },
  {
    id: '2',
    title: 'ENSPIRE HOODIE',
    name: 'Product 2',
    description: ' Description',
    price: 60.00,
    colors:["red","black","crimson","teal"],
    imageUrl: img2,
  },
  {
    id: '3',
    title: 'ENSPIRE TSHIRT',
    name: 'Product 2',
    description: ' Description',
    price: 60.00,
    colors:["red","black","crimson","teal"],
    imageUrl: img3,
  },
  {
    id: '4',
    title: 'ENSPIRE TSHIRT',
    name: 'Product 2',
    description: ' Description',
    price: 60.00,
    colors:["red","black","crimson","teal"],
    imageUrl: img4,
  },
  {
    id: '5',
    title: 'EQUINOX CAP',
    name: 'Product 2',
    description: ' Description',
    price: 60.00,
    colors:["red","black","crimson","teal"],
    imageUrl: img5,
  },
  {
    id: '6',
    title: 'EQUINOX SWEATSHIRT',
    name: 'Product 2',
    description: ' Description',
    price: 60.00,
    colors:["red","black","crimson","teal"],
    imageUrl: img6,
  },
  {
    id: '7',
    title: 'EQUINOX TSHIRT',
    name: 'Product 2',
    description: ' Description',
    price: 60.00,
    colors:["red","black","crimson","teal"],
    imageUrl: img7,
  },
  
];

const ProductList = (id) => {
  return (
    <div className="app">
    {
      products.map(item =>(
        <div className="details" key={item._id}>
          <div className="big-img">
            
            <img src={item.imageUrl} alt=""/>
          </div>

          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <Colors colors={item.colors} />

            <p>{item.description}</p>
            <p>{item.content}</p>

            
            <button className="cart">Add to cart</button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
