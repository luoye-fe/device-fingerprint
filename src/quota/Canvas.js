/*
 Canvas
 */
import sha256 from '../lib/sha256.js';

const key = 'Canvas';

function isCanvas() {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

let isPointInPathVal = false;

function getCanvasFP() {
    return new Promise((resolve, reject) => {
        if (!isCanvas()) return resolve('');
        const canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');

        canvas.width = 2000;
        canvas.height = 200;
        canvas.style.display = 'inline';

        context.rect(0, 0, 10, 10);
        context.rect(2, 2, 6, 6);

        isPointInPathVal = context.isPointInPath(5, 5, 'evenodd');

        context.textBaseline = 'alphabetic';
        context.fillStyle = '#f60';
        context.fillRect(125, 1, 62, 20);
        context.fillStyle = '#069';
        context.font = '11pt no-real-font-123';
        context.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15);
        context.fillStyle = 'rgba(102, 204, 0, 0.2)';
        context.font = '18pt Arial';
        context.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45);

        context.globalCompositeOperation = 'multiply';
        context.fillStyle = 'rgb(255,0,255)';
        context.beginPath();
        context.arc(50, 50, 50, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
        context.fillStyle = 'rgb(0,255,255)';
        context.beginPath();
        context.arc(100, 50, 50, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
        context.fillStyle = 'rgb(255,255,0)';
        context.beginPath();
        context.arc(75, 100, 50, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
        context.fillStyle = 'rgb(255,0,255)';

        context.arc(75, 75, 75, 0, Math.PI * 2, true);
        context.arc(75, 75, 25, 0, Math.PI * 2, true);
        context.fill('evenodd');

        resolve(sha256(canvas.toDataURL().replace('data:image/png;base64,', '')));
    });
}

function isPointInPath() {
    return new Promise((resolve, reject) => {
        getCanvasFP()
            .then(() => {
                return resolve(isPointInPathVal);
            });
    });
}

export default {
    key,
    isCanvas,
    isPointInPath,
    getCanvasFP
};
