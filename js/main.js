$(() => {

  clicked = true;

  $(".container-hamburger").click(function () {

    if (clicked) {

      $(this).toggleClass("change");
      $("#fullScreenOverlay").css("width", "100%");
      $(this).css("background-color", "rgba(0,0,0, 0.1)");

      clicked = false;

    } else {

      $("#fullScreenOverlay").css("width", "0%");
      $(".container-hamburger").toggleClass("change");

      clicked = true;
    }

  });

  $('.menu').click(() => {
    $("#fullScreenOverlay").css("width", "0%");
    $(".container-hamburger").toggleClass("change");
    clicked = true;
  });

});