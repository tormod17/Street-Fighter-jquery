$(document).ready(function() {
  
  $('.ryu').mouseenter(function() {
  	$('.ryu-still').hide();
  	$('.ryu-ready').show();
  })
  $('.ryu') .mouseleave(function() {
  	$('.ryu-ready').hide();
  	$('.ryu-still').show();
  })

  $('.ryu').mousedown(function() { 
    playHadouken();
    $ ('.ryu-still').hide();
    $ ('.ryu-ready').hide();
    $ ('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            800,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });

   })

   $('.ryu').mouseup(function() {
         
        $('.ryu-throwing').hide();
        $('.ryu-still').hide();
        $('.ryu-ready').show(); 
         
    });

  
});

$(document).keydown(function(e) {


        if (e.keyCode == 88) {
         
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-cool').show();
        }
    })

    .keyup(function(e) {

        if  (e.keyCode == 88 ) {

            $('.ryu-ready').hide();
            $('.ryu-still').show();
            $('.ryu-cool').hide();
        }

    });


function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }    
