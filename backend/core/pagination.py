"""Standard pagination configuration for the API."""
from rest_framework.pagination import PageNumberPagination


class StandardPagination(PageNumberPagination):
    """
    Standard pagination class with fixed page size and dynamic query params.
    """
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 100
