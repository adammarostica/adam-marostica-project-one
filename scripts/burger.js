
const menuButton = document.getElementById('burgerMenu');
const burgerIcon = document.getElementById('burgerIcon');
const navList = document.getElementById('navList');

menuButton.addEventListener('click', function(e) {
  
  if (navList.className === 'showNav') {
    navList.classList.replace('showNav', 'hideNav');
    this.classList.replace('growMenu', 'shrinkMenu');
    burgerIcon.classList.replace('burgerChange', 'burgerRevert');
    setTimeout(() => {
      navList.classList.remove('hideNav');
      this.classList.remove('shrinkMenu');
      burgerIcon.classList.remove('burgerRevert');
    }, 600);
  } else if (navList.className === '') {
    navList.classList.add('showNav');
    this.classList.add('growMenu');
    burgerIcon.classList.add('burgerChange');
  }

});