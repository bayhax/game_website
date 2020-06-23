# -*- coding:utf-8 -*-
# @Time: 6/23/20 10:22 AM
# @Author:bayhax
from django.urls import path
from apps.home import views

urlpatterns = [
    path('index', views.IndexView.as_view()),  # 首页
    path('show_video', views.stream_video),  # 展示视频
    path('supervisor', views.supervisor),  # 家长监护
    path('dispute', views.dispute),  # 纠纷处理
]