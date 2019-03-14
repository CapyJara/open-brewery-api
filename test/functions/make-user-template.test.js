const test = QUnit.test;

QUnit.module('user profile');

import makeUserTemplate from '../../src/make-user-template.js';

test('user html', assert => {
    // arrange
    const user = {
        displayName: 'Jared Myhrberg',
        photoURL: './assets//avatar-placeholder.png'
    };
    // act
    const result = makeUserTemplate(user);
    console.log(result);
    // assert
    assert.htmlEqual(result, /*html*/`
    <div id="user">
        <img src="./assets//avatar-placeholder.png" alt="avatar" id="user-image">
        <p id="name">Jared Myhrberg</p>
        <button>Logout</button>
    </div>
    `);
});