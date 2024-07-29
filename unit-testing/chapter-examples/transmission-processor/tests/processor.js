function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
        return -1;
    }

    let parts = transmission.split("::");
    let rawData = parts[1];

    if (rawData[0] !== "<" || rawData[rawData.length - 1] !== ">") {
        rawData = -1;
    } else {
        rawData = rawData.slice(1, -1);
    }

    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;