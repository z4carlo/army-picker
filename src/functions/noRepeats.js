export default function noRepeats(data, commander, NCUs, units, haveArya) {

    var filteredData = data;

    // filteredData = filteredData.filter(unit => unit.name != commander[0].unitInfo.name);

    for (const n of NCUs) {
        if (n.unique === true) {
            filteredData = filteredData.filter(unit => unit.name !== n.name);
        }
    }

    if (haveArya === false) {
        console.log("No Arya");
        filteredData = filteredData.filter(unit => unit.name !== "Syrio Forel");
    }

    for (const u of units) {
        if (u.unique === true) {
        filteredData = filteredData.filter(unit => unit.name !== u.name);
        }
        if (u.attachment !== "None") {
            if (u.attachment.unique === true) {
                filteredData = filteredData.filter(unit => unit.name !== u.attachment.name);
        }
    }
    }

    return filteredData;
}