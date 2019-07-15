export const IS_DEV = process.env.NODE_ENV === 'development';

/**
 * 从缓存中移除module
 */
export function purgeCache(moduleName:string) {
    // 遍历缓存来找到通过指定模块名载入的文件
    searchCache(moduleName, function (mod) {
        delete require.cache[mod.id];
    });

    // 删除模块缓存的路径
    // @ts-ignore 
    Object.keys(module.constructor._pathCache).forEach(function(cacheKey) {
        // @ts-ignore
        if (cacheKey.indexOf(moduleName) > 0) {
            // @ts-ignore
            delete module.constructor._pathCache[cacheKey];
        }
    });
};

/** 
 * 遍历缓存来查找通过特定模块名缓存下的模块
 */
type cacheType = {
    children:cacheType[]
}
export function searchCache(moduleName:string, callback:any) {
    //  通过指定的名字resolve模块
    var mod = require.resolve(moduleName);

    // 检查该模块在缓存中是否被resolved并且被发现
    if (mod && require.cache[mod]) {
        let cache = require.cache[mod];
        // 递归的检查结果
        (function traverse(cache:cacheType) {
            // 检查该模块的子模块并遍历它们
            cache.children.forEach(function (child:cacheType) {
                traverse(child);
            });

            // 调用指定的callback方法，并将缓存的module当做参数传入
            callback(cache);
        }(cache));
    }
};