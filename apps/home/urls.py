# -*- coding:utf-8 -*-
# @Time: 6/23/20 10:22 AM
# @Author:bayhax
from django.urls import path
from apps.home import views

urlpatterns = [
    path('index', views.IndexView.as_view()),  # 首页

]