//testing csv build for inclusion in data-portal
const fs = require('fs')

let rawdata = fs.readFileSync('./json/manifest.json')

let data = JSON.parse(rawdata)

function ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

const csv = ConvertToCSV(data)

fs.writeFileSync('./output/output.csv', csv)