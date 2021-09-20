class Shopcard {
  handleClear() {
      ROOT_SHOPPING.innerHTML = '';
  }

  render() {
      const productsStore = localStorageU.getProducts();
      let htmlCatalog = '';
      let sumCatalog = 0;

      CATALOG.forEach(({ id, name, price, img }) => {
          if (productsStore.indexOf(id) !== -1) {
              htmlCatalog += `
              <div class="shopcard__item">
                <div class="shopcard__img">
                    <img src="${img}" alt="">
                </div>
                <div class="shopcard__info">
                    <p class="shopcard__name">${name}</p>
                    <p class="shopcard__price">${price.toLocaleString()}</p>
                </div>
              </div>
              `;
              sumCatalog += price;
          }
      });

      const html = `
      <div class="shopcard__inner">
        ${htmlCatalog}
      </div>
      `;
      ROOT_SHOPCARD.innerHTML = html;
  }
}

const shopcardPage = new Shopcard();
shopcardPage.render();