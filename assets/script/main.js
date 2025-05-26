// カスタムドットのアクティブ状態を切り替える関数
function updateCustomDots(index) {
  $('.custom-dot').removeClass('active');
  $('.custom-dot').eq(index).addClass('active');
}

// Slick 初期化前に init イベントで初期位置を2枚目に設定
$('.voices__box').on('init', function () {
  // 少し遅延させるとより安定します
  setTimeout(function () {
    $('.voices__box').slick('slickGoTo', 1);
    updateCustomDots(1);
  }, 50);
});

// Slick 初期化
$('.voices__box').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false, // デフォルトドット無効
  centerMode: false, // 中央寄せしない
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true
    }
  }]
});

// カスタムドットをクリックしたときの処理
$('.custom-dot').on('click', function () {
  const index = $(this).data('index');
  $('.voices__box').slick('slickGoTo', index);
  updateCustomDots(index);
});

// スライドが切り替わった後にドットのアクティブ状態を更新
$('.voices__box').on('afterChange', function (event, slick, currentSlide) {
  updateCustomDots(currentSlide);
});


$(function() {
  $('.course__description-02').each(function() {
    var html = $(this).html();
    html = html.replace(/、/g, '<span class="break">、</span>');
    $(this).html(html);
  });
});
