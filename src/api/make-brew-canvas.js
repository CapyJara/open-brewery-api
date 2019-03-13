import { auth, favoritesByUserRef } from '../firebase/firebase.js';

export function makeBreweryCanvas(brewery) {
    const html = `
    <div id="brewery">
        <a href="${brewery.website_url}">
            <h2>${brewery.name}</h2>    
        </a>
        <h4>${brewery.brewery_type}</h4>
        <div>
            <h3>${brewery.city}</h3>
            <h3>${brewery.state}</h3>
        </div>
        <img src="../../assets/fav-unselected.svg" id="favorite-icon">
    </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const breweryContainer = document.getElementById('brewery-container');

export default function loadCharacters(body) {
    while(breweryContainer.children.length > 0) {
        breweryContainer.lastElementChild.remove();
    }

    body.forEach(brewery => {
        const dom = makeBreweryCanvas(brewery);





        breweryContainer.appendChild(dom);
    });

}