class Pagination {

  render() {
    let htmlPagination = '';
    FILTERCATALOG.forEach(({ filterAll, filterfeedback, filterCheaper, filterMore }) => {
      htmlPagination += `
      <li class="pagination__item">${filterAll}</li>
      <li class="pagination__item">${filterfeedback}</li>
      <li class="pagination__item">${filterCheaper}</li>
      <li class="pagination__item" onclick="getRectArea()">${filterMore}</li>
      `;
    });

    const html = `
      <ul id="list" class="pagination__list">
        ${htmlPagination}
      </ul>
    `;

    ROOT_FILTER.innerHTML = html;
  }
}

const PaginationPage = new Pagination();
PaginationPage.render();