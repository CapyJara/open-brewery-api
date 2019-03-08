export function writeSearchToQuery(existingQuery, searchOptions) {
    const searchParams = new URLSearchParams(existingQuery);

    searchParams.set('by_state', searchOptions.state);
    searchParams.set('by_city', searchOptions.city);
    searchParams.set('by_type', searchOptions.type);
    searchParams.set('page', 1);
    console.log('write param', searchParams.toString());

    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams;
}

export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery.slice(1));
    console.log('before get', existingQuery.slice(1));
    const existingSearchQuery = {
        state: searchParams.get('by_state'),
        city: searchParams.get('by_city'),
        type: searchParams.get('by_type')
    };
    console.log('after get', existingSearchQuery);
    return existingSearchQuery;
}