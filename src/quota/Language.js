/*
 Language
 */
const key = 'Language';

function isLanguage() {
    return !!navigator.language;
}

function getLanguage() {
    return Promise.resolve(navigator.language || '');
}

export default {
    key,
    isLanguage,
    getLanguage
};
