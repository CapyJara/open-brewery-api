import './filter-component.js';
import { readFromQuery } from "./query-components.js";
import makeUrlQuery from "./make-url-query.js";

window.addEventListener('hashchange', () => {
    
    console.log('hmmm');

    const searchOptions = readFromQuery(window.location.hash);
    const apiUrl = makeUrlQuery(searchOptions);
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(body => {
            console.log(body);
        });
});
