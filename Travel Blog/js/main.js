var counter = 1;
var imageSwitcher = function () {

  var curImageClass = ".image-" + counter;
  var currentImage = document.querySelectorAll(`.image-${counter}`);
  currentImage[0].style.display = "none";
  if(counter >= 3){
    counter = 1;
  }
  counter++;
  // var nextClass = ".image-" + counter;
  var newImage = document.querySelectorAll(`.image-${counter}`);
  newImage[0].style.display = "block";

};
