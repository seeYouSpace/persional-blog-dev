const tsConfigPaths = require('tsconfig-paths');
const tsConfig = require('../tsconfig.json');

let { baseUrl, paths } = tsConfig.compilerOptions;
tsConfigPaths.register({
    baseUrl,
    paths
});