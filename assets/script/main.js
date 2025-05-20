$('.voices__box').slick({
  infinite: true,
  dots: true,
  arrows: false,
  variableWidth: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      centerMode: true,
      centerPadding: "14%",
    }
  }]
});