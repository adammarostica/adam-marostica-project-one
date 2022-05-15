
const menuButton = document.getElementById('burgerMenu');
const burgerIcon = document.getElementById('burgerIcon');
const navList = document.getElementById('navList');

menuButton.addEventListener('click', function(e) {
  
  if (navList.className === 'showNav') {
    navList.classList.replace('showNav', 'hideNav');
    this.classList.replace('growMenu', 'shrinkMenu');
    setTimeout(() => {
      navList.classList.remove('hideNav');
      this.classList.remove('shrinkMenu');
    }, 600);
  } else if (navList.className === '') {
    navList.classList.toggle('showNav');
    this.classList.add('growMenu');
  }

  burgerIcon.children[0].classList.toggle('changeTop');
  burgerIcon.children[1].classList.toggle('changeMid');
  burgerIcon.children[2].classList.toggle('changeBtm');
});