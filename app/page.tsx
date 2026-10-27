import EnterChallenges from "@/components/EnterChallenges";

export default function Home() {
  return (
    <main className="landing">
      <h1>WELCOME TO THE OHI XPLORE CTF</h1>
      <p className="sub">Online Health Information Exploration Challenges</p>
      <p className="lead">
        Train your problem-solving skills, explore OHI topics, including misinfo concepts, and work on
        hands-on challenges designed to help you learn by doing.
      </p>
      <EnterChallenges />
    </main>
  );
}
