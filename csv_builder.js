//testing csv build for inclusion in data-portal
const fs = require('fs')

let rawdata = fs.readFileSync('./json/manifest.json')

let data = JSON.parse(rawdata)

function ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var headers = Object.keys(array[0])
    var header_line = '';

    for (var i = 0; i< headers.length; i++){
        if(header_line != '') header_line += ","
        header_line += headers[i]
    }
    str += header_line + '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (array[i][index] == '' && Object.keys(array[i]).indexOf(index) == 0) line += ','
            if (line != '' && line != ',') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

const csv = ConvertToCSV(data)
// console.log(csv)

fs.writeFileSync('./output/output.csv', csv)