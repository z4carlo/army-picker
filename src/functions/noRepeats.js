export default function noRepeats(data, NCUs, units, haveArya, commander) {
    var filteredData = data;

    for (const n of NCUs) {
        if (n.unique === true) {
            for (let [i, f] of filteredData.entries()) {
                if (f !== undefined) {
                    if (f.name === n.name) {
                        delete filteredData[i];
                    }
                }
            }
        }
        if (n.Loyalty === "Renly Baratheon") {
            for (let [i, f] of filteredData.entries()) {
                if (f !== undefined) {
                    if (f.Loyalty === "Stannis Baratheon") {
                        delete filteredData[i];
                    }
                }
            }
        }
        if (n.Loyalty === "Stannis Baratheon") {
            for (let [i, f] of filteredData.entries()) {
                if (f !== undefined) {
                    if (f.Loyalty === "Renly Baratheon") {
                        delete filteredData[i];
                    }
                }
            }
        }
    }

    if (haveArya === false) {
        for (let [i, f] of filteredData.entries()) {
            if (f !== undefined) {
                if (f.name === "Syrio Forel") {
                    delete filteredData[i];
                }
            }
        }
    }

    for (const u of units) {
        if (u.unique === true) {
            for (let [i, f] of filteredData.entries()) {
                if (f !== undefined) {
                    if (f.name === u.name) {
                        delete filteredData[i];
                    }
                }
            }
        }
        if (u.name === "Kingsguard") {
            for (let [i, f] of filteredData.entries()) {
                if (f !== undefined) {
                    if (f.subName === "Kingsguard") {
                        delete filteredData[i];
                    }
                }
            }
        }
        if (u.Loyalty === "Renly Baratheon") {
            for (let [i, f] of filteredData.entries()) {
                if (f !== undefined) {
                    if (f.Loyalty === "Stannis Baratheon") {
                        delete filteredData[i];
                    }
                }
            }
        }
        if (u.Loyalty === "Stannis Baratheon") {
            for (let [i, f] of filteredData.entries()) {
                if (f !== undefined) {
                    if (f.Loyalty === "Renly Baratheon") {
                        delete filteredData[i];
                    }
                }
            }
        }
        if (u.attachment !== "None") {
            if (u.attachment.unique === true) {
                for (let [i, f] of filteredData.entries()) {
                    if (f !== undefined) {
                        if (f.name === u.attachment.name) {
                            delete filteredData[i];
                        }
                    }
                }
            }
            if (u.attachment.subName === "Kingsguard") {
                for (let [i, f] of filteredData.entries()) {
                    if (f !== undefined) {
                        if (f.name === "Kingsguard") {
                            delete filteredData[i];
                        }
                    }
                }
            }
            if (u.attachment.Loyalty === "Renly Baratheon") {
                for (let [i, f] of filteredData.entries()) {
                    if (f !== undefined) {
                        if (f.Loyalty === "Stannis Baratheon") {
                            delete filteredData[i];
                        }
                    }
                }
            }
            if (u.attachment.Loyalty === "Stannis Baratheon") {
                for (let [i, f] of filteredData.entries()) {
                    if (f !== undefined) {
                        if (f.Loyalty === "Renly Baratheon") {
                            delete filteredData[i];
                        }
                    }
                }
            }
            if (u.attachment.attachment2 !== "None") {
                if (u.attachment.attachment2.unique === true) {
                    for (let [i, f] of filteredData.entries()) {
                        if (f !== undefined) {
                            if (f.name === u.attachment.attachment2.name) {
                                delete filteredData[i];
                            }
                        }
                    }
                }
                if (u.attachment.attachment2.Loyalty === "Renly Baratheon") {
                    for (let [i, f] of filteredData.entries()) {
                        if (f !== undefined) {
                            if (f.Loyalty === "Stannis Baratheon") {
                                delete filteredData[i];
                            }
                        }
                    }
                }
                if (u.attachment.attachment2.Loyalty === "Stannis Baratheon") {
                    for (let [i, f] of filteredData.entries()) {
                        if (f !== undefined) {
                            if (f.Loyalty === "Renly Baratheon") {
                                delete filteredData[i];
                            }
                        }
                    }
                }
            }
        }
    }

    if (commander !== undefined && commander.name !== "Joffrey Baratheon") {
        console.log("here");
        for (let [i, f] of filteredData.entries()) {
            if (f !== undefined) {
                if (f.name === "Kingsguard") {
                    delete filteredData[i];
                }
            }
        }
    }

    return filteredData;
}