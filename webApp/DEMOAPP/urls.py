from django.urls import path, patterns, url
from . import views


urlpatterns = [
    path('', views.hi, name='home-page'),
    path('lesson1', views.lesson1, name='lesson1'),
    path('lesson2', views.lesson2, name='lesson2'),
    path('lesson3', views.lesson3, name='lesson3'),
]

urlpatterns = patterns('',
    url(r'^http://www.firstquiz/', include('quiz.urls'))
)