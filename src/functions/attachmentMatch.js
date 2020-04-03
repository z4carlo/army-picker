export default function attachmentMatch(data, type) {

    const filteredData = data.filter(unit => unit.type === type);

    console.log("After Attachment Match", filteredData);

    return filteredData;
}