$(function() {
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  });
  // ボタンアニメーション
  $('.button-more').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });
  $('.button-more').on('mouseout', function() {
    $(this).animate({
      opacity: 100,
    }, 100);
  });
  // スクロール時にTOPに戻るボタン表示
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    }
    else {
      pagetop.fadeOut();
    }
  });
  // スムーズスクロール
  $('a[href^="#"]').click(function() {
    const speed = 500;
    const href= $(this).attr("href");
    let $target;
    if(href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $("html, body").animate({'scrollTop': position }, speed, "swing");
    return false;
  });
  // スクロールしてフェードイン
  $(window).scroll(function() {
    $('.fade-in-target').each(function() {
      const imgPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if(scroll > imgPos - windowHeight + 100) {
        $(this).addClass('fade-in');
      } 
    });
  });
  // モーダル
  $('.works img').click(function() {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('.modal-window').attr({
      src: imgSrc,
      alt: imgAlt,
    });
    $('.modal').fadeIn();
  });
  // 閉じるボタン
  $('.close-btn').click(function () {
    $('.modal').fadeOut();
  });
  // ボタンアニメーション
  $('.works img').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });
  $('.works img').on('mouseout', function() {
    $(this).animate({
      opacity: 100,
    }, 100);
  });
});