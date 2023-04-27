  //<![CDATA[
    $(window).on('load', function () {
        $('#preloader .inner').fadeOut();
        $('#preloader').delay(200).fadeOut('slow'); 
        $('body').delay(100).css({'overflow': 'visible'});
      })
      //]]>
      