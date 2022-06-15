$(function () {

   $(function () {
      // スクロールしたときに実行
      $(window).scroll(function () {
         // 目的のスクロール量を設定(px)
         var TargetPos = 450;
         // 現在のスクロール位置を取得
         var ScrollPos = $(window).scrollTop();
         // 現在位置が目的のスクロール量に達しているかどうかを判断
         if (ScrollPos >= TargetPos) {
            // 達していれば表示
            $("#topbutton").fadeIn();
         } else {
            // 達していなければ非表示
            $("#topbutton").fadeOut();
         }
      });
   });


   $(function () {
      $('.toggle').on('click', function () {
         $('body').toggleClass('is-open');
      });
   });


   $(function () {
      $('nav a').on('click', function () {
         $('body').removeClass('is-open');
      });
   });


   $(".modal-open").modaal()

   $(function () {
      $('.button').prevAll().hide();
      $('.button').click(function () {
          if ($(this).prevAll().is(':hidden')) {
              $(this).prevAll().slideDown();
              $(this).text('閉じる').addClass('close');
          } else {
              $(this).prevAll().slideUp();
              $(this).text('もっと見る').removeClass('close');
          }
      });
  });

});