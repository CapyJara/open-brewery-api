export default function replaceSpaces(place) {
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