import products from "./product";
const Cart = () => {
  //   let listCartHTML = document.querySelector(".listCart");
  let iconCart = document.querySelector(".icon-cart");
  let closeBtn = document.querySelector(".cartTab .close");
  let body = document.querySelector("body");
  //   let iconCartSpan = iconCart.querySelector("span");
  //   let closeCart = document.querySelector(".close");
  let cart = [];

  // open and close tab
  iconCart.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
  });
  closeBtn.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
  });

  const setProductInCart = (idProduct, quantity, position) => {
    if (quantity > 0) {
      if (position < 0) {
        cart.push({
          product_id: idProduct,
          quantity: quantity,
        });
      } else {
        cart[position].quantity = quantity;
      }
    } else {
      cart.splice(position, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    refreshCartHTML();
  };

  const refreshCartHTML = () => {
    let listHTML = document.querySelector(".listCart");
    let totalHTML = document.querySelector(".icon-cart span");
    let totalQuantity = 0;
    listHTML.innerHTML = null;
    cart.forEach((item) => {
      totalQuantity = totalQuantity + item.quantity;
      let position = products.findIndex((value) => value.id == item.product_id);
      let info = products[position];
      let newITem = document.createElement("div");
      newITem.classList.add("item");
      newITem.innerHTML = `
      <div class = "image">
      <img src="${info.image}" />
      </div>
      <div class="name">Name</div>
      <div class="totalPrice">$
      ${info.price * item.quantity}
      </div>
      <div class="quantity">
          <span class="minus" data-id="${info.id}">-</span>
          <span>${item.quantity}</span>
          <span class="plus" data-id="${info.id}">+</span>
      </div>
      `;
      listHTML.appendChild(newITem);
    });
    totalHTML.innerHTML = totalQuantity;
  };

  // const setProductInCart = (idProduct, value) => {
  //     let positionThisProductInCart = cart.findIndex(
  //       (value) => value.product_id == idProduct
  //     );
  //     if (value <= 0) {
  //       cart.splice(positionThisProductInCart, 1);
  //     } else if (positionThisProductInCart < 0) {
  //       cart.push({
  //         product_id: idProduct,
  //         quantity: 1,
  //       });
  //     } else {
  //       cart[positionThisProductInCart].quantity = value;
  //     }
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     addCartToHTML();
  // };

  //   const addCartToHTML = () => {
  //     listCartHTML.innerHTML = "";
  //     let totalQuantity = 0;
  //     if (cart.length > 0) {
  //       cart.forEach((item) => {
  //         totalQuantity = totalQuantity + item.quantity;
  //         let newItem = document.createElement("div");
  //         newItem.classList.add("item");
  //         newItem.dataset.id = item.product_id;

  //         let positionProduct = products.findIndex(
  //           (value) => value.id == item.product_id
  //         );
  //         let info = products[positionProduct];
  //         listCartHTML.appendChild(newItem);
  //         newItem.innerHTML = `
  //                 <div class="image">
  //                         <img src="${info.image}">
  //                     </div>
  //                     <div class="name">
  //                     ${info.name}
  //                     </div>
  //                     <div class="totalPrice">$${info.price * item.quantity}</div>
  //                     <div class="quantity">
  //                         <span class="minus" data-id="${info.id}"><</span>
  //                         <span>${item.quantity}</span>
  //                         <span class="plus" data-id="${info.id}">></span>
  //                     </div>
  //                 `;
  //       });
  //     }
  //     iconCartSpan.innerText = totalQuantity;
  //   };

  // event click
  document.addEventListener("click", (event) => {
    let buttonClick = event.target;
    let idProduct = buttonClick.dataset.id;
    let position = cart.findIndex((value) => value.product_id == idProduct);
    let quantity = position < 0 ? 0 : cart[position].quantity;
    if (
      buttonClick.classList.contains("addCart") ||
      buttonClick.classList.contains("plus")
    ) {
      quantity++;
      setProductInCart(idProduct, quantity, position);
    } else if (buttonClick.classList.contains("minus")) {
      quantity--;
      setProductInCart(idProduct, quantity, position);
    }
    //     switch (true) {
    //       case buttonClick.classList.contains("addCart"):
    //         quantity =
    //           position < 0
    //             ? 1
    //             : cart[position].quantity + 1;
    //         setProductInCart(idProduct, quantity);
    //         break;
    //       case buttonClick.classList.contains("minus"):
    //         quantity = cart[position].quantity - 1;
    //         setProductInCart(idProduct, quantity);
    //         break;
    //       case buttonClick.classList.contains("plus"):
    //         quantity = cart[position].quantity + 1;
    //         setProductInCart(idProduct, quantity);
    //         break;
    //       default:
    //         break;
    //     }
  });

  const initApp = () => {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      //       addCartToHTML();
    }
    refreshCartHTML();
  };
  initApp();
};
export default Cart;
