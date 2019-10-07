
function doRosterTwo(main, a, b) {
  var slmain = document.getElementById(main);
  var sl1 = document.getElementById(a);
  var sl2 = document.getElementById(b);

  sl1.addEventListener("click", function(){
    slmain.src = sl1.src;
  });
  sl2.addEventListener("click", function(){
    slmain.src = sl2.src;
  });
}

function doRosterThree(main, a, b, c) {
  var slmain = document.getElementById(main);
  var sl1 = document.getElementById(a);
  var sl2 = document.getElementById(b);
  var sl3 = document.getElementById(c);

  sl1.addEventListener("click", function(){
    slmain.src = sl1.src;
  });
  sl2.addEventListener("click", function(){
    slmain.src = sl2.src;
  });
  sl3.addEventListener("click", function(){
    slmain.src = sl3.src;
  });
}

function doRosterFour(main, a, b, c, d) {
  var slmain = document.getElementById(main);
  var sl1 = document.getElementById(a);
  var sl2 = document.getElementById(b);
  var sl3 = document.getElementById(c);
  var sl4 = document.getElementById(d);

  sl1.addEventListener("click", function(){
    slmain.src = sl1.src;
  });
  sl2.addEventListener("click", function(){
    slmain.src = sl2.src;
  });
  sl3.addEventListener("click", function(){
    slmain.src = sl3.src;
  });
  sl4.addEventListener("click", function(){
    slmain.src = sl4.src;
  });
}