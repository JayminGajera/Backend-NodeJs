const wbm = require('wbm');

wbm.start().then(async () => {
    const phones = [919638819704];
    const message = 'Hello, Thank you joining Jaymin Gajera firm';
    await wbm.send(phones,message);
    await wbm.end();

}).catch((err) => console.log(err));