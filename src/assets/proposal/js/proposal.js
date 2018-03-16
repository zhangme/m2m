function proposal(){

    var quotes = $(".quotes");
    var quoteIndex = -1;
    var dummy = 0;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex)
            .fadeIn(2000)
            .delay(1210)
            .fadeOut(2000, showNextQuote);
    }

    var audio = document.getElementById("main_audio");
    audio.addEventListener("ended", function(){
         audio.currentTime = 0;
         $('#btn-play').click();
    });
    $(function () {
        var isPlaying = function (audio) {
            return !audio.paused;
        }
        var a = document.getElementById('main_audio');
        if (!(a.play instanceof Function)) {
            a = document.getElementById('main_audio_ie8');
            isPlaying = function (audio) {
                return audio.playState == 2;
            }
        }
        $('#btn-play').click(function () {
            if ($(this).hasClass('rotate')) {
                a.pause();
                $(this).removeClass('rotate');
            } else {
                a.play();
                $(this).addClass('rotate');
            }
        });
    });



    // window.onload = function(){
    //     showNextQuote();
    //     $('#btn-play').click();
    //     $('#btn-play').click();
    // }

    // $(".heart").on('touchstart', function(){
    //   $(".heart").off();
    //   $(this).toggleClass('is_animating');
    //   var vm = $(this);
    //   setTimeout(function() {
    //       vm.fadeOut('slow');
    //
    //       showNextQuote();
    //
    //       $('#btn-play').click();
    //       $('#btn-play').click();
    //   }, 1000);
    // });

    $(".heart").on('click', function(){
      $(".heart").off();
      $(this).toggleClass('is_animating');
      var vm = $(this);
      setTimeout(function() {
          vm.fadeOut('slow');

          showNextQuote();

          $('#btn-play').click();
          $('#btn-play').click();
      }, 1000);
    });

    /*when the animation is over, remove the class*/
    $(".heart").on('animationend', function(){
      $(this).toggleClass('is_animating');
    });
};
