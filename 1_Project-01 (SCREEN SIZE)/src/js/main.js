window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth;

  document.getElementById("screen-size").innerHTML =
    "Width : " + myWidth + "px";
}
