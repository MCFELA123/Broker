window.onscroll = function() {Start()};

function Start() {
  if (document.documentElement.scrollTop >170) {
    document.getElementById("search").style.position = "fixed";
    document.getElementById("search").style.top = "0";
    document.getElementById("search").style.zIndex = "999";
    document.getElementById("search").style.background = "white";
    document.getElementById("search").style.boxShadow = "0 1em 2em 30px white";
  }
  else {
    document.getElementById("search").style.top = "unset";
    document.getElementById("search").style.zIndex = "unset";
    document.getElementById("search").style.position = "absolute";
    document.getElementById("search").style.background = "unset";
    document.getElementById("search").style.boxShadow = "unset";
  }
}

