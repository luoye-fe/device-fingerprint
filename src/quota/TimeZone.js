/*
 TimeZone
 */
const key = 'TimeZone';

function getTimeZone() {
    return Promise.resolve((new Date()).toString().match(/\(([\s\S]+)\)/)[1]);
}

export default {
    key,
    getTimeZone
};
