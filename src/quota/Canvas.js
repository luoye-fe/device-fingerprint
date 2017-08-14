/*
 Canvas
 */
import sha256 from '../lib/sha256.js';

const key = 'Canvas';

function isCanvas() {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

function getCanvasFP() {
    return new Promise((resolve, reject) => {
        if (!isCanvas()) return resolve('');
        const canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');

        // width and height
        const scale = 2;
        const stylewidth = 220;
        const styleheight = 220;
        const center = [stylewidth / 2 * scale, styleheight / 2 * scale];
        canvas.style.width = stylewidth + 'px';
        canvas.style.height = styleheight + 'px';
        canvas.width = stylewidth * scale;
        canvas.height = styleheight * scale;

        // first
        context.beginPath();
        context.moveTo(center[0], center[1]);
        context.arc(center[0], center[1], stylewidth, 0, 2 * Math.PI, true);
        context.closePath();
        context.fillStyle = '#FFC6A4';
        context.fill();

        // second
        context.beginPath();
        context.moveTo(center[0], center[1]);
        context.arc(center[0], center[1], stylewidth - 16, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = '#fff';
        context.fill();

        // third
        context.beginPath();
        context.moveTo(center[0], center[1]);
        context.arc(center[0], center[1], stylewidth - 32, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = '#FB8FC0';
        context.fill();

        // fourth
        context.textBaseline = 'top';
        context.font = '36px "Consolas"';
        context.fillStyle = '#fff';
        context.fillText('For Device Fingerprint.', 0, 184);

        resolve(sha256(canvas.toDataURL()));
    })
}

export default {
    key,
    isCanvas,
    getCanvasFP
};
