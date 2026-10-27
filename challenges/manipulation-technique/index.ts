import type { Challenge } from "../types";

const challenge: Challenge = {
  slug: "manipulation-technique",
  title: "The Manipulation Technique",
  points: 100,
  order: 3,
  description: `Agent VERITY,

*"The Distortion Network (DN) is evolving, Leading to further misinformation issues that need solving. They're no longer only hiding behind studies or articles to play the 'viral' game, They're also hiding behind stories & anecdotal posts for false social media fame."*

A fast-growing Facebook group claims to be a harmless "support community." No links. No charts. No studies. Just sharing personal experiences. Individually, they are posting nothing, that is provably false. Together, belief is being shaped in this online community group.

Your task is to analyze the post structure and identify the manipulation technique, which is being used here.

![Private Facebook group post and comments|480|block](/challenges/manipulation-technique/group-post.png)

In GHIA's archives, every deception tactic has been documented. Every pattern has been named. The DN doesn't invent - they replicate what works.

*"When the same narrative is echoed by many voices, The people are left with very little choices. When the alignment of personal stories are too perfect, Then misinformation does rise in society to infect. When individual truths create collective deception, What do behavioral scientists call this manipulative action?"*

**Clue:** the technique is named after a brand of artificial grass, because the "grassroots" voices here only look real.

**Submit the name of this manipulative action as your flag: a single word.**`,
  flag: "astroturfing",
  caseInsensitive: true,
};

export default challenge;
