$(document).ready(function() {
  updateActiveNavigationItem();
  $(window).scroll(function() {
    updateActiveNavigationItem();
    if($(window).scrollTop() > $("#top").height() - 32) $("#navigator").css({position: "fixed", bottom: "auto"});
    else $("#navigator").css({position: "absolute", bottom: 0});
  });
  
  $("#navigator li a").click(function() {
    $("body").stop(true).animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    return false;
  });
});

function updateActiveNavigationItem() {
  $("#navigator li").each(function() {
    if(isScrolledIntoView($($(this).find("a").attr("href")))) {
      $("#navigator li a").removeClass("active");
      $(this).find("a").addClass("active");
    }
  });
}

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
