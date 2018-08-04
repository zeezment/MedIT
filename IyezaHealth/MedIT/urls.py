from django.conf.urls import patterns, url

from MedIT import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^login', views.login, name='login'),
    url(r'^signup', views.sign_up, name='sign_up'),
    url(r'^(?P<patient_id>\d+)/$', views.view_patient_details,
        name='view_patient_details'),
    url(r'^editPatientDetails', views.edit_patient_details,
        name='edit_patient_details'),
    url(r'^editPrescriptionDetails', views.edit_prescription_details,
        name='edit_prescription_details'),
    url(r'^viewPrescriptionDetails', views.view_prescription_details,
        name='view_prescription_details'),
    url(r'^viewDeliverySchedule', views.view_delivery_schedule,
        name='view_delivery_schedule')

)