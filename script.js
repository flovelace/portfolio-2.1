// Override default anchor scrolling behaviour
$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      let hash = this.hash;
      $('body,html').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        600,
        function () {
          window.location.hash = hash;
        },
      );
    }
  });
});

// Resizing the background
let width = $(window).width();

window.onscroll = function () {
  if (width >= 900) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $('#middle').css('background-size', '150% auto');
    } else {
      $('#middle').css('background-size', '100% auto');
    }
  }
};

// Control the time and display of the animation spinner
setTimeout(function () {
  $('#loading').addClass('animated fadeOut');
  setTimeout(function () {
    $('#loading').removeClass('animated fadeOut');
    $('#loading').css('display', 'none');
  }, 600);
}, 1250);
