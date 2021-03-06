from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from rest_framework_api_key.models import AbstractAPIKey
from django.utils.timezone import now


class UserAPIKey(AbstractAPIKey):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="api_keys",
    )


class UserSecretKey(models.Model):
    secret = models.CharField(max_length=100)
    key = models.ForeignKey(
        UserAPIKey,
        on_delete=models.CASCADE,
        related_name="api_keys",
    )


class UserHistory(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    api_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    created_date = models.DateTimeField(default=now, editable=False)
