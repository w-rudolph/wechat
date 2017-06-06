function formatTime(date) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

function countDown(count = 30) {
    const startTime = Date.now();
    let timer = null;
    let fn = function (cb) {
        let nowTime = Date.now();
        let diff = count - Math.floor((nowTime - startTime) / 1000);
        if (typeof cb === 'function') cb(diff);
        if (diff === 0) {
            clearTimeout(timer);
        } else {
            setTimeout(() => fn(cb), 1000)
        }
    };
    return fn;
}

module.exports = {
    formatTime: formatTime,
    countDown: countDown
}
