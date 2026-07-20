/**
 * Format documentation object as a Markdown string and trigger download.
 * @param {object} documentation - The documentation object with summary, functions, parameters, example.
 */
export const downloadMarkdown = (documentation) => {
  const markdown = `# Code Documentation

## Summary

${documentation.summary}

## Functions

${documentation.functions}

## Parameters

${documentation.parameters}

## Example Usage

${documentation.example}
`;

  const blob = new Blob([markdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "documentation.md";
  link.click();

  URL.revokeObjectURL(url);
};
