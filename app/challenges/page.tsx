import { challenges, toPublic } from "@/challenges";
import ChallengeBoard from "@/components/ChallengeBoard";

export const metadata = { title: "Challenges · OHI Xplore" };

export default function ChallengesPage() {
  return (
    <main className="challenges-page">
      <header className="challenges-hero"><h1>Challenges</h1></header>
      <ChallengeBoard challenges={challenges.map(toPublic)} />
      <footer className="challenges-foot">
        Global Health Intelligence Agency (GHIA) &nbsp;|&nbsp; The Distortion Protocol
      </footer>
    </main>
  );
}
