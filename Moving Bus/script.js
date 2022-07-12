const bus = document.getElementById("bus");
let busMoveX = 0;
let busMoveY = 0;
const changesList = [];
let lastChange;

document.addEventListener('keydown', (e) => {
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
  } else if (e.keyCode == 8 && changesList.length) {
    lastChange = changesList.slice(-1);
    changesList.splice(-1,1);
    bus.style.left = lastChange[0].moveX + "px";
    bus.style.top = lastChange[0].moveY + "px";
    busMoveX = lastChange[0].moveX;
    busMoveY = lastChange[0].moveY;
  }
})

const addLastChange = () => {
  changesList.push({moveX: busMoveX, moveY: busMoveY});
}