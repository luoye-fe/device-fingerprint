/*
 Browser
 */
import UAParser from 'ua-parser-js';

const key = 'Browser';

const parser = new UAParser();
const result = parser.getResult();

function getBrowser() {
    return Promise.resolve(result.browser.name);
}

function getBrowserVersion() {
    return Promise.resolve(result.browser.version);
}

function getBrowserMajorVersion() {
    return Promise.resolve(result.browser.major);
}

function getEngine() {
    return Promise.resolve(result.engine.name);
}

function getEngineVersion() {
    return Promise.resolve(result.engine.version);
}

function getOS() {
    return Promise.resolve(result.os.name);
}

function getOSVersion() {
    return Promise.resolve(result.os.version);
}

export default {
    key,
    getBrowser,
    getBrowserVersion,
    getBrowserMajorVersion,
    getEngine,
    getEngineVersion,
    getOS,
    getOSVersion
};
