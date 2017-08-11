/*
 Plugin
 */
const key = 'Plugin';

function getPlugins() {
    return new Promise((resolve, reject) => {
        let result = [];
        Array.prototype.slice.call(navigator.plugins).forEach(item => {
            result.push(item.name);
        })
        resolve(result.join(','));
    })
}

export default {
    key,
    getPlugins
};
