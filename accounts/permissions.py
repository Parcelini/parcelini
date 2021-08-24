from rest_framework_api_key.permissions import BaseHasAPIKey
from .models import UserAPIKey

class HasUserAPIKey(BaseHasAPIKey):
    model = UserAPIKey