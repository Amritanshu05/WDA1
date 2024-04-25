"use client";
import React, { useEffect } from 'react';
import Products from './product';
import Cart from './cart';

import "./styles.css";



const First = () => {
  useEffect(() => {
    //load layout file
    const loadTemplate = () => {
      fetch("./template.html")
        .then((response) => response.text())
        .then((html) => {
          const app = document.getElementById("app");
          const temporaryContent = document.getElementById("temporaryContent");
          app.innerHTML = html;
          const contentTab = document.getElementById("contentTab");
          if (contentTab) {
            contentTab.innerHTML = temporaryContent.innerHTML;
            temporaryContent.innerHTML = null;
            Cart();
            initApp();
          } else {
            console.error("Element with ID 'contentTab' not found.");
          }
        });
    };
    loadTemplate();
  }, []);

  const initApp = () => {
    // load list product
    let listProductHTML = document.querySelector(".listProduct");
    if (listProductHTML) {
      listProductHTML.innerHTML = null;

      Products.forEach((Product) => {
        let newProduct = document.createElement("div");
        newProduct.classList.add("item");
        newProduct.innerHTML = `
          <a href="/detail.html?id=${Product.id}">
            <img src="${Product.image}">
          </a>
          <h2>${Product.name}</h2>
          <div class="price">$${Product.price}</div>
          <button class="addCart"
            data-id='${Product.id}'>
            Add To Cart
          </button>
        `;
        listProductHTML.appendChild(newProduct);
      });
    } else {
      console.error("Element with class 'listProduct' not found.");
    }
  };

  return (
    <div>
      <div id="app"></div>
      <div id="temporaryContent">
        <div className="listProduct">Content file index</div>
      </div>
    </div>
  )
}

export default First;
