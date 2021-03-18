/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
 _
 ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */


$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();


    $("#container,.vertical_scroll").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // =========================
    // on event section      ===
    //==========================


    const $stage = $('#container .main');
    const $container = $('#container');


    function nextPage(page, index) {
        $stage.css('transform', `translateY(-${innerHeight * index}px)`);
        $container.removeClass();


        setTimeout(() => {
            $container.addClass(page);
        }, 1000);


        location.hash = page;

    }

    $stage.on('mousewheel', function (e) {

        let v = e.originalEvent.deltaY;


        if (v < 0) { //up


            if ($container.hasClass('page-6')) { // 6 > 5
                nextPage('page-5', 4);

            }else if ($container.hasClass('page-5')) { // 5 > 4
                nextPage('page-4', 3);

            }else if ($container.hasClass('page-4')) { // 4 > 3
                nextPage('page-3', 2);

            }else if ($container.hasClass('page-3')) { // 3 > 2


            }else if ($container.hasClass('page-2')) { // 2 > 1
                nextPage('page-1', 0);

            }



        } else { // down


            if ($container.hasClass('page-1')) { // 1 > 2


                nextPage('page-2', 1);


            } else if ($container.hasClass('page-2')) { // 2 > 3


                nextPage('page-3', 2);

            } else if ($container.hasClass('page-3')) { // 3 > 4


            } else if ($container.hasClass('page-4')) { // 4 > 5
                nextPage('page-5', 4);

            } else if ($container.hasClass('page-5')) { // 4 > 5
                nextPage('page-6', 5);

            }


        }
    })


    function intro() {


        $('#section01').addClass('on');

    }


    intro();


    const gv80 = document.querySelector('#gv80');


    let count = 0;

    $('.click').click(function () {


        count++;


        $(this).css('pointer-events', 'none');


        $('#video_section .designtext > div').removeClass('on');
        $('#video_section .count > div').removeClass('on');


        if (count === 0) {
            gv80.currentTime = 0;
            // gv80.play();

            $('#video_section .designtext > div:nth-child(1)').addClass('on');
            $('#video_section .count > div:nth-child(1)').addClass('on');
            $(this).css('pointer-events', 'initial');


        } else if (count === 1) {
            gv80.play();

            $('#video_section .designtext > div:nth-child(2)').addClass('on');
            $('#video_section .count > div:nth-child(2)').addClass('on');
            let timer = setInterval(() => {

                if (gv80.currentTime >= 4) {
                    clearInterval(timer);
                    gv80.pause();
                    $(this).css('pointer-events', 'initial');
                }
            })


        } else if (count === 2) {
            gv80.play();
            $('#video_section .designtext > div:nth-child(3)').addClass('on');
            $('#video_section .count > div:nth-child(3)').addClass('on');
            let timer = setInterval(() => {

                if (gv80.currentTime >= 8) {
                    clearInterval(timer);
                    gv80.pause();
                    $(this).css('pointer-events', 'initial');
                }
            })


        } else if (count === 3) {
            gv80.play();
            $('#video_section .designtext > div:nth-child(4)').addClass('on');
            $('#video_section .count > div:nth-child(4)').addClass('on');
            let timer = setInterval(() => {

                if (gv80.currentTime >= 12) {
                    clearInterval(timer);
                    gv80.pause();
                    $(this).css('pointer-events', 'initial');
                }
            })
        } else if (count >= 4) {
            gv80.play();
            $('#video_section .designtext > div:nth-child(4)').addClass('on');
            $('#video_section .count > div:nth-child(5)').addClass('on');
            let timer = setInterval(() => {

                if (gv80.currentTime >= 18) {
                    clearInterval(timer);
                    gv80.pause();
                    $(this).css('pointer-events', 'initial');
                }
            })

            count = -1;
        }


    });


    intro();

    const page03_gv80 = document.querySelector('#video03');


    $('.play_btn').click(function () {

        page03_gv80.play();
        $(this).fadeOut();
        $('.page03 .overlay').fadeOut();

    });

    $('#video03').click(function () {

        page03_gv80.pause();
        $('.play_btn').fadeIn();
        $('.page03 .overlay').fadeIn();

    });


    $('#header .gnb > li').click(function () {

        if($(this).hasClass('page01')){
            nextPage('page-2', 1);


        }else if($(this).hasClass('page02')){

            nextPage('page-3', 2);

        }else if($(this).hasClass('page03')){

            nextPage('page-4', 3);

        }else if($(this).hasClass('page04')){

            nextPage('page-5', 4);

        }else if($(this).hasClass('page05')){

            nextPage('page-6', 5);

        }




    });

    $('.safetymenu > li').mouseenter(function () {

        $('.safetymenu > li').removeClass('on');
        $('.page02 .list_box > div').removeClass('on');
        $(this).addClass('on');

        if ($('.safetymenu > li:nth-child(1)').hasClass('on')) {

            $('.page02 .list_box .list01').addClass('on');

        } else if ($('.safetymenu > li:nth-child(2)').hasClass('on')) {

            $('.page02 .list_box .list02').addClass('on');

        } else if ($('.safetymenu > li:nth-child(3)').hasClass('on')) {

            $('.page02 .list_box .list03').addClass('on');

        } else if ($('.safetymenu > li:nth-child(4)').hasClass('on')) {

            $('.page02 .list_box .list04').addClass('on');
        }


    });

    console.log($('.scroll_inner').height() - innerHeight);

    // scroll event

    let delayPage = false;
    let lastScroll;
    $('.vertical_scroll').scroll(function () {
        var scrollTop = $('.vertical_scroll').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값


        // =========================
        // scroll event section  ===
        //==========================


        if(scrollTop === 0){
            nextPage('page-2', 1);
        }

        // console.log(scrollTop);
        // console.log(lastScroll);


        lastScroll = scrollTop;

        if (scrollTop >= $('.scroll_inner').height() - innerHeight) {

            //

            $('.page03').on('mousewheel', function (e) {

                let v = e.originalEvent.deltaY

                if (v > 0) {

                    setTimeout(() => {
                        delayPage = true;
                    }, 500);


                    if (delayPage) {
                        nextPage('page-4', 3);
                    }

                }

            })

        } else {

            delayPage = false;
        }


    });


    $(".gallery_img").slick({
        dots: true, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover: false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable: true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide: 0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: true,

    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        $('.gallery_img .slick-slide').removeClass('on');

    }).on('afterChange', function (event, slick, currentSlide, nextSlide) {


        $('.gallery_img .slick-current').addClass('on');

    });


    $('#footer .topbutton').click(function (e) {
        e.preventDefault();

        nextPage('page-1', 0);
    })

//==============================================================
});


$(function () {


});












