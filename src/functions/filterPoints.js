
export default function filterPoints(data, points) {

    const filteredData = data.filter(unit => unit.cost < (points + 1));
    return filteredData;
}