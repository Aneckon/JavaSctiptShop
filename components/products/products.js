class Products {
  constructor() {
    this.classNameActive = 'active';
    this.lableAdd = 'Добавити в корзину';
    this.lableRemove = 'Удалити з корзини';
  }

  addPructsCard(element, id) {
    const { pushProducts, products } = localStorageU.putProducts(id);

    if (pushProducts) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.lableRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.lableAdd;
    }

    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageU.getProducts();
    let htmlCatalog = '';
    CATALOG.forEach(({ id, name, price, img, feetback }) => {
      let activeClass = '';
      let activeText = '';

      if (productsStore.indexOf(id) === -1) {
        activeText = this.lableAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.lableRemove;
      }

      htmlCatalog += `
      <li class="products__item" >
            <img class="products__img" src="${img}" alt="">
            <p class="products__title">${name}</p>
            <p class="products__price">${price.toLocaleString()}<span>грн.</span></p>
            <p class="products__feetback"><span>Відгуки:</span> ${feetback}</p>
            <button class="products__button${activeClass}" onclick="productsPage.addPructsCard(this, '${id}');">
              ${activeText}
            </button>
      </li>
      `;
    });

    const html = `
      <ul id="demo" class="products__inner">
        ${htmlCatalog} 
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}
const productsPage = new Products();
productsPage.render();

