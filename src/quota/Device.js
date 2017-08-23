/*
 Device
 */
const key = 'Device';

function getDevices() {
    return new Promise((resolve, reject) => {
        if (!navigator.mediaDevices) return resolve([]);
        navigator
            .mediaDevices
            .enumerateDevices()
            .then(devices => {
                const reulst = [];
                const current = [];
                devices.forEach(item => {
                    if (current.indexOf(item.deviceId) === -1 || item.deviceId !== 'default') {
                        current.push(item.deviceId);
                        reulst.push({
                            deviceId: item.deviceId,
                            kind: item.kind
                        });
                    }
                });
                resolve(reulst);
            })
    })
}

export default {
    key,
    getDevices
};
