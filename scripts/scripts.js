// html & css: create a burger button and sticky it to the bottom right
  // hide our menu by default so that it can be summoned by clicking the burger
  // in the nav, have a div with our burger button
    // font-awesome icons for burger and X to toggle between
    // media queries to hide it at larger widths

// when the user clicks, the menu appears
  // select the burger menu and add an event listener to it
const menuButton = document.getElementById('burgerMenu');
const navList = document.getElementById('navList');

menuButton.addEventListener('click', function(e) {
  // menu appears, or even better: slides into view
  navList.classList.toggle('revealMenu');
  const icon = this.children[0];
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-x');
});