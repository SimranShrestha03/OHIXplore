import type { Challenge } from "../types";

const challenge: Challenge = {
  slug: "withdrawn-article",
  title: "The Case Of The Withdrawn Article",
  points: 100,
  order: 5,
  description: `Agent VERITY,

*"Every large misinformation wave starts from some source, Before making headlines, before creating media frenzy, before panic sets course."*

GHIA has traced a false narrative or misinformation to its point of origin: a preprint article that was published & shared widely before it was eventually challenged and withdrawn.

*"You are not being asked here to validate the article or judge the science behind it. Understand how claims persist even when credibility collapses for the published."*

Click the link below to be directed to the original preprint posting of this article where the study first appeared before journal publication and later withdrawal.

**[Research Square – Elgazzar et al. ivermectin study]** https://www.researchsquare.com/article/rs-100956/v1

Take a look at the above article. Since this is the original source from where all sorts of misinformation originated, you should always find the primary source from which the media creates news and social media spreads stuff. So, visit the above site first and simply glance through to get a general idea of how it looks.

For solving this challenge and for finding the flag, solve one of these following riddles (the 2 riddles below lead to the same answer, but convey separate thinking).

*This study was amplified, disputed, and rescinded. Titles changed, claims collapsed and publication credits ended. Across every version of it, one identifier remained the same. Now find this constant or fixed identifier - get the name.*

**Or**

*Published articles can be rescinded. Headlines or titles can be mended, But citations still point somewhere. Locate the anchor or source that points there. This is the identifier that a citation link does bear.*`,
  // TODO confirm intended answer (DOI vs rs-100956); any entry in the list is accepted.
  flag: ["10.21203/rs.3.rs-100956/v1", "10.21203/rs.3.rs-100956", "rs-100956", "rs.3.rs-100956", "DOI"],
  caseInsensitive: true,
};

export default challenge;
