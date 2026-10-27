export const STORE = "ohix-solved";

export function readSolved(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORE) || "[]");
  } catch {
    return [];
  }
}

export function clearSolved() {
  try {
    localStorage.removeItem(STORE);
  } catch {}
}
