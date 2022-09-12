let animation;
let interval;
let speed = 250;

window.onload = loadWindow;

function loadWindow() {
  document.getElementById("stop").disabled = true;
  document.getElementById("start").onclick = start;
  document.getElementById("stop").onclick = stop;
  document.getElementById("animation").onchange = selectAnimation;
  document.getElementById("fontsize").onchange = resize;
  document.getElementById("turbo").onclick = turbo;
//   let radio = document.getElementById("turbo");
//   let custom = radio.value;

//   radio.onclick = (function (current) {
//     return function () {
//       if (interval) {
//         clearInterval(interval);
//       }
//       if (document.getElementById("start").disabled) {
//         interval = setInterval(function () {
//           updater(animation);
//         }, current);
//       }
//     };
//   })(current);
}

function start() {
  document.getElementById("stop").disabled = false;
  document.getElementById("start").disabled = true;
  document.getElementById("animation").disabled = true;

  var textarea = document.getElementById("text-area");
  let frames = textarea.value.split("=====\n");
  animation = frames;
  interval = setInterval(function () {
    updater(animation);
  }, speed);
}

function updater(animation) {
  let textarea = document.getElementById("text-area");
  let current = animation.shift();
  textarea.value = current;
  animation.push(current);
  current = animation;
}

function turbo() {
  console.log("turbo started");
  let turboSpeed = 50;
  var textarea = document.getElementById("text-area");
  let frames = textarea.value.split("=====\n");
  animation = frames;
  interval = setInterval(function () {
    updater(animation);
  }, turboSpeed);
}

function stop() {
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
}

function resize() {
  var selector = document.getElementById("fontsize");
  var fontSize = selector.options[selector.selectedIndex].value;

  console.log(fontSize);
  document.getElementById("text-area").style.fontSize = fontSize + "pt";
}

function selectAnimation() {
  let y = document.getElementById("animation").value;
  let textarea = document.getElementById("text-area");
  textarea.value = ANIMATIONS[y];
}
