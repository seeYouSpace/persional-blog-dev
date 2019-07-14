const fs = require('fs');
const path = require('path');

const libJsPath = path.join(__dirname, '../assets/js/lib');
const distPath = path.join(__dirname, '../dist');
const assetPathJsonPath = path.join(__dirname, '../assets/dist-path.json');

let assets2Path = {};

function generateAssetsPath (assetsPath) {
    let subPaths = fs.readdirSync(assetsPath, {withFileTypes: true});

    for (let subPath of subPaths) {
        let fullPath = path.join(assetsPath, subPath);
        let state = fs.statSync(fullPath);

        if (state.isDirectory()) {
            generateAssetsPath(fullPath);
        } else {
            let nameMatchs = /[^\/\.]+(?=\.+)/g.exec(fullPath);
            let pathMatchs = new RegExp(`(?<=${process.cwd()}).*`).exec(fullPath);
            let dotMatchs = /(?<=.*\.)[^.]+$/.exec(fullPath);
            assets2Path[`${dotMatchs[0]}_${nameMatchs[0]}`] = pathMatchs[0]
        }
    }
}

generateAssetsPath(libJsPath);
generateAssetsPath(distPath);

fs.unlinkSync(assetPathJsonPath);

fs.writeFile(assetPathJsonPath, 
    JSON.stringify(assets2Path, null, '\t'), 
    { flag: 'w+' }, 
    (err, res) => {
        if (err) throw new Error('generate asset-path.json fail!')
        console.log('generate asset-path.json success!')
    }
)


