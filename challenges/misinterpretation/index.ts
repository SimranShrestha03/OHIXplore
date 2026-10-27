import type { Challenge } from "../types";

const challenge: Challenge = {
  slug: "misinterpretation",
  title: "The Misinterpretation",
  points: 100,
  order: 9,
  description: `Agent VERITY, note that this time:

The Distortion Network (DN) didn't spread false information. They just reused a real public reporting system in action. They didn't make medical claims or false allegations. Across widely used platforms, a single website began circulations. They didn't tell people what to believe. Yet belief shifted, and people might be left to grieve.

**Emergency departments later reported hesitancy in patient choice regarding the COVID vaccine. Now GHIA needs you to determine why.**

Use the link to the website below & check it out exactly as the public sees info there. https://openvaers.com/covid-data

![OpenVAERS COVID data page](/challenges/misinterpretation/openvaers.png)

On the above webpage, do a thorough review. Look carefully under the disclaimer view. Read the VAERS data related key consideration & limitation. Find out who is assigned responsibility & give your full attention.

According to the disclaimer, where are further studies conducted if a safety signal is found in VAERS? The answer to the above question is your flag here. **Your answer should be in abbreviated form separated by a comma, with no spaces.**`,
  flag: "VSD,CISA",
  caseInsensitive: true,
};

export default challenge;
