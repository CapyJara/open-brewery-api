import { auth } from './firebase/firebase.js';

function makeUserTemplate(user) {
    const html = /*html*/ `     
    <div id="user">
        <img src="${user.photoURL}" alt="avatar" id="user-image">
        <p id="name">${user.displayName}</p>
        <button>Logout</button>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader() {

    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = makeUserTemplate(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
            });
            const dom = makeUserTemplate(user);
            headerContainer.appendChild(dom);
        }
        else {
            // window.location = './auth.html';
        }

    });


}