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
      </figure> <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Cart Items</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <table style="width:100%">
          <tr>
            <th>Item</th>
            <th>Name</th> 
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td><i class="fa-solid fa-circle-minus" onclick="decreaseToCart()"></i><i class="fa-solid fa-circle-plus" onclick="addToCart()"></i><span></span></td>
            <td>${price}</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td><i class="fa-solid fa-circle-minus" onclick="decreaseToCart()"></i><i class="fa-solid fa-circle-plus" onclick="addToCart()"></i><span></span></td>
            <td>94</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td><i class="fa-solid fa-circle-minus" onclick="decreaseToCart()"></i><i class="fa-solid fa-circle-plus" onclick="addToCart()"></i><span></span></td>
            <td>80</td>
          </tr>
        </table>
          </div>
          <hr/>
          <h5>Total: <span id="total"></span></h5>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
   `;
      });
    });
}

let cartCount = 0,
  Quantity = 2000;
function addToCart() {
  if (cartCount >= 0 && cartCount < 20) {
    cartCount++;
    document.getElementById("cart-count").innerHTML = `${cartCount}`;
    document.getElementById("total").innerHTML = `${Quantity * cartCount}`;
  }
}

function decreaseToCart() {
  if (cartCount > 0) {
    cartCount--;
    document.getElementById("cart-count").innerHTML = `${cartCount}`;
  }
}
