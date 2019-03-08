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


// writesearchtoquery taking existingquery and searchoption
    //new search params
        //set
            //type
            //state
            //city
    //return seach params



//writepagetoquery

//readfromquery
    // makes object