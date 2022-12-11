function getJSONData(urlData) {
  fetch(urlData)
    .then((response) => response.json())
    .then((json) => {
      let images = json.slice(0);
      images.map((image) => {
        document.getElementById(
          "imageSection"
        ).innerHTML += `<div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100">
          <img src=${image.url} class="card-img-top" alt="...">
          <div class="card-body">
            <span class="card-title">${image.name}</span>
            <span class="card-text">${image.price}</span>
          </div>
          <div class="card-footer">
          <a class="btn btn-primary" onclick="addToCart()">Add to cart</a>
          </div>
        </div>
      </div>
    </div>`;
      });
    });
}

let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerHTML = `${cartCount}`;
}
