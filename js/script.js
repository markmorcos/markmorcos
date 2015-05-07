$(document).ready(function() {
  $("#navigator li a, #top").click(function() {
    $("body").stop(true).animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    return false;
  });
});
