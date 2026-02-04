"""Views for managing user profiles."""
from drf_spectacular.utils import extend_schema
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from apps.profiles.models import UserProfile
from core.responses import error_response, success_response

from .serializers import UserProfileSerializer


class ProfileMeView(APIView):
    """View to retrieve or update the authenticated user's profile."""
    permission_classes = [IsAuthenticated]

    @extend_schema(responses=UserProfileSerializer)
    def get(self, request):
        """Retrieve the current user's profile."""
        # "Just works"™ logic
        profile, _ = UserProfile.objects.get_or_create(user=request.user)
        serializer = UserProfileSerializer(profile)
        return success_response(data=serializer.data)

    @extend_schema(request=UserProfileSerializer, responses=UserProfileSerializer)
    def patch(self, request):
        """Update fields on the current user's profile."""
        profile, _ = UserProfile.objects.get_or_create(user=request.user)
        serializer = UserProfileSerializer(profile, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return success_response(message="Profile updated", data=serializer.data)

        return error_response(message="Validation Error", errors=serializer.errors)
