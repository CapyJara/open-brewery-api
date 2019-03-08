import { writePageToQuery } from "./query-components.js";

const currentPage = document.getElementById('current-page');
// const totalPages = document.getElementById('total-pages');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

let currentPageNumber = 1;

export default function updatePaging(searchOptions) {
    const existingQuery = window.location.hash;
    console.log('update happened');
    console.log('search options', searchOptions);

    currentPageNumber = searchOptions.page;
    currentPage.textContent = currentPageNumber;
    // totalPages.textContent = searchOptions.totalPages;
    // nextButton.disabled = searchOptions.page === searchOptions.totalPages;
    previousButton.disabled = searchOptions.page === 1;

    writePageToQuery(existingQuery, currentPageNumber);
}

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
});

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});



