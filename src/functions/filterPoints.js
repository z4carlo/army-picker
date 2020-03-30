
export default function filterPoints(data, points) {

    console.log("DATA", data);

    const filteredData = data.filter(unit => unit.cost < (points + 1));

    return filteredData;
}