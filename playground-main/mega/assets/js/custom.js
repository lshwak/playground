(function($){
    
    // 배너 이미지 슬라이드
    var mySwiper = new Swiper ('.swiper-container',{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
        },
    });

    //영화차트 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
    //            mousewheel: {
    //                invert: true,
    //            },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
        600: {
                slidesPerView: 1.4,
                spaceBetween: 24
        },
        768: {
                slidesPerView: 2,
                spaceBetween: 24
        },
        960: {
                slidesPerView: 3,
                spaceBetween: 24
        }
        }
    });

    // 영화차트 탭 메뉴
    var movBtn = $(".movie_title > ul > li");
    var movCont = $(".movie_chart > div"); 

    movCont.hide().eq(0).show(); // .movie_chart를 hide로 감추고 첫번째만 보이기

    movBtn.click(function(e){ // 여러 버튼중 어떤걸 클릭했는지
    e.preventDefault();
    var target = $(this); // this로 몇 번째 버튼인지 확인
    var index = target.index(); // index를 통해 번호를 매겨주기
    movBtn.removeClass("active"); 
    target.addClass("active"); 
    movCont.css("display", "none");
    movCont.eq(index).css("display", "block");
    });

    // 공지사항 탭메뉴
    var tabMenu = $('.notice');

    //컨텐츠 내용을 숨겨주세요!
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("li.active > ul").show(); 

    function tabList(e) {
    e.preventDefault(); // #의 기능을 차단
    var target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    // 버튼을 클릭하면 ~ul을 보여주고
    // 부모의 li태그에 클래스를 추가하고
    // 형제의 li태그에 클래스를 제거하고
    // 제거한 자식의 ul태그를 숨겨줌.
    }

    tabMenu.find("ul > li > a").click(tabList).focus(tabList);

})(jQuery);     