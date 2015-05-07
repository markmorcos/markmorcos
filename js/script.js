$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > $("#top").scrollTop() + $(window).height() - 65) $("#navigator").css({position: "fixed", bottom: "auto"});
    else $("#navigator").css({position: "absolute", bottom: 0});
  });
  
  $("#navigator li a, #top").click(function() {
    $("body").stop(true).animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    return false;
  });
});
