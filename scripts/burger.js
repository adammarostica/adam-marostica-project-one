
const menuButton = document.getElementById('burgerMenu');
const burgerIcon = document.getElementById('burgerIcon')
console.log(burgerIcon);
const navList = document.getElementById('navList');
console.log(navList.className);
menuButton.addEventListener('click', function(e) {
  if (navList.className === 'revealMenu') {
    navList.classList.replace('revealMenu', 'swipeMenu');
    setTimeout(function () {
      navList.classList.remove('swipeMenu');
    }, 300);
  }
  if (navList.className === '') {
    navList.classList.toggle('revealMenu');
  }
  console.log(navList.className);
  this.classList.toggle('expandBurger')
  burgerIcon.children[0].classList.toggle('changeTop');
  burgerIcon.children[1].classList.toggle('changeMid');
  burgerIcon.children[2].classList.toggle('changeBtm');
});