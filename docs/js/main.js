// Cookie Bar
// Hide Cookie Bar on click
$("#close-cookie-bar").click(function(){
  $('#cookie-container').fadeOut("slow");
  Cookies.set('cookie-accept', 'accepted', { expires: 5000 });
});

// Checking Cookie - if complete hide survey else show survey
$(document).ready(function(){
  $('#cookie-container').hide();
  if (Cookies.get('cookie-accept') == ('accepted')) {
    $('#cookie-container').hide();
    console.log('Cookies Accepted');
  } else {
    $('#cookie-container').show();
    console.log('Show Cookie Bar');
  }
});

// Slick Sliders
$('.invisalign-go-images').slick({
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

$('.align-growth-summit-images').slick({
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

$('.invisalign-scientific-symposium-images').slick({
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

$('.loreal-luxe-images').slick({
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

$('.fast-track-250-images').slick({
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

$('.kellars-images').slick({
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

$('.emerald-kitchens-images').slick({
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

$('.barnsley-squash-club-images').slick({
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

$('.fit4it-fitness-images').slick({
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

$('.invisalign-eshot-images').slick({
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
});