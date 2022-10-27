
//nav bar onclick
// $(document).ready(function() {
//   $(".menu-icon").on("click", function() {
//     $("nav ul").toggleClass("showing");
//     $('.menu a').click(function(){
//       $('menu').hide();
//   });
//   });

  $(document).ready(function() {
   $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
   });
   $("nav li").on("click", function() {
    $("nav ul").removeClass("showing");
   });
  
  });


// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});
