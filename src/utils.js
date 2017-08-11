export const mixin = function(source, target) {
    for (let i in source) {
        if (!target[i]) {
            target[i] = source[i];
        }
    }
    return target;
};
