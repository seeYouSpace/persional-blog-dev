let distPathJsonPath = require.resolve('../../assets/dist-path.json');
import { IS_DEV, purgeCache } from './env';

export function generateAssets (ejsData, head:any[], bottom:any[]=[]) {
    
    let assets = {
        head: [],
        bottom: []
    };

    let distPathJson = require(distPathJsonPath);
    if (IS_DEV) purgeCache(distPathJsonPath);

    for (let asset of head) {
        if (!distPathJson[asset]) continue;
        if (/js_.*/.test(asset)) {
           assets.head.push(`<script type="text/javascript" src="${distPathJson[asset]}"></script>`);
        } else {
           assets.head.push(`<link rel="stylesheet" href="${distPathJson[asset]}">`);
        }
    }

    for (let asset of bottom) {
        if (!distPathJson[asset]) continue;
        if (/js_.*/.test(asset)) {
           assets.bottom.push(`<script type="text/javascript" src="${distPathJson[asset]}"></script>`);
        } else {
           assets.bottom.push(`<link rel="stylesheet" href="${distPathJson[asset]}">`);
        }
    }

    ejsData.assets = assets;
    return ejsData;
}