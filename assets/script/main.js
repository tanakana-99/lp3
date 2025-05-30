// ドットナビゲーション「アクティブ状態」へ切り替え
function updateCustomDots(index) {
    $('.custom-dot').removeClass('active');
    $('.custom-dot').eq(index).addClass('active');
}

// 中央スライドの表示
$('.voices__box').on('init', function () {
    setTimeout(function () {
        $('.voices__box').slick('slickGoTo', 1);
        updateCustomDots(1);
    }, 50);
});

// カルーセル
$('.voices__box').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    dots: false,
    centerMode: false,
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

// カスタムドットクリックで移動し、アクティブ状態を更新
$('.custom-dot').on('click', function () {
    const index = $(this).data('index');
    $('.voices__box').slick('slickGoTo', index);
    updateCustomDots(index);
});

$('.voices__box').on('afterChange', function (event, slick, currentSlide) {
    updateCustomDots(currentSlide);
});