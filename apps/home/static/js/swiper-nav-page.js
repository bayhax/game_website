//var video = document.querySelector('#display_video');
//var mediaSource = new MediaSource();
//video.src = URL.createObjectURL(mediaSource);
//mediaSource.addEventListener('sourceopen', sourceOpen);
//
//function sourceOpen(e) {
//    URL.revokeObjectURL(video.src);
//    // 设置 媒体的编码类型
//    var mime = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
//    var mediaSource = e.target;
//    var sourceBuffer = mediaSource.addSourceBuffer(mime);
//    var videoUrl = '../static/img/show_video.mp4';
//    fetch(videoUrl).then(function(response) {
//            console.log(response)
//            return response.arrayBuffer();
//    })
//    .then(function(arrayBuffer) {
//        sourceBuffer.addEventListener('updateend', function(e) {
//            if (!sourceBuffer.updating && mediaSource.readyState === 'open') {
//                mediaSource.endOfStream();
//                // 在数据请求完成后，我们需要调用 endOfStream()。它会改变 MediaSource.readyState 为 ended 并且触发 sourceended 事件。
//                video.play().then(function() {}).catch(function(err) {
//                    console.log(err)
//                });
//            }
//        });
//        sourceBuffer.appendBuffer(arrayBuffer);
//    });
//}

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
});
// 导航条切换swiper页面
$('#index').click(function(){
    mySwiper.slideTo(0, 1000, true);
})
$('#contact').click(function(){
    mySwiper.slideTo(1, 1000, true);
})

//$('#download').click(function(){
//    mySwiper.slideTo(3, 1000, true);
//})
function download(){
    if(mySwiper.realIndex == 0){
        document.getElementById("download_overflow").style.display="block";
    }else{
        document.getElementById("download_overflow_2").style.display="block";
    }
};
function download_close(){
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