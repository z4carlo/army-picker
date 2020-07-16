import commanders from "../units/commanders"

export default function chaosOptions(data) {
    var allOptions = [];
    for (var i = 0; i < commanders.length; i++) {
        console.log(i);
        allOptions = allOptions.concat(data[i].items);
    }

    return allOptions;
}