from fastapi import APIRouter, HTTPException
from app.schemas import CodeRequest, DocumentationResponse
from app.llm import generate_documentation

router = APIRouter()


@router.post("/generate", response_model=DocumentationResponse)
async def generate(request: CodeRequest):
    """Generate AI documentation for the provided code."""

    # Validate input
    if not request.code.strip():
        raise HTTPException(status_code=400, detail="Code input cannot be empty")

    if not request.language.strip():
        raise HTTPException(status_code=400, detail="Language must be specified")

    try:
        result = await generate_documentation(request.code)
        return DocumentationResponse(**result)

    except ValueError as e:
        raise HTTPException(status_code=422, detail=f"Invalid API response: {str(e)}")

    except RuntimeError as e:
        raise HTTPException(status_code=502, detail=str(e))

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")
