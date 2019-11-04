var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var chaButtons = document.getElementsByClassName("cha-button");

for (var i = 0; i < chaButtons.length; i++) {
  chaButtons[i].addEventListener('click', animateButton, true);
}
