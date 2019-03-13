export default function makeUserTemplate(user) {
    const html = /*html*/ `     
    <div id="user">
        <img src="${user.userImage}" alt="avatar" id="user-image">
        <p id="name">${user.name}</p>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}