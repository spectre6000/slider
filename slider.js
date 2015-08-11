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
    var photoCount = $photos.length-1;

  //variables
    var period;
    var next = '-=';
    var last = '+=';
    var direction = next;

  //mechanism
    function start() { period = setInterval(advance, duration); }

      function pause() { clearInterval(period); }

    function advance() {
      if($gallery.is(':animated')) return;
      $gallery.animate({'margin-left': direction+width}, speed, movement );
    }

      function movement() {
        updateCurrent();
        currentWrapUp();
        currentWrapDown();
        updateDots();
      }

        function updateCurrent(){ direction === next ? current++ : current--; }

        function currentWrapUp() {
          if (current === photoCount) {
            current = 1;
            $gallery.css({'margin-left': '-1000px'});
          };
        }

        function currentWrapDown() {
          if (current === 0 ) {
            current = photoCount -1;
            $gallery.css({'margin-left': '-5000px'});
          };
        }

        function updateDots() {
          $dots.removeClass('active');
          $('#dot'+current).addClass('active');
        }

  //activation
    start();
    
    $slider.on('mouseenter', pause).on('mouseleave', start);
    
    $next.click(function() {
      direction = next;
      advance();
    });
    
    $last.click(function() {
      direction = last;
      advance();
    });

});
