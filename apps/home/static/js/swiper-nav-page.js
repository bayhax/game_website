// ugc页面
var ugcSwiper = new Swiper('.swiper-ugc', {
    direction: 'horizontal',
    lazy: {
        loadPrevNext: true,
    },
    mousewheel: false,
    hashNavigation:true,
});

 // 整体swiper切换
var mySwiper = new Swiper('.swiper-container', {
    lazy: true,
    direction: 'vertical',
    mousewheel: true,
    hashNavigation:true,
    //pagination: {
    //  el: '.swiper-pagination',
    //  clickable: true,

    //},
    on: {
        slideChangeTransitionStart: function(){
            if(this.realIndex == 0){
                $(".page_down").css("display","block")
            }else{
                $(".page_down").css("display","none")
            }
        }
    }
});
// 导航条切换swiper页面
$('#index').click(function(){
    mySwiper.slideTo(0, 1000, true);
})
$('#contact').click(function(){
    mySwiper.slideTo(1, 1000, true);
})

function download(){
    mySwiper.mousewheel.disable();
    if(mySwiper.realIndex == 0){
        document.getElementById("download_overflow").style.display="block";
    }else{
        document.getElementById("download_overflow_2").style.display="block";
    }
};
function download_close(){
    mySwiper.mousewheel.enable();
    if(mySwiper.realIndex == 0){
        document.getElementById("download_overflow").style.display="none";
    }else{
        document.getElementById("download_overflow_2").style.display="none";
    }
};

recognize_url_hash();
// 导航追踪
window.onhashchange=function(event){
    recognize_url_hash();
};
function recognize_url_hash(){
    if(window.location.hash=="#index" || window.location.hash==""){
        $("#index").addClass("active")
        $(".bg_img").css({"background":"url(../../static/img/bg_1.png","background-size":"cover"})
        $("#ugc,#contact,#download").removeClass("active")

    }else{
        $("#contact").addClass("active")
        $(".bg_img").css({"background":"url(../../static/img/bg_1.png","background-size":"cover"})
        $("#ugc,#index,#download").removeClass("active")

    }
}