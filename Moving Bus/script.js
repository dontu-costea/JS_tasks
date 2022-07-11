const bus = document.getElementById("bus");
let busMoveX = 0;
let busMoveY = 0;
let changesList = [];
let lastChange = {};

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 39) {
    addLastChange();
    busMoveX += 50;
    bus.style.left = busMoveX + "px";
  } else if (e.keyCode == 37) {
    addLastChange();
    busMoveX -= 50;
    bus.style.left = busMoveX + "px";
  } else if (e.keyCode == 38) {
    addLastChange();
    busMoveY -= 50;
    bus.style.top = busMoveY + "px";
  } else if (e.keyCode == 40) {
    addLastChange();
    busMoveY += 50;
    bus.style.top = busMoveY + "px";
  } else if (e.keyCode == 8) {
    lastChange = changesList[changesList - 1];
    console.log(JSON.parse(lastChange));
    console.log((lastChange));
  }
})

function addLastChange () {
  changesList.push({moveX: busMoveX, moveY: busMoveY});
  console.log(changesList);
}