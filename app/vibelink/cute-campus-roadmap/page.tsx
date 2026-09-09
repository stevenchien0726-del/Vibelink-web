import type { Metadata } from "next";
import { createCampusRoadmap, cuteCampus } from "@/lib/campus-roadmap";
import { CampusRoadmapPage } from "../_components/campus-roadmap";

const roadmap = createCampusRoadmap(cuteCampus);

export const metadata: Metadata = {
  title: `${roadmap.hero.brand} | Campus RoadMap`,
  description: `${roadmap.hero.lead}${roadmap.hero.intro}`,
  openGraph: { title: `${roadmap.hero.brand} Campus RoadMap`, description: roadmap.hero.lead, locale: "zh_TW", type: "website" },
};

export default function Page() {
  return <CampusRoadmapPage roadmap={roadmap} />;
}
