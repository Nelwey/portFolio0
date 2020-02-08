$(() => {

  $(".container-hamburger").click(function () {

    $(this).toggleClass("change");
    $("#fullScreenOverlay").css("width", "100%");
  });


  $("#closeBtn").click(function () {
    $("#fullScreenOverlay").css("width", "0%");
    $(".container-hamburger").toggleClass("change");
  });

  $('.menu').click(()=>{
    $("#fullScreenOverlay").css("width", "0%");
    $(".container-hamburger").toggleClass("change");
  });
 
});
