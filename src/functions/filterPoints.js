
export default function filterPoints(data, points) {

    console.log("Points Filter", data, points);

    const filteredData = data.filter(unit => unit.cost < (points + 1));

    console.log(filteredData);

    return filteredData;
}