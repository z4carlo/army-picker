export default function noRepeats(data, commander, NCUs, units) {

    var filteredData = data;

    // filteredData = filteredData.filter(unit => unit.name != commander[0].unitInfo.name);

    for (const n of NCUs) {
        if (n.unique == true) {
        filteredData = filteredData.filter(unit => unit.name != n.name);
        }
    }

    for (const u of units) {
        if (u.unique == true) {
        filteredData = filteredData.filter(unit => unit.name != u.name);
        }
        if (u.attachment != "None") {
            if (u.attachment.unique == true) {
                filteredData = filteredData.filter(unit => unit.name != u.attachment.name);
        }
    }
    }

    return filteredData;
}