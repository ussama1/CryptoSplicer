(function($) {

    /*----------------------------
    wow js active
    ------------------------------ */
    new WOW().init();

  $('.coinnewa-heading-1').ellipsis({
    lines: 2,             // force ellipsis after a certain number of lines. Default is 'auto'
    ellipClass: 'ellip',  // class used for ellipsis wrapper and to namespace ellip line
    responsive: true      // set to true if you want ellipsis to update on window resize. Default is false
  });

})(jQuery);


