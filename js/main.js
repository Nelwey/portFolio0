$(() => {


  

  $(".container-hamburger").click(function () {
    $(this).toggleClass("change");
    $("#fullScreenOverlay").css("width", "100%");
    $(this).css("background-color", "rgba(0,0,0, 0.1)");
  });


  $("#closeBtn").click(function () {
    $("#fullScreenOverlay").css("width", "0%");
    $(".container-hamburger").toggleClass("change");
    $('.container-hamburger').css("background-color", "#FBFBFD");
    
  });

  $('.menu').click(()=>{
    $("#fullScreenOverlay").css("width", "0%");
    $('.container-hamburger').css("background-color", "#FBFBFD");
    $(".container-hamburger").toggleClass("change");
  });


 
 
});
