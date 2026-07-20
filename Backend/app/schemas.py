from pydantic import BaseModel


class CodeRequest(BaseModel):
    """Request schema for the /generate endpoint."""
    language: str
    code: str


class DocumentationResponse(BaseModel):
    """Response schema containing generated documentation."""
    summary: str
    functions: str
    parameters: str
    example: str
