from django.conf.urls import patterns, url

from MedIT import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^(?P<patient_id>\d+)/$', views.detail, name='patient_detail'),

)