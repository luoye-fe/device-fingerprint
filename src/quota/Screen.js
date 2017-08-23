/*
 Screen
 */
const key = 'Screen';

function getColorDepth() {
    return Promise.resolve(screen.colorDepth);
}

function getScreenResolution() {
    return Promise.resolve({
        w: screen.width,
        h: screen.height
    });
}

function getAvailableScreenResolution() {
    return Promise.resolve({
        w: screen.availWidth || 0,
        h: screen.availHeight || 0
    });
}

export default {
    key,
    getColorDepth,
    getScreenResolution,
    getAvailableScreenResolution
};
