import type { Challenge } from "../types";

const challenge: Challenge = {
  slug: "quiet-retraction",
  title: "The Quiet Retraction",
  points: 100,
  order: 6,
  description: `Agent VERITY,

*"Some stories don't have a quiet fading. An article gained rapid attention & heavy sharing, And earned public trust, Before its credibility hit the dust. It appeared in screenshots, blogs, threads, & still gets citation. There is just one problem - it no longer stands as a publication."*

GHIA analysts traced a widely cited claim back to a single scientific paper. At the time of publication:

- It appeared legitimate
- It was hosted on a trusted database
- It carried the weight of science

The article became influential.
Later, something changed.

Here is the article as it exists today: https://pubmed.ncbi.nlm.nih.gov/37534766/

The above webpage clearly signals a wrong deed. GHIA analysts recognize that there is a problem indeed. The retract terminology is used when a publication's credibility is dead. This article still exists & gets cited, but the database marked it with a flag in red. When did the PubMed retract this study with a withdrawal action? That date is your flag here in the context of this quiet retraction.

That date, as referred to in the above question, is your flag here in the following format: **YYYY-MM-DD** (submit your answer only in this date format)`,
  flag: "2026-01-16",
  caseInsensitive: true,
};

export default challenge;
