//تغير خلفيه الheader من يتحركم scroll

$(window).scroll(function()
{
  if($(this).scrollTop()>=100){
    $(".navheader").css("background-color", "#ffffff");
  }
  else{
    $(".navheader").css("background-color", "");

  }
});


/////////////////////////////////////////////////////////////////////////


  
$(".nav-item-dropdown").click(function(){
  $(".content-for-more").slideToggle();
})





console.log( $(window).scrollwidth)

  // Close the dropdown if the user clicks outside of it
  
  /*window.click = function(event) {
    if (!event.$('.nav-item-dropdown')) {
      $(".content-for-more").toggle();}}
      //var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < $(".dropdown-content").length; i++) {
        var openDropdown = $(".dropdown-content")[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //////////////////////////////

//code slider

(function funslider(){
  document.querySelectorAll('.active').each(function(){
    if(!$(this).is(':last-child')){
      $(this).delay(2000).fadeOut(1000,function(){
         $(this).removeClass('active').next().addClass('active').fadeIn();
         funslider();
      })
    }

    else{
      $(this).delay(3000).fadeOut(1000,function(){
        $(this).removeClass('active');
        $('.slider div').eq(0).addClass('active').fadeIn();
        funslider();
      })
    }
  })
})
/*
(function autoSlider()
    {
        $(".slider .active").delay(2000).fadeOut(2000,function()
        {
            $(this).removeClass("active");
            var next = ($(this).index() + 1 ) % 4;
            $(".slider div").eq(next).addClass("active").fadeIn();
             autoSlider();
        });   
    })

*/
    var box = document.querySelectorAll('.comment-box');
    var count =0;

  setInterval(startSlide,3000);
  function startSlide(){

    for(var i=0 ;i < box.length; i++) {
      box[i].style.display='none'; 
    }
  
  if(count === box.length-1) {count =-1;}
         box[count + 1].style.display='block';
  count++;

  }


  
 /*
  $(window).scroll(function()
{
  console.log($(this).scrollTop());

if($(this).scrollTop()==700){
  $(".imag1 ").animate(
{
marginLeft: "200px"

},
10,
function(){
  $(".imag1 ").animate({
    marginLeft:"0px"}
    
  )})}})

*/

//////////////////////////////////////////////////////////////////////////

$(".radio2").click(function(){
  $(".slider1").css("left","-473px");
  $(".slider2").css("left","-360px")
  $(".slider3").css("left","-237px")


  
})

$(".radio3").click(function(){
  $(".slider1").css("left","-759px");
  $(".slider2").css("left","-1081px");
  $(".slider3").css("left","-981px")
})
$(".radio1").click(function(){
  $(".slider1").css("left","238px");
  $(".slider2").css("left","330px");
  $(".slider3").css("left","426px")
})











if(($(window).width()) < 862){
  
  $(".nav-item-dropdown2").click(function(){
    $(".dropdown-content2").slideToggle();
  })
  $(".nav-item-dropdown3").click(function(){
    $(".dropdown-content3").slideToggle();
  })
  $(".nav-item-dropdown4").click(function(){
    $(".dropdown-content4").slideToggle();
  })
  $(".nav-item-dropdown5").click(function(){
    $(".dropdown-content5").slideToggle();
  })
  $(".nav-item-dropdown6").click(function(){
    $(".dropdown-content6").slideToggle();
  })
  
}





$(".linklanguage").on("click" ,function(){
          $(".language").fadeToggle(100);
})