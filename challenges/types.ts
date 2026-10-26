export type ChallengeFile = {
  name: string;
  /** Public URL, e.g. "/challenges/survey/evidence.pdf" (file lives in public/challenges/<slug>/) */
  path: string;
};

export type Challenge = {
  /** Unique, URL-safe. Must match the folder name. */
  slug: string;
  title: string;
  points: number;
  /** Display order on the grid (lower first). */
  order: number;
  /**
   * Minimal markdown: blank line = paragraph, **bold**, *italic*, [text](url),
   * ![alt](/challenges/<slug>/img.png), bare https:// links.
   */
  description: string;
  /** Server-side only. Never sent to the browser. A list accepts any of its entries. */
  flag: string | string[];
  /** Match flag ignoring case. Default false. */
  caseInsensitive?: boolean;
  hints?: string[];
  files?: ChallengeFile[];
};

/** What the browser is allowed to see. */
export type PublicChallenge = Omit<Challenge, "flag" | "caseInsensitive">;
