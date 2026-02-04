from django.urls import include, path

# Register feature URLs here
urlpatterns = [
    path("auth/", include("api.v1.auth.urls")),
]
