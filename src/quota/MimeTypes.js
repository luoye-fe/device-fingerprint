/*
 MimeTypes
 */
const key = 'MimeTypes';

function isMimeTypes() {
    return !!(navigator.mimeTypes && navigator.mimeTypes.length);
}

function getMimeTypes() {
    return new Promise((resolve, reject) => {
        if (!isMimeTypes()) return resolve('');
        let result = [];
        Array.prototype.slice.call(navigator.mimeTypes).forEach(item => {
            result.push(item.type);
        })
        resolve(result.join(','));
    })
}

export default {
    key,
    isMimeTypes,
    getMimeTypes
};
