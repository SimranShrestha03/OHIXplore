import type { Challenge } from "../types";

const challenge: Challenge = {
  slug: "hidden-disclaimer",
  title: "The Hidden Disclaimer",
  points: 100,
  order: 8,
  description: `Agent VERITY, the Anecdote Overload operation confirmed our suspicion that the misinformation campaign driven false narrative messages are not organic.

GHIA has intercepted an internal message used by The Distortion Network (DN) to coordinate misinformation drops across platforms. The message was not meant to be secret forever - only long enough to synchronize action. This transmission message might contain direct instructions on amplifying false narrative to drive misinformation.

Your task is simple and critical as described below:

Recover the encoded message by cracking the transmitted code. It was intended to be read in a specific cipher mode. Time is of essence here, as we depend on your skill. Need to beat the DN operators before they go for the kill. Decode the intercepted message & feel free to use a tool. Win this battle by your wits as an agent smart & cool.

You may try to figure out the original message by shifting letters until the hidden instruction text becomes readable. Recover the original message exactly as written.

**Submit the decoded message in ALL CAPS (as your flag here), exactly as written, with spaces preserved.**

QVFPYNVZRE: ABANQIVFBEL`,
  flag: "DISCLAIMER: NONADVISORY",
  caseInsensitive: true,
};

export default challenge;
