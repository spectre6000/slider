$(function(){
  
    //DOM
    var $slider = $("#content");
    var $gallery = $slider.find("#gallery");
    var $photos = $gallery.find('.photo');
    var $dots = $slider.find(".dot");
    var $next = $slider.find("#right");
    var $last = $slider.find("#left");

    //config
    var width = 1000;
    var speed = 1000;
    var duration = 2000;
    var current = 1;
    var currentDot = 2;
    var photoCount = $photos.length-1;

    //variables
    var period;
    var next = '-=';
    var last = '+=';


    //mechanism
    function start(direction) {
      period = setInterval(function(){advance(direction)}, duration);
    }

    function advance(direction) {
      if($gallery.is(':animated')) return;

      // $("#dot" + current).animate({"opacity": 0.4}, speed);
      // $("#dot" + currentDot).animate({"opacity": 1.0}, speed);

      // $('.dot').animate({"opacity": 0.4}, speed);
      // $('#dot' + current).animate({"opacity": 1}, speed);

      if (current === 0 ) {
        current = photoCount -1;
        $gallery.css({'margin-left': '-5000px'});
      };

      $gallery.animate({'margin-left': direction+width}, speed, function() {

        if (direction === next) {
          current ++;
          // currentDot ++;
        } else {
          current --;
          // currentDot --;
        };
        
        // if (currentDot === photoCount) {
        //   currentDot = 1;
        // };
      
        if (current === photoCount) {
          current = 1;
          $gallery.css({'margin-left': '-1000px'});
        };

      });
    };

    function pause() {
      clearInterval(period);
    }

    //activation
    start(next);
    $slider.on('mouseenter', pause).on('mouseleave', function() {start(next)} );
    $next.click(function() {advance(next)});
    $last.click(function() {advance(last)});
});
