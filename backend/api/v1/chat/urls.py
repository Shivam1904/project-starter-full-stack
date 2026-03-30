from django.urls import path
from .views import ChatCompleteView

urlpatterns = [
    path("complete/", ChatCompleteView.as_view(), name="chat_complete"),
]
