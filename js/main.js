// ---------------------slick slider--------------------
$(document).ready(function(){

  $('.my-slider').slick({

 prevArrow:'<button class="arrow prev"><i class="fas fa-arrow-circle-left"></i></button>',
 nextArrow:'<button class="arrow next"><i class="fas fa-arrow-circle-right"></i></button>',

slidesToShow: 1,
slidesToScroll: 1

});
});

// -----------------Navbar collapse--------------------

function openNav() {	
  document.getElementById("mySidenav").style.width = "250px";
 
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}





