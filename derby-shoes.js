fetch("derby-shoes.json")
  .then((response) => response.json())
  .then((json) => {
    let images = json.slice(0);
    images.map((image) => {
      document.getElementById(
        "imageSection"
      ).innerHTML += `<div class="col-md-3 mt-2">
          <div class="card mx-auto">
            <img src="${image.url}" class="card-img-top img-thumbnail"/>
            <div class="collection-footer">
            <span class="card-title text-center">${image.name}</span>
            <span class="card-title text-center">${image.price}PHP</span>
            </div>
            <div class="card-body text-center">
              <button onclick="addToCart()">Add to Cart </button>
            </div>
          </div>
        </div>`;
    });
  });

let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerHTML = `${cartCount}`;
}
