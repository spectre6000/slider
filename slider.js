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
    var currentPhoto = 1;
    var currentDot = 1;
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
      dotMovement();
      udpateGallery();
    }

      function udpateGallery() {
        $gallery.animate({'margin-left': direction+width}, speed, photoMovement );
      }

      function photoMovement() {
        photoUpdateCurrent();
        photoWrapUp();
        photoWrapDown();
        direction = next;
      }

      function dotMovement() {
        dotUpdateCurrent();
        dotWrapUp();
        dotWrapDown();
        updateDots()
      }

        function photoUpdateCurrent(){ direction === next ? currentPhoto++ : currentPhoto--; }

        function dotUpdateCurrent(){ direction === next ? currentDot++ : currentDot--; }

        function photoWrapUp() {
          if (currentPhoto === photoCount) {
            currentPhoto = 1;
            $gallery.css({'margin-left': '-1000px'});
          };
        }

        function dotWrapUp() {
          if (currentDot === photoCount) {
            currentDot = 1;
          };
        }

        function photoWrapDown() {
          if (currentPhoto === 0 ) {
            currentPhoto = photoCount-1;
            $gallery.css({'margin-left': '-5000px'});
          };
        }

        function dotWrapDown() {
          if (currentDot === 0 ) {
            currentDot = photoCount-1;
          };
        }

        function updateDots() {
          $dots.animate({'opacity': 0.4}, {duration: speed, queue: false});
          $('#dot'+currentDot).animate({'opacity': 1}, {duration: speed, queue: false});
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
