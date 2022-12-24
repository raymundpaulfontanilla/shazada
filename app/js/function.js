function getJSONData(urlData) {
  fetch(urlData)
    .then((response) => response.json())
    .then((json) => {
      let images = json.slice(0);
      images.map((image) => {
        document.getElementById("container").innerHTML += `
      <figure class="container">
        <img src=${image.url2}
          alt="sample94" />
        <figcaption>
          <h3 onclick="addToCart()">Add to cart</h3>
        </figcaption>
        <div class="footer">
        <span class="card-title">${image.name2}</span>
        <span class="card-text">₱${image.price2}</span>
        </div>
      </figure>
      <figure class="container">
        <img src=${image.url3}
          alt="sample92" />
        <figcaption>
          <h3 onclick="addToCart()">Add to cart</h3>
        </figcaption>
        <div class="footer">
        <span class="card-title">${image.name3}</span>
        <span class="card-text">₱${image.price3}</span>
        </div>
        </figure>
        <figure class="container">
        <img src=${image.url4}
          alt="sample92" />
        <figcaption>
          <h3 onclick="addToCart()">Add to cart</h3>
        </figcaption>
        <div class="footer">
        <span class="card-title">${image.name4}</span>
        <span class="card-text">₱${image.price4}</span>
        </div>
        </figure>
        <figure class="container">
        <img src=${image.url5}
          alt="sample92" />
        <figcaption>
          <h3 onclick="addToCart()">Add to cart</h3>
        </figcaption>
        <div class="footer">
        <span class="card-title">${image.name5}</span>
        <span class="card-text">₱${image.price5}</span>
        </div>
        </figure>`;
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
         <img src=${imageContain.mensUrl} class="image-container" width="500">
         <a href="/template/male-categories.html">
          <div class='male-content'>
            <h1 class='title'>${imageContain.title}</h1>
            <button class='subtitle'>${imageContain.subtitle}</button>
          </div>
          </a>
        </div>
        <div class="col-lg-6">
          <img src=${imageContain.womensUrl} class="image-container" width="460">
          <a href="/template/women-categories.html">
          <div class='women-content'>
            <h1 class='title'>${imageContain.title2}</h1>
            <button class="subtitle">${imageContain.subtitle}</button>
          </div>
          </a>
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
        ).innerHTML += `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${imageForBestSell.url} class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${imageForBestSell.name}</h5>
              <p>₱${imageForBestSell.price}</p>
              <p class="card-text pt-2"><small class="text-muted">Last updated 3 mins ago</small></p>
              <a href="/template/leather-loafers.html"><button type="button" class="btn btn-suede btn-warning float-end">Go to Shop</button></a>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${imageForBestSell.url2}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${imageForBestSell.name2}</h5>
        <p>₱${imageForBestSell.price2}</p>
        <p class="card-text pt-2"><small class="text-muted">Last updated 3 mins ago</small></p>
        <a href="/template/mules.html"><button type="button" class="btn btn-bow btn-warning float-end">Go to Shop</button></a>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${imageForBestSell.url3} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${imageForBestSell.name3}</h5>
      <p>₱${imageForBestSell.price3}</p>
      <p class="card-text pt-2"><small class="text-muted">Last updated 3 mins ago</small></p>
      <a href="/template/outdoor-boots.html"><button type="button" class="btn btn-la btn-warning float-end">Go to Shop</button></a>
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
