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


    var $mouseX = 0,
        $mouseY = 0,
        $xp = 0,
        $yp = 0;


    $(document).mousemove(function (e) {
        $mouseX = e.pageX;
        $mouseY = e.pageY;
    });

    var $loop = setInterval(function () {
// change 12 to alter damping higher is slower
        $xp += (($mouseX - $xp) / 32);
        $yp += (($mouseY - $yp) / 32);
        $(".outline").css({left: ($xp-$(".outline").width() * 0.5) + 'px', top: ($yp -$(".outline").height() * 0.5) + 'px'});
    }, 1);





    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log();


        console.log(scrollTop);

        if(scrollTop === 0){

            $('#intro').css('transform',`translateY(${0}px)`);
            $('#container').css('transform',`translateY(${innerHeight}px)`);

        }


        if(scrollTop >= 380){
            $('#section02 .img .img_1').addClass('on');
        }else{
            $('#section02 .img .img_1').removeClass('on');
        }



        if(scrollTop >= 760){
            $('#section02 .img .img_2').addClass('on');
        }else{
            $('#section02 .img .img_2').removeClass('on');
        }


        if(scrollTop >= 1260){
            $('#section02 .img .img_3').addClass('on');
        }else{
            $('#section02 .img .img_3').removeClass('on');
        }

        if(scrollTop >= 1560){
            $('#section02 .img .img_4').addClass('on');
        }else{
            $('#section02 .img .img_4').removeClass('on');
        }



        $('#section02 .portfolio_text').css('transform',`translateY(${scrollTop}px)`);
        $('#section02 .gray').css('transform',`translateY(${scrollTop}px)`);



        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)

    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {


        $('#intro').on('mousewheel',function (e) {

            let v = e.originalEvent.deltaY;

            if(v > 0){

                $(this).css('transform',`translateY(-${innerHeight}px)`);
                $('#container').css('transform',`translateY(${0}px)`);


                $('#header').addClass('black');
                $('.outline').addClass('black');


            }

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


