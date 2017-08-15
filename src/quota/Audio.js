/*
 Audio
 */
import UAParser from 'ua-parser-js';
import sha256 from '../lib/sha256.js';

const parser = new UAParser();
const result = parser.getResult();

let audioFP = '';
let fakeClick = false;

// hack iOS 不能自动播放
if (result.os.name === 'iOS') {
    // iOS 下，监听事件不用考虑兼容了
    var eventFunction = function () {
        fakeClick = true;
        getAudioFP()
            .then(fp => {
                audioFP = fp;
            });
        // remove event
        window.removeEventListener('touchstart', eventFunction, false);
    };
    window.addEventListener('touchstart', eventFunction, false);
}

const key = 'Audio';

function isAudio() {
    return !!(window.AudioContext || window.webkitAudioContext);
}

function getAudioFP() {
    return new Promise((resolve, reject) => {
        if (!isAudio()) return resolve('');

        // iOS 非交互事件 返回空
        if (result.os.name === 'iOS' && !fakeClick) return resolve('');
        // iOS 交互事件 返回获取的值
        if (result.os.name === 'iOS' && fakeClick && audioFP !== '') return resolve(audioFP);

        const audioCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100);

        const audioOscillator = audioCtx.createOscillator();
        audioOscillator.type = 'triangle'; // 周期波形
        audioOscillator.frequency.value = 1e4;

        // 动态压缩分析
        const audioCompressor = audioCtx.createDynamicsCompressor();
        audioCompressor.threshold && (audioCompressor.threshold.value = -50);
        audioCompressor.knee && (audioCompressor.knee.value = 40);
        audioCompressor.ratio && (audioCompressor.ratio.value = 12);
        audioCompressor.reduction && (audioCompressor.reduction.value = -20);
        audioCompressor.attack && (audioCompressor.attack.value = 0);
        audioCompressor.release && (audioCompressor.release.value = 0.25);

        // 连接节点
        audioOscillator.connect(audioCompressor); // 进行动态压缩
        audioCompressor.connect(audioCtx.destination); // 输出

        audioOscillator.start(0);
        audioCtx.startRendering();

        // ios 音频无法自动播放，不会触发 complete
        audioCtx.oncomplete = function(event) {
            const shaHash = sha256.create();
            for (let i = 0; i < event.renderedBuffer.length; i++) {
                shaHash.update(event.renderedBuffer.getChannelData(0)[i].toString());
            }
            audioCompressor.disconnect();
            resolve(shaHash.hex());
        }
    });
}

export default {
    key,
    isAudio,
    getAudioFP
};
