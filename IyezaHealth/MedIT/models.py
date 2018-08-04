from django.db import models
from django.contrib.auth.models import User


class IyezaUser(User):

    class Meta:
        proxy = True


class Patient(models.Model):
    id_no = models.BigIntegerField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=500)
    email = models.EmailField(max_length=500)
    cellphone = models.BigIntegerField()
    gender = models.CharField(max_length=10)
    next_of_kin_name = models.CharField(max_length=50)
    next_of_kin_cell = models.CharField(max_length=10)
    enrollment_date = models.DateField()


class MedicalInfo(models.Model):
    id_no = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor_name = models.CharField(max_length=50)
    doctor_cell = models.BigIntegerField()
    medical_aid_no = models.BigIntegerField()
    medical_aid_scheme = models.CharField(max_length=50)


class Prescriptions(models.Model):
    id_no = models.ForeignKey(Patient, on_delete=models.CASCADE)
    treatment_type = models.CharField(max_length=80)
    clinic_pickup = models.CharField(max_length=100)
    medications = models.CharField(max_length=200)
    pick_date = models.DateField()
    treatment_status = models.CharField(max_length=20,
                                        choices=(('Current', 'Current'),
                                        ('Discontinued', 'Discontinued')))


class CompletedDeliveries(models.Model):
    id_no = models.ForeignKey(Patient, on_delete=models.CASCADE)
    date_delivered = models.DateField()

