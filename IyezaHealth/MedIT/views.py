
from django.http import HttpResponse
from .models import Patient, MedicalInfo, Prescriptions, CompletedDeliveries
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse
from django.views.generic import ListView, DetailView, FormView, CreateView, \
    DeleteView, UpdateView


class Index(ListView):
    model = Patient

class Login(ListView):
    model = Patient






class PatientCreateView(CreateView):
    """
       A view to handle patients sign up
    """
    model = Patient
    template_name = 'patient_form.html'
    fields = ['id_no', 'first_name', 'last_name', 'address', 'email', 'cellphone',
              'gender', 'next_of_kin_name', 'next_of_kin_cell', 'enrollment_date']

    def form_valid(self, form):
        # set the created by and modified by fields
        patient = form.save(commit=False)

        patient.created_by = self.request.user
        patient.last_modified_by = self.request.user

        return super(PatientCreateView.self).form_valid()


class PatientUpdateView(UpdateView):
    """
       A view to handle updating patient information.
    """
    model = Patient
    template_name = 'patient_update_form.html'
    fields = ['address', 'email', 'cellphone',
              'gender', 'next_of_kin_name', 'next_of_kin_cell']
    context_object_name = 'patient'

    def form_valid(self, form):
        # set the created by and modified by fields
        patient = form.save(commit=False)

        patient.last_modified_by = self.request.user

        return super(PatientUpdateView.self).form_valid()

class PatientDetailView(DetailView):
    model = Patient

class PatientListView(ListView):
    model = Patient

class PrescriptionCreateView(CreateView):
    """
            A view that handles the creation of a patient prescriptions.
        """
    model = Prescriptions
    template_name = 'prescription_form.html'
    fields = ['treatment_type', 'clinic_pickup', 'medications', 'pick_date',
              'treatment_status']

    def form_valid(self, form):
        # set the created by and modified by fields
        prescriptions = self.request.user
        form.instance.last_modified_by = self.request.user


class PrescriptionUpdateView(UpdateView):
    """
         A view to handle updating prescription information.
      """
    model = Patient
    template_name = 'prescription_update_form.html'
    fields = ['address', 'email', 'cellphone',
              'gender', 'next_of_kin_name', 'next_of_kin_cell']
    context_object_name = 'patient'

    def form_valid(self, form):
        # set the created by and modified by fields
        patient = form.save(commit=False)

        patient.last_modified_by = self.request.user

        return super(PatientUpdateView.self).form_valid()

class PrescriptionDetail(DetailView):
    model = Patient


class PrescriptionListView(ListView):
    """
        A view that handles displaying details of a patients prescriptions
    """
    model = Prescriptions
    template_name = 'prescription_list.html'
    context_object_name = 'view_prescription'

class DeliveryListView(ListView):
    model = Patient

class DeliveryDetail(DetailView):
    model = Patient



def patient_list(request):
        context = RequestContext(request)
        return render_to_response('patient_list.html', context)

def prescription_list(request):
    context = RequestContext(request)
    return render_to_response('prescription_list.html', context)

def delivery_list(request):
        context = RequestContext(request)
        return render_to_response('delivery_list.html', context)