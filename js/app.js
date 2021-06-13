var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


window.addEventListener('scroll',function(){
  var navbarSticky=document.querySelector('#nav_stiky');
  navbarSticky.classList.toggle('sticky', window.scrollY > 0)
});

  
