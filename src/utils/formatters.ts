// Helper function to format component names

export type SearchStringSplit = {
  normalizedValue: string;
  rawTokens: string[];
};

export function formatSearchString(value: string): SearchStringSplit | undefined {
  const normalizedValue = value.trim().toLowerCase();

  if (!normalizedValue) {
    return undefined;
  }

  const rawTokens = normalizedValue
    .split(/[^a-z0-9]+/)
    .map((token) => token.trim())
    .filter(Boolean);

  return { normalizedValue, rawTokens };
}

export function formatComponentName(name: string): string {
  return name
    .split("-")
    .map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");
}

export function formatDisplayName(name: string): string {
  return name
    .split("-")
    .map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}



