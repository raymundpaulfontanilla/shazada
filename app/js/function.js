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
          <a href="/template/male-categories.html"><img src=${imageContain.mensUrl} width="500"></a>
          <div class='content'>
            <h1 class='title'>${imageContain.title}</h1>
            <span class='subtitle'>${imageContain.subtitle}</span>
          </div>
        </div>
        <div class="col-lg-6">
          <a href="/template/women-categories.html"><img src=${imageContain.womensUrl} width="460"></a>
          <div class='content'>
            <h1 class='title'>${imageContain.title2}</h1>
            <span class='subtitle'>${imageContain.subtitle}</span>
          </div>
        </div>
      </div>`;
      });
    });
}

function getJSONDataForBestSeller(urlData) {
  fetch(urlData)
    .then((response) => response.json())
    .then((json) => {
      let imageForBestSeller = json.slice(0);
      imageForBestSeller.map((imageForBestSell) => {
        document.getElementById(
          "best-seller-image"
        ).innerHTML += `<div class="col">
        <div class="card h-100">
          <a href="/template/leather-loafers.html"><img src=${imageForBestSell.url} class="card-img-top" alt="..."></a>
          <div class="card-body">
            <span class="card-title">${imageForBestSell.name}</span>
            <span class="card-title">${imageForBestSell.price}</span>
          </div>
          <div class="card-footer">
            <span class="text-muted">Last updated 3 mins ago</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <a href="/template/mules.html"><img src=${imageForBestSell.url2} class="card-img-top" alt="..."></a>
          <div class="card-body">
            <span class="card-title">${imageForBestSell.name2}</span>
            <span class="card-title">${imageForBestSell.price2}</span>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <a href="/template/outdoor-boots.html"><img src=${imageForBestSell.url3} class="card-img-top" alt="..."></a>
          <div class="card-body">
            <span class="card-title">${imageForBestSell.name3}</span>
            <span class="card-title">${imageForBestSell.price3}</span>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
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
