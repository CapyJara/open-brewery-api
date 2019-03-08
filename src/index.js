import './filter-component.js';
import makeUrlQuery from './make-url-query.js';
import { readFromQuery } from './query-components.js';

window.addEventListener('hashchange', () => {

    const searchOptions = readFromQuery(window.location.hash);
    const apiUrl = makeUrlQuery(searchOptions);
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(body => {
            console.log(body);
        });
});
