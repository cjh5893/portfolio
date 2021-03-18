window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });




    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log();


        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)

    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {

        $(".visual_img").slick({
            dots: true, //네비게이션 사용여부
            arrows: true, //화살표 사용여부
            prevArrow: $('#section01 .prev'), //이전 화살표
            nextArrow: $('#section01 .next'), //다음 화살표
            autoplay: true, //자동넘김
            autoplaySpeed: 2000, //자동넘김 속도
            pauseOnHover: false, //마우스 오버시 자동재생 멈춤
            fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
            speed: 900, // 슬라이드 속도
            infinite: true, // 무한슬라이
            // asNavFor: '.slider2', //다른 슬라이드 연동 여부
            centerMode: true, //센터모드
            centerPadding: '0%', //센터 모드 시 여백
            slidesToShow: 1, //보여질 슬라이드 갯수
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

            $('.visual_img .slick-slide').removeClass('on');

        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {


            $('.visual_img .slick-current').addClass('on');

        });




/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/

    })();



})


