from django.conf.urls import patterns, url
from .models import Prescriptions

#from MedIT import views

from views import (Index, Login, Sign_Up, View_Patient_Details,
                   Edit_Patient_Details, Edit_Prescription_Details,
                   View_Prescription_Details, View_Delivery_Schedule )

urlpatterns = patterns('',
    url(r'^$', Index.as_view(), name='index'),
    url(r'^login', Login.as_view(), name='login'),
    url(r'^signup', Sign_Up.as_view(), name='sign_up'),
    url(r'^(?P<patient_id>\d+)/$', View_Patient_Details.as_view(),
        name='view_patient_details'),
    url(r'^editPatientDetails', Edit_Patient_Details.as_view(),
    url(r'^editPrescriptionDetails', Edit_Prescription_Details.as_view(),
        name='edit_prescription_details'),
    url(r'^viewPrescriptionDetails', View_Prescription_Details.as_view(),
        name='view_prescription_details'),
    url(r'^viewDeliverySchedule', View_Delivery_Schedule.as_view(),
        name='view_delivery_schedule')

)