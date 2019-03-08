const test = QUnit.test;

QUnit.module('querying');

function writeToQuery(existingQuery, searchoptions) {
    const searchParams = new URLSearchParams(existingQuery);

    searchParams.set('by_state', searchoptions.state);
    searchParams.set('by_city', searchoptions.city);
    searchParams.set('by_type', searchoptions.type);

    return searchParams.toString();
}

test('write search to empty query', assert => {
    // arrange
    const existingQuery = '';
    const searchOptions = {
        state: 'colorado',
        city: 'denver',
        type: 'brewpub'
    };
    // act
    const results = writeToQuery(existingQuery, searchOptions);
    // assert
    assert.equal(results, 'by_state=colorado&by_city=denver&by_type=brewpub');
});

test('replace existing query', assert => {
    // arrange
    const existingQuery = 'by_state=&by_city=portland&by_type=micro';
    const searchOptions = {
        state: '',
        city: 'seattle',
        type: 'regional'
    };
    // act
    const results = writeToQuery(existingQuery, searchOptions);
    // assert
    assert.equal(results, 'by_state=&by_city=seattle&by_type=regional');
});

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams;
}

//writepagetoquery
test('write page to query', assert => {
    // arrange
    const page = 3;
    const existingQuery = 'by_state=&by_city=&by_type=';
    // act
    const results = writePageToQuery(existingQuery, page);
    // assert
    assert.equal(results, 'by_state=&by_city=&by_type=&page=3');
});

//readfromquery
    // makes object