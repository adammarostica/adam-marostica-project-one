
const menuButton = document.getElementById('burgerMenu');
const burgerIcon = document.getElementById('burgerIcon')
const navList = document.getElementById('navList');

menuButton.addEventListener('click', function(e) {
  
  if (navList.className === 'revealMenu') {
    navList.classList.replace('revealMenu', 'swipeMenu');
    setTimeout(function () {
      navList.classList.remove('swipeMenu');
    }, 300);
  } else if (navList.className === '') {
    navList.classList.toggle('revealMenu');
  }

  this.classList.toggle('expandBurger')
  burgerIcon.children[0].classList.toggle('changeTop');
  burgerIcon.children[1].classList.toggle('changeMid');
  burgerIcon.children[2].classList.toggle('changeBtm');
});