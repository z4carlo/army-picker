
export default function filterPoints(data, points) {

    var filteredData = data;
    for (let [i, f] of filteredData.entries()) {
        if (f !== undefined) {
            if (f.cost > points) {
                delete data[i];
            }
        }
    }
    return filteredData;
}