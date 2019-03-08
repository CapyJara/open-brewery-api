export default function makeBreweryCanvas(brewery) {
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
    </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}