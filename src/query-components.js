export function writeSearchToQuery(existingQuery, searchoptions) {
    const searchParams = new URLSearchParams(existingQuery);

    searchParams.set('by_state', searchoptions.state);
    searchParams.set('by_city', searchoptions.city);
    searchParams.set('by_type', searchoptions.type);

    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams;
}

export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const existingSearchQuery = {
        state: searchParams.get('by_state'),
        city: searchParams.get('by_city'),
        type: searchParams.get('by_type')
    };
    return existingSearchQuery;
}