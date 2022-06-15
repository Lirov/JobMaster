var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disappear");
}

var openTBL = document.getElementById("openTBL");
openTBL.onclick = function () {
  document.getElementById("tableTwo").style.display = "block";
  closeTBL2();
  closeTBL3();
  closeTBL4();
  closeTBL5();
  closeTBL6();
};

function closeTBL() {
  var closeTBL = document.getElementById("tableTwo");
  closeTBL.style.display = "none";
}

var openTBL2 = document.getElementById("openTBL2");
openTBL2.onclick = function () {
  document.getElementById("tableThree").style.display = "block";
  closeTBL();
  closeTBL3();
  closeTBL4();
  closeTBL5();
  closeTBL6();
};

function closeTBL2() {
  var closeTBL2 = document.getElementById("tableThree");
  closeTBL2.style.display = "none";
}

var openTBL3 = document.getElementById("openTBL3");
openTBL3.onclick = function () {
  document.getElementById("tableFour").style.display = "block";
  closeTBL();
  closeTBL2();
  closeTBL4();
  closeTBL5();
  closeTBL6();
};

function closeTBL3() {
  var closeTBL3 = document.getElementById("tableFour");
  closeTBL3.style.display = "none";
}

var openTBL4 = document.getElementById("openTBL4");
openTBL4.onclick = function () {
  document.getElementById("tableFive").style.display = "block";
  closeTBL();
  closeTBL2();
  closeTBL3();
  closeTBL5();
  closeTBL6();
};

function closeTBL4() {
  var closeTBL4 = document.getElementById("tableFive");
  closeTBL4.style.display = "none";
}

var openTBL5 = document.getElementById("openTBL5");
openTBL5.onclick = function () {
  document.getElementById("tableSix").style.display = "block";
  closeTBL();
  closeTBL2();
  closeTBL3();
  closeTBL4();
  closeTBL6();
};

function closeTBL5() {
  var closeTBL5 = document.getElementById("tableSix");
  closeTBL5.style.display = "none";
}

var openTBL6 = document.getElementById("openTBL6");
openTBL6.onclick = function () {
  document.getElementById("tableSeven").style.display = "block";
  closeTBL();
  closeTBL2();
  closeTBL3();
  closeTBL4();
  closeTBL5();
};

function closeTBL6() {
  var closeTBL6 = document.getElementById("tableSeven");
  closeTBL6.style.display = "none";
}
