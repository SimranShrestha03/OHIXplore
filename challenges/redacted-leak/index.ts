import type { Challenge } from "../types";

const challenge: Challenge = {
  slug: "redacted-leak",
  title: "The Redacted Leak",
  points: 100,
  order: 7,
  description: `Agent VERITY,

An internal hospital notice surfaced online overnight. It was never for the public, thereby causing fright. Screenshots spread quickly along with a claim. The hospital is hiding critical info - what a shame. The blacked-out section made things look bad. It's a redacted document whose leak has made the management mad. Looks like sensitive guidance info was concealed in the file, With an item removed & truth buried behind black redact style. However, appearances can be deceiving in this moment. A secret maybe hidden, or merely covered in the document. When something is truly removed, it may not be possible to recover, But if it is still there obscured, then it is actually under a cover. You are not here to verify the source, or validate the document. Search for the redacted text - find what lies beneath in this crisis moment.

GHIA intercepted the original document file before it got leaked further.

**So, now download the document (as shared), and look beyond what is visible.**

Find what was meant to disappear, and recover the hidden text exactly as it appears in the file. Submit this recovered text as your flag here.`,
  flag: "Novamedra",
  caseInsensitive: true,
  files: [{"name": "Internal_Hospital_Notice.pdf", "path": "/challenges/redacted-leak/Internal_Hospital_Notice.pdf"}],
};

export default challenge;
