let arr = ['clean', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'];
let threshold = 0.5;

const checkAir = function (samples, threshold) {
  let cntDirty = 0;
  let airPollution = 0;

  for(let i = 0; i < samples.length; i++) {
    if(samples[i] === "dirty") {
        cntDirty++;}
  }
  airPollution = (cntDirty/samples.length).toPrecision(2);
  return airPollution < threshold ? "Clean" : "Polluted";
}
console.log(checkAir(arr, threshold))