import { NextResponse } from "next/server";
import { getChallenge } from "@/challenges";

export async function POST(req: Request) {
  const { slug, flag } = (await req.json().catch(() => ({}))) as { slug?: string; flag?: string };
  const challenge = slug ? getChallenge(slug) : undefined;
  if (!challenge || typeof flag !== "string") {
    return NextResponse.json({ status: "invalid", message: "Bad request" }, { status: 400 });
  }
  const norm = (s: string) => (challenge.caseInsensitive ? s.trim().toLowerCase() : s.trim());
  const correct = norm(flag) === norm(challenge.flag);
  return NextResponse.json(
    correct
      ? { status: "correct", message: "Correct!" }
      : { status: "incorrect", message: "Incorrect" },
  );
}
