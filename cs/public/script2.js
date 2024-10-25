$(function () {
  $(".row3")
    .children()
    .each(function () {
      $(this).on("click", function () {
        $(this).toggleClass("red-background");
      });
    });
});
