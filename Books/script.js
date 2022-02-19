$(document).ready(function() {
  $(".search").keyup(function () {
    var searchTerm = $(".search").val();
    var listItem = $('.results tbody').children('tr');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

  $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });

  $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','false');
  });

  $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','true');
  });

  var jobCount = $('.results tbody tr[visible="true"]').length;
    $('.counter').text(jobCount + ' item');

  if(jobCount == '0') {$('.no-result').show();}
    else {$('.no-result').hide();}
		  });
});


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
