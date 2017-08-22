import Audio from './quota/Audio.js';
import Browser from './quota/Browser.js';
import Canvas from './quota/Canvas.js';
import Device from './quota/Device.js';
import Fonts from './quota/Fonts.js';
import Language from './quota/Language.js';
import MimeTypes from './quota/MimeTypes.js';
import Plugins from './quota/Plugins.js';
import Screen from './quota/Screen.js';
import TimeZone from './quota/TimeZone.js';
import UserAgent from './quota/UserAgent.js';

import { mixin } from './utils.js';

const quatosMap = [
    Audio,
    Browser,
    Canvas,
    Device,
    Fonts,
    Language,
    MimeTypes,
    Plugins,
    Screen,
    TimeZone,
    UserAgent
];

// mixin all func and delete useless key
let allFuncResult = {};
quatosMap.forEach(item => {
    mixin(item, allFuncResult);
})
delete allFuncResult.key;

export default mixin({
    version: '__VERSION__'
}, allFuncResult)
