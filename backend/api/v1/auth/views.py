"""Authentication views for v1 API."""

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from drf_spectacular.utils import extend_schema
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from apps.profiles.models import UserProfile
from core.responses import error_response, success_response

from .serializers import LoginSerializer, SignUpSerializer, UserSerializer


class SignUpView(APIView):
    """View to handle user registration and initial profile setup."""

    permission_classes = [AllowAny]

    @extend_schema(request=SignUpSerializer, responses={200: UserSerializer})
    def post(self, request):
        """Handle POST request for signup."""
        serializer = SignUpSerializer(data=request.data)
        if not serializer.is_valid():
            return error_response(message="Validation Error", errors=serializer.errors)

        username = serializer.validated_data["username"]
        password = serializer.validated_data.get("password")

        if User.objects.filter(username=username).exists():
            return error_response(
                message="Username already exists", error_code="USERNAME_TAKEN"
            )
        user = User.objects.create_user(username=username, password=password)

        # Create User Profile if phone number exists
        phone_number = serializer.validated_data.get("phone_number")
        if phone_number:
            UserProfile.objects.get_or_create(
                user=user, defaults={"phone_number": phone_number}
            )

        # Generator Tokens
        refresh = RefreshToken.for_user(user)

        return success_response(
            message="User created successfully",
            data={
                "user": UserSerializer(user).data,
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            },
        )


class MeView(APIView):
    """View to retrieve information about the currently authenticated user."""

    permission_classes = [IsAuthenticated]

    @extend_schema(responses={200: UserSerializer})
    def get(self, request):
        """Handle GET request for current user info."""
        return success_response(
            message="User info retrieved", data=UserSerializer(request.user).data
        )


class LoginView(APIView):
    """View to handle user authentication and token issuance."""

    permission_classes = [AllowAny]

    @extend_schema(request=LoginSerializer, responses={200: UserSerializer})
    def post(self, request):
        """Handle POST request for login."""
        serializer = LoginSerializer(data=request.data)
        if not serializer.is_valid():
            return error_response(message="Validation Error", errors=serializer.errors)

        username = serializer.validated_data["username"]
        password = serializer.validated_data.get("password")

        user = authenticate(username=username, password=password)
        if not user:
            return error_response(
                message="Invalid credentials",
                error_code="INVALID_CREDENTIALS",
                status=401,
            )

        refresh = RefreshToken.for_user(user)

        return success_response(
            message="Login successful",
            data={
                "user": UserSerializer(user).data,
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            },
        )
