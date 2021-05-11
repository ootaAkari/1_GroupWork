$(function () {
    // ここにjQueryを記述

    $('.faq_content').hide();

    $('.faq_click').click(function() {
        $(this).next().slideToggle(200);
    });

    // FAQの開け閉めする仕組みテスト
    // $(document).ready(function () {
    //     $(".p").on("click", function () {
    //         $(this).next().slideToggle(200);
    //     });

    //     $("p.question").on("click", function () {
    //         $(this).next().slideToggle(200);
    //     });
    // });

    // //  FAQの開け閉めする仕組みテスト
    // $(function () {
    //     $("#faq_click").on("click", function () {
    //         $(this).next().slideToggle(200);
    //     });
    // });

    //     // $("p.question").on("click", function () {
    //     //     $(this).next().slideToggle(200);
    //     // });
    // });


    // --------------
});