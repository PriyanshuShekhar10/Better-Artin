$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.background').css('top',-(scrolled*0.15)+'px');
}

$("ul.tabs a").click(function (e) {
  /* stop default action of navigating to # */
  e.preventDefault();
  /* make the clicked link active and others inactive */
  $(this).closest("li").addClass("active").siblings().removeClass("active");
  /* get the index of the tab (zero indexed) - first (0), second (1), etc. */
  var i = $(this).closest("li").index();
  /* show the section with the same index and hide others - easier than using IDs but means HTML must be in strict order */
  $("#container section:eq(" + i + ")").show().siblings().hide();
});