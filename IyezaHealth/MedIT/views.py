from django.views.generic import TemplateView
from django.http import HttpResponse
from .models import Patient, MedicalInfo, Prescriptions,CompletedDeliveries
from models import Prescriptions
from django.views.generic import ListView, DetailView, FormView, CreateView, \
    DeleteView, UpdateView


class Index(ListView):
    model = Prescriptions
    template_name = 'templates/index.html'
    context_object_name = 'index'


class Login(CreateView):
    model = Prescriptions
    template_name = 'templates/login.html'
    context_object_name = 'login'


class Sign_Up(CreateView):
    model = Prescriptions
    template_name = 'templates/sign_up.html'
    context_object_name = 'sign_up'


class Create_Patient_Details(CreateView):
    model = Prescriptions
    template_name = 'templates/edit_patient_details.html'


class View_Patient_Details(DetailView):
    model = Prescriptions
    template_name = 'templates/view_patient_details.html'
    context_object_name = 'patient_view'


class Edit_Patient_Details(CreateView):
    model = Prescriptions
    template_name = 'templates/edit_patient_details.html'


class Create_Prescription_Details(CreateView):
    model = Prescriptions
    template_name = 'templates/edit_patient_details.html'


class Edit_Prescription_Details(CreateView):
    """
        A view that handles the creation of a patient prescriptions.
    """
    model = Prescriptions
    template_name = 'templates/prescriptions_list.html'
    fields = ['treatment_type', 'clinic_pickup', 'medications', 'pick_date',
              'treatment_status']

    def form_valid(self, form):
        # set the created by and modified by fields
        form.instance.created_by = self.request.user
        form.instance.last_modified_by = self.request.user


class View_Prescription_Details(DetailView):
    """
        A view that handles displaying details of a patients prescriptions
    """
    model = Prescriptions
    template_name = 'templates/view_prescription_details.html'
    context_object_name = 'view_prescription'


class View_Delivery_Schedule(DetailView):
    model = CompletedDeliveries
    template_name = 'templates/view_delivery_schedules.html'
    context_object_name = 'schedule_view'