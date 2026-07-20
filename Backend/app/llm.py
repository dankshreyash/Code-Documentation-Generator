import json
from groq import Groq
from app.config import GROQ_API_KEY
from app.prompts import get_documentation_prompt
from app.utils import parse_llm_response


# Initialize Groq client
client = Groq(api_key=GROQ_API_KEY)


async def generate_documentation(code: str) -> dict:
    """
    Send code to Groq LLM and return parsed documentation JSON.
    Uses llama-3.3-70b-versatile model for high-quality output.
    """
    prompt = get_documentation_prompt(code)

    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": "You are a senior software engineer. Return ONLY valid JSON."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.3,
            max_tokens=2048
        )

        raw_content = response.choices[0].message.content
        parsed = parse_llm_response(raw_content)

        # Validate required keys and ensure all values are strings
        required_keys = ["summary", "functions", "parameters", "example"]
        for key in required_keys:
            if key not in parsed:
                parsed[key] = "Not available"
            elif not isinstance(parsed[key], str):
                # LLM sometimes returns nested dicts/lists — flatten to readable string
                parsed[key] = json.dumps(parsed[key], indent=2)

        return parsed

    except Exception as e:
        raise RuntimeError(f"Groq API error: {str(e)}")
