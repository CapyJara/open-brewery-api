import './filter-component.js';
import makeUrlQuery from './make-url-query.js';
import { readFromQuery } from './query-components.js';
import loadCharacters from './make-brew-canvas.js';
import updatePaging from './paging.js';

window.addEventListener('hashchange', () => {
    const searchOptions = readFromQuery(window.location.hash);
    const apiUrl = makeUrlQuery(searchOptions);
    

    fetch(apiUrl)
        .then(response => response.json())
        .then(body => {
            loadCharacters(body);
            updatePaging(searchOptions);
        });
});
