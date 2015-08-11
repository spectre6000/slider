$(function(){
  
    //config
    var width = 1000;
    var speed = 1000;
    var duration = 2000;
    var current = 1;
    var currentDot = 2;

    //variables
    var period;
    var next = '-=';
    var last = '+=';

    //DOM
    var $slider = $("#content");
    var $gallery = $slider.find("#gallery");
    var $photos = $gallery.find('.photo');
    var $dots = $slider.find(".dot");
    

    //mechanism
    function start(direction) {
      period = setInterval(function(){advance(direction)}, duration);
    }

    function advance(direction) {

      $("#dot" + current).animate({"opacity": 0.4}, speed);
      $("#dot" + currentDot).animate({"opacity": 1.0}, speed);

      $gallery.animate({'margin-left': direction+width}, speed, function() {
        
        current ++;
        currentDot ++;
        
        if (currentDot === $photos.length) {
          currentDot = 1;
        };
        if (current === $photos.length) {
          current = 1;
          $gallery.css({'margin-left': 0});
        };
      });
    };

    function pause() {
      clearInterval(period);
    }

    //activation
    $slider.on('mouseenter', pause).on('mouseleave', function() {start(next)} );

    start(next);
});
