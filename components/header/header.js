class Header {
  headerOpenShoping() {
    shopcardPage.render();
  }

  render(counte) {
    const html = `
    <header>
        <div class="header_logo">
            <h1>logo</h1>
        </div>
        <div class="header_cart" onclick="headerPage.headerOpenShoping();">
            <img src="../img/shopping-bag.svg" alt="">
            <span class="header_counter">${counte}</span>
        </div>
    </header>
    `;

    ROOT_HEADER.innerHTML = html;
  }
}
const headerPage = new Header();

const productsStore = localStorageU.getProducts();
headerPage.render(productsStore.length);