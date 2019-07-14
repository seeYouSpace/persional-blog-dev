const fs = require('fs');
const path = require('path');

let entry = {};
function makeEntry (entry) {
    if (!fs.existsSync(entry)) return {};
    let entrys = {};
    let filesList = fs.readdirSync(entry)

    for (let subPath of filesList) {
        let fullPath = path.join(entry, subPath);
        let stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            entrys = Object.assign(entrys, makeEntry(fullPath));
        } else {
            entrys[fullPath.split(`assets/`)[1].replace(/\.(js|css|sass)/, '')] = fullPath;
        }
    }

    return entrys;
}

// console.log(makeEntry(path.join(__dirname, '../assets')))



module.exports = {
    makeEntry,
}