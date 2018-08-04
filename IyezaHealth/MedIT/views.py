
from django.http import HttpResponse
<<<<<<< Updated upstream
from .models import Patient, MedicalInfo, Prescriptions,CompletedDeliveries
||||||| merged common ancestors
=======
from models import Prescriptions
from django.views.generic import ListView, DetailView, FormView, CreateView, \
    DeleteView, UpdateView
>>>>>>> Stashed changes


class Index(ListView):
    pass

class Login(ListView):
    pass


class Sign_Up(CreateView):
    pass

class Create_Patient_Details(CreateView):
    pass


class View_Patient_Details(DetailView):
    pass


class Edit_Patient_Details(CreateView):
    pass


class Create_Prescription_Details(CreateView):
    pass


class Edit_Prescription_Details(CreateView):
    """
        A view that handles the creation of a patient prescriptions.
    """
    model = Prescriptions
    template_name = 'templates/edit_prescription_details.html'
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