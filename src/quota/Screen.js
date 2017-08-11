/*
 Screen
 */
const key = 'Screen';

function getColorDepth() {
    return Promise.resolve(screen.colorDepth);
}

function getScreenResolution() {
    return Promise.resolve(screen.width + '*' + screen.height);
}

export default {
    key,
    getColorDepth,
    getScreenResolution
};
