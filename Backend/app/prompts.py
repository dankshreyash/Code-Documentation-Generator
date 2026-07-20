def get_documentation_prompt(code: str) -> str:
    """Build the documentation generation prompt for the LLM."""
    return f"""You are a senior software engineer.

Generate concise documentation for the provided code.

Return ONLY valid JSON.

Schema:

{{
  "summary":"",
  "functions":"",
  "parameters":"",
  "example":""
}}

Code:
{code}"""
