export default function attachmentMatch(filteredData, type) {

    for (let [i, f] of filteredData.entries()) {
        if (f !== undefined) {
            if (f.type !== type) {
                delete filteredData[i];
            }
        }
    }

    return filteredData;
}