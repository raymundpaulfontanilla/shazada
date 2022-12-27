function getJSONDataForContainer(urlData) {
  fetch(urlData)
    .then((response) => response.json())
    .then((json) => {
      let imageContainer = json.slice(0);
      imageContainer.map((imageContain) => {
        document.getElementById(
          "men-women-container"
        ).innerHTML += `<div class="row">
        <div class="col-lg-6">
         <img src=${imageContain.mensUrl} class="image-container" width="500">
         <a href="/template/men-categories.html">
          <div class='male-content'>
            <h1 class='title'>${imageContain.title}</h1>
            <button class='subtitle rounded-pill'>${imageContain.subtitle}</button>
          </div>
          </a>
        </div>
        <div class="col-lg-6">
          <img src=${imageContain.womensUrl} class="image-container" width="460">
          <a href="/template/women-categories.html">
          <div class='women-content'>
            <h1 class='title'>${imageContain.title2}</h1>
            <button class="subtitle rounded-pill">${imageContain.subtitle}</button>
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
        document.getElementById("container").innerHTML += `
      <figure class="container">
        <img src=${image.url}
          alt="sample94" />
        <figcaption>
          <h3 onclick="addToCart()">Add to cart</h3>
        </figcaption>
        <div class="footer">
        <span class="card-title">${image.name}</span>
        <span class="card-text" style="color:orange;">₱${image.price}</span>
        </div>
      </figure>`;
      });
    });
}
let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerHTML = `${cartCount}`;
}
