export default function filterPoints(filteredData) {

    for (let [i, f] of filteredData.entries()) {
        if (f !== undefined) {
            if (f.unreleased === true) {
                delete filteredData[i];
            }
        }
    }
    return filteredData;
}