import type { Challenge } from "../types";

const challenge: Challenge = {
  slug: "expert-quote-loop",
  title: "The Expert Quote Loop",
  points: 100,
  order: 4,
  description: `Agent Verity,

*"A quote from a medical expert is everywhere. So much so that people have to care. News articles cite it and blogs repeat this action. Social media posts amplify it to draw public attenion. Distortion Network (DN) ensures that it sounds authoritative enough. They make it appear settled medical truth - denial is tough. Yet no one can find the original source of the shared quote. There is an inherent problem pattern - please take a note."*

GHIA traced the claim and found this following pattern:

**Article A** "According to a CDC expert, the flu shot was 'disastrous' this year." Source: Article B

**Article B** "Medical experts warn the public based on recent CDC commentary." Source: Article C

**Article C** "As reported earlier, a CDC doctor confirmed concerns." Source: Article D

**Article D** "This statement has been echoed across multiple health outlets." Source: Article A

*"No article provides a direct transcript, original interview, or a genuine source of study. Credibility exists only through repetition and it appears as a fact to everybody."*

**Your Task:** You are not judging or finding out as to whether the quote is true or not. Identify the action or technique behind the credibility manufacturing plot. The DN actually creates an illusion of verification, When media outlets cite each other in a looping action. Here credibility is built on a 'mirrors facing mirrors' theme. Therein lies the whole trick and the grand scheme. Verification exists - this is what people are being made to believe everyday. This is only because of what others - the experts apparently quote & say.

What action/technique/scheme is at work here? Break the loop, and identify it, as it is the reason behind this problem pattern. That name of this action or technique is your flag. Submit that name as your answer.`,
  // TODO confirm intended answer; any entry in the list is accepted.
  flag: ["Circular Reporting", "Circular Citation", "Circular Sourcing", "Citogenesis"],
  caseInsensitive: true,
};

export default challenge;
