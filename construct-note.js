function freqCounter(arr) {
    const freqObj = {};
    for (let ltr of arr) {
        freqObj[ltr] = freqObj[ltr] + 1 || 1;
    }
    return freqObj;
}

function constructNote(msg, letters) {
    if (letters.length === 0) return false;
    const msgFreq = freqCounter(msg.split(""));
    const ltrFreq = freqCounter(letters.split(""));
    for (let ltr in msgFreq) {
      if (msgFreq[ltr] > ltrFreq[ltr]) {
        return false;
      }
    }
    return true;
}

module.exports = { constructNote }