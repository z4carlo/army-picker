export default function pickRandom(options) {

    const number = options.length;
    const id = (Math.floor(Math.random()*number));
    const unitInfo = options[id];

    return unitInfo;
}