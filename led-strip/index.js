const ws281x = require('rpi-ws281x-native');

const ledCount = 144;
const pixelData = new Uint32Array(ledCount);

ws281x.init(ledCount);

function reset() {
  ws281x.reset();
}

function setColor(color) {
  for (var i = 0; i < ledCount; i++) {
    pixelData[i] = color;
  }
  ws281x.render(pixelData);
}

function strobe(interval) {
  setInterval(() => {
    setColor(pixelData[0] === 0 ? 0xFFFFFF : 0);
  }, interval)
}

module.exports = { reset, setColor, strobe };
