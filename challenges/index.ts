import type { Challenge, PublicChallenge } from "./types";
import survey from "./survey";
import magnetClaim from "./magnet-claim";
import viralPostsMedicalDrug from "./viral-posts-medical-drug";
import manipulationTechnique from "./manipulation-technique";
import expertQuoteLoop from "./expert-quote-loop";
import withdrawnArticle from "./withdrawn-article";
import quietRetraction from "./quiet-retraction";
import redactedLeak from "./redacted-leak";
import hiddenDisclaimer from "./hidden-disclaimer";
import misinterpretation from "./misinterpretation";
import decorationSignal from "./decoration-signal";

// Add / remove a challenge by editing this list only.
export const challenges: Challenge[] = [
  survey,
  magnetClaim,
  viralPostsMedicalDrug,
  manipulationTechnique,
  expertQuoteLoop,
  withdrawnArticle,
  quietRetraction,
  redactedLeak,
  hiddenDisclaimer,
  misinterpretation,
  decorationSignal,
].sort((a, b) => a.order - b.order);

export function toPublic({ flag: _flag, caseInsensitive: _ci, ...rest }: Challenge): PublicChallenge {
  return rest;
}

export function getChallenge(slug: string) {
  return challenges.find((c) => c.slug === slug);
}
