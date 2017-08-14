/*
 Audio
 */
import sha256 from '../lib/sha256.js';

const key = 'Audio';

function isAudio() {
    return !!(window.AudioContext || window.webkitAudioContext);
}

function getAudioFP() {
    return new Promise((resolve, reject) => {
        if (!isAudio()) return resolve('');
        const audioCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100);
        const audioOscillator = audioCtx.createOscillator();
        const audioGain = audioCtx.createGain();

        // 动态压缩分析
        const audioCompressor = audioCtx.createDynamicsCompressor();
        audioCompressor.threshold && (audioCompressor.threshold.value = -50);
        audioCompressor.knee && (audioCompressor.knee.value = 40);
        audioCompressor.ratio && (audioCompressor.ratio.value = 12);
        audioCompressor.reduction && (audioCompressor.reduction.value = -20);
        audioCompressor.attack && (audioCompressor.attack.value = 0);
        audioCompressor.release && (audioCompressor.release.value = 0.25);

        // 设置某些参数
        audioGain.gain.value = 0; // 声音大小
        audioOscillator.type = 'triangle'; // 周期波形
        audioOscillator.connect(audioCompressor); // 进行动态压缩
        audioCompressor.connect(audioCtx.destination); // 输出

        audioCtx.oncomplete = function(evnt) {
            const shaHash = sha256.create();
            for (let i = 0; i < evnt.renderedBuffer.length; i++) {
                shaHash.update(evnt.renderedBuffer.getChannelData(0)[i].toString());
            }
            audioCompressor.disconnect();
            resolve(shaHash.hex());
        }

        audioOscillator.start(0);
        audioCtx.startRendering();
    });
}

export default {
    key,
    isAudio,
    getAudioFP
};
