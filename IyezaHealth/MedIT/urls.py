from django.conf.urls import patterns, url
from .views import *

urlpatterns = patterns('',
    url(r'^$', Index.as_view(), name='index'),
    url(r'^login', Login.as_view(), name='login'),

    url(r'^(?P<patient_id>\d+)/$', PatientDetailView.as_view(),
        name='view_patient_details'),
    url(r'^createPatientDetails', PatientCreateView.as_view(),
        name='view_patient_details'),
    url(r'^editPatientDetails',
        PatientUpdateView.as_view(),
        name='view_patient_details'),
    url(r'^createPrescriptionDetails', PrescriptionCreateView.as_view(),
        name='edit_prescription_details'),
    url(r'^editPrescriptionDetails',
       PrescriptionUpdateView.as_view(),
        name='edit_prescription_details'),
    url(r'^viewPrescriptionDetails',
        PrescriptionDetail.as_view(),
        name='view_prescription_details'),
    url(r'^viewDeliverySchedule',
       DeliveryDetail.as_view(),
        name='view_delivery_schedule'),

    url(r'^patient_details',
        PrescriptionCreateView.as_view(), name='patient_list'),

     url(r'^prescription_list',
         PrescriptionDetail.as_view(), name='prescription_list'),

    url(r'^delivery_view',
        delivery_view, name='delivery_view'),
)