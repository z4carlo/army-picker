export default function noRepeats(data, commander, NCUs, units) {

    var filteredData = data;

    console.log("Before Filter", filteredData);
    console.log(commander);

    // filteredData = filteredData.filter(unit => unit.name != commander[0].unitInfo.name);

    for (const n of NCUs) {
        if (n.unique == true) {
        filteredData = filteredData.filter(unit => unit.name != n.name);
        console.log("After Filter", filteredData);
        }
    }

    for (const u of units) {
        console.log(u);
        if (u.unique == true) {
        filteredData = filteredData.filter(unit => unit.name != u.name);
        }
        if (u.attachment != "None") {
            if (u.attachment.unique == true) {
                filteredData = filteredData.filter(unit => unit.name != u.attachment.name);
        }
    }
        console.log("After Filter", filteredData);
    }

    return filteredData;
}