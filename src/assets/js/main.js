function slickSlider(el) {
  console.log(el)
  if (el == '.hero-slider') {
    $(el).not('.slick-initialized').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 1,
    });
  } else {
    $(el).not('.slick-initialized').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      responsive: [{
          breakpoint: 950,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }



}

function scrollUp() {
  $('[data-scroll]').on('click', function (e) {
    e.preventDefault();
    var link = this;
    $.smoothScroll({
      speed: 1000,
      scrollTarget: link.hash,
      offset: -90,
    });
  });
  /*--
      Scroll Up
  -----------------------------------*/
  $.scrollUp({
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade',
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
  });
}

function magnificPopups() {
  var videoPopup = $('.video-popup');
  videoPopup.magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    zoom: {
      enabled: true,
    }
  });
  /*-- Image --*/
  var imagePopup = $('.image-popup');
  imagePopup.magnificPopup({
    type: 'image',
  });
  /*-- Gallery --*/
  var galleryPopup = $('.gallery-popup');
  galleryPopup.magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  /*-- Gallery Video --*/
  var videGalleryPopup = $('.video-gallery-popup');
  videGalleryPopup.magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    zoom: {
      enabled: true,
    },
    gallery: {
      enabled: true
    }
  });
}
