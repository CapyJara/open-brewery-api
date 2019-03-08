const test = QUnit.test;

QUnit.module('spaces to _');

function replaceSpaces(place) {
    const placeArray = place.split(' ');

    const numWords = placeArray.length;

    if(numWords === 1) {
        const snakeCasePlace = `${placeArray[0]}`;
        return snakeCasePlace;
    }
    if(numWords === 2) {
        const snakeCasePlace = `${placeArray[0]}_${placeArray[1]}`;
        return snakeCasePlace;
    }
    if(numWords === 3) {
        const snakeCasePlace = `${placeArray[0]}_${placeArray[1]}_${placeArray[2]}`;
        return snakeCasePlace;
    }
    
}

test('one words', assert => {
    // arrange
    const place = 'portland';
    // act
    const result = replaceSpaces(place);
    // assert
    assert.equal(result, 'portland');
});

test('two words', assert => {
    // arrange
    const place = 'new york';
    // act
    const result = replaceSpaces(place);
    // assert
    assert.equal(result, 'new_york');
});

test('three words', assert => {
    // arrange
    const place = 'new york city';
    // act
    const result = replaceSpaces(place);
    // assert
    assert.equal(result, 'new_york_city');
});