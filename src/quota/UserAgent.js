/*
 UserAgent
 */
const key = 'UserAgent';

function getUserAgent() {
    return Promise.resolve(navigator.userAgent);
}

export default {
    key,
    getUserAgent
};
