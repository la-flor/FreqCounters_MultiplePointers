function freqCounter(arr) {
    const freqObj = {};
    for (let ltr of arr) {
        freqObj[ltr] = freqObj[ltr] + 1 || 1;
    }
    return freqObj;
}

function constructNote(msg, letters) {
    if (letters.length === 0) return false;
    const msgObj = freqCounter(msg.split(""));
    const ltrObj = freqCounter(letters.split(""));
    for (let ltr in msgObj) {
      if (msgObj[ltr] > ltrObj[ltr]) {
        return false;
      }
    }
    return true;
}

module.exports = { constructNote }