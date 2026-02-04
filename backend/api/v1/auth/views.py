from django.conf import settings
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
    permission_classes = [AllowAny]

    @extend_schema(request=SignUpSerializer, responses={200: UserSerializer})
    def post(self, request):
        serializer = SignUpSerializer(data=request.data)
        if not serializer.is_valid():
            return error_response(message="Validation Error", errors=serializer.errors)

        username = serializer.validated_data["username"]
        password = serializer.validated_data.get("password")

        if settings.ENABLE_AUTH:
            if User.objects.filter(username=username).exists():
                return error_response(
                    message="Username already exists", error_code="USERNAME_TAKEN"
                )
            user = User.objects.create_user(username=username, password=password)
        else:
            # Auth Disabled: Get or create without password check
            user, created = User.objects.get_or_create(username=username)
            if created:
                user.set_unusable_password()
                user.save()

        # Create User Profile if phone number exists
        phone_number = serializer.validated_data.get("phone_number")
        if phone_number:
            UserProfile.objects.get_or_create(
                user=user, defaults={"phone_number": phone_number}
            )

        # Generator Tokens
        refresh = RefreshToken.for_user(user)

        return success_response(
            message=(
                "User created successfully"
                if settings.ENABLE_AUTH
                else "User logged in (Auth Disabled)"
            ),
            data={
                "user": UserSerializer(user).data,
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            },
        )


class MeView(APIView):
    permission_classes = [IsAuthenticated]

    @extend_schema(responses={200: UserSerializer})
    def get(self, request):
        return success_response(
            message="User info retrieved", data=UserSerializer(request.user).data
        )


class LoginView(APIView):
    permission_classes = [AllowAny]

    @extend_schema(request=LoginSerializer, responses={200: UserSerializer})
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if not serializer.is_valid():
            return error_response(message="Validation Error", errors=serializer.errors)

        username = serializer.validated_data["username"]
        password = serializer.validated_data.get("password")

        user = authenticate(username=username, password=password)
        if not user:
            # Fallback for Auth Disabled mode if strictly name matching (optional, but sticking to standard auth first)
            if not settings.ENABLE_AUTH:
                try:
                    user = User.objects.get(username=username)
                except User.DoesNotExist:
                    return error_response(
                        message="Invalid credentials",
                        error_code="INVALID_CREDENTIALS",
                        status_code=401,
                    )
            else:
                return error_response(
                    message="Invalid credentials",
                    error_code="INVALID_CREDENTIALS",
                    status_code=401,
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
