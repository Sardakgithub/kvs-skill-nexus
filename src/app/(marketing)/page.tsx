import { Hero } from "@/components/marketing/hero";
import TrustedBy from "@/components/marketing/trusted-by/TrustedBy";
import Features from "@/components/marketing/Features";
import Roadmaps from "@/components/marketing/Roadmaps";
import AIGuidance from "@/components/marketing/AIGuidance";
import LearningPlatform from "@/components/marketing/LearningPlatform";
import Mentors from "@/components/marketing/Mentors";
import HowItWorks from "@/data/mock/how-it-works/HowItWorks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Roadmaps />
      <AIGuidance />
      <LearningPlatform />
      <Mentors />
    </>
  );
}