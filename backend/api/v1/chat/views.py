from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from core.ai import complete

CHAT_SYSTEM_PROMPT = """You are a helpful and intelligent AI assistant.
When solving complex problems or explaining difficult concepts, you SHOULD use a 'thought' block to show your reasoning process.
Wrap your internal monologue/reasoning in <thought> tags at the beginning of your response.
Follow the thoughts with your actual response to the user.

Example:
<thought>
The user is asking about React hooks. I should explain the specific hook they mentioned and provide a clear example.
</thought>
Sure! Here's how that hook works...
"""

class ChatCompleteView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user_prompt = request.data.get("content", "")
        history = request.data.get("history", [])

        if not user_prompt:
            return Response(
                {"error": "Content is required"}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        # Convert history to OpenAI message format if provided
        # [{role: 'user', content: '...'}, ...]
        extra_messages = []
        for msg in history:
            extra_messages.append({
                "role": msg.get("role", "user"),
                "content": msg.get("content", "")
            })

        response_content = complete(
            user_prompt=user_prompt,
            system_prompt=CHAT_SYSTEM_PROMPT,
            extra_messages=extra_messages,
        )

        return Response({"content": response_content})
