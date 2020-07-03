# -*- coding:utf-8 -*-
# @Time: 7/3/20 6:31 PM
# @Author:bayhax


def imgurl(request):
    url = "https://game-website-1253454674.cos.ap-beijing.myqcloud.com/img/"
    context = {'4399_company': url + "4399.png", 'bg_1': url + "bg_1.png",
               'download_bg': url + "download_bg.png", 'download_close': url + "download_close.png",
               'game_dinosaur': url + "game_dinosaur.png", 'PageDown': url + "PageDown.png",
               'download_game': url + "download_game.png", 'hide_title': url + "hide_title.png",
               'news_more_bg': url + "news_more_bg.png", 'Logo': url + "Logo.png", 'licence': url + 'licence.jpg',
               'credit': url + "credit.jpg", 'pause': url + "pause.png", 'play': url + "play.png",
               'qq': url + "qq.png", 'taptap': url + "taptap.png", 'title_head': url + 'title_head.png',
               'ugc': url + 'ugc.png', 'video_cover': url + 'video_cover.jpg', 'logo': url + 'logo.png',
               'show_video': "https://game-website-1253454674.cos.ap-beijing.myqcloud.com/show_video.mp4"}
    return context
