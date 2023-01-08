function getJSONDataForContainer(urlData) {
  fetch(urlData)
    .then((response) => response.json())
    .then((json) => {
      let imageContainer = json.slice(0);
      imageContainer.map((imageContain) => {
        let { mensUrl, title, subtitle, womensUrl, title2 } = imageContain;
        document.getElementById(
          "men-women-container"
        ).innerHTML += `<div class="row">
        <div class="col-lg-6">
         <img src=${mensUrl} class="image-container" width="500">
         <a href="/template/men-categories.html">
          <div class='male-content'>
            <h1 class='title'>${title}</h1>
            <button class='subtitle rounded-pill'>${subtitle}</button>
          </div>
          </a>
        </div>
        <div class="col-lg-6">
          <img src=${womensUrl} class="image-container" width="460">
          <a href="/template/women-categories.html">
          <div class='women-content'>
            <h1 class='title'>${title2}</h1>
            <button class="subtitle rounded-pill">${subtitle}</button>
          </div>
          </a>
        </div>
      </div>`;
      });
    });
}
function getJSONData(urlData) {
  fetch(urlData)
    .then((response) => response.json())
    .then((json) => {
      let images = json.slice(0);
      images.map((image) => {
        let { url, name, price } = image;
        document.getElementById("container").innerHTML += `
      <figure class="container">
        <img src=${url}
          alt="sample94" />
        <figcaption>
          <h3 onclick="addToCart()">Add to cart</h3>
        </figcaption>
        <div class="footer">
        <span class="card-title">${name}</span>
        <span class="card-text" style="color:orange;">₱${price}</span>
        </div>
      </figure> 
   `;
      });
    });
}

let cartCount = 0;
function addToCart() {
  if (cartCount >= 0 && cartCount < 20) {
    cartCount++;
    document.getElementById("cart-count").innerHTML = `${cartCount}`;
  }
}

function decreaseToCart() {
  if (cartCount > 0) {
    cartCount--;
    document.getElementById("cart-count").innerHTML = `${cartCount}`;
  }
}

let cart = [];

function displayCart(a) {
  let j = 0;
  if (cart.length == 0) {
    document.getElementById("exampleModal").innerHTML = "Your cart is empty";
  }
}

let shop = document.getElementById("shop");

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("data")) || [];

/**
 * ! Generates the shop with product cards composed of
 * ! images, title, price, buttons, description
 */

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, img, price } = x;
      let search = basket.find((y) => y.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
      <img width="220" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <div class="price-quantity">
          <h2>₱${price} </h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
  </div>
    `;
    })
    .join(""));
};

generateShop();

/**
 * ! used to increase the selected product item quantity by 1
 */

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! used to decrease the selected product item quantity by 1
 */

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! To update the digits of picked items on each item card
 */

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
