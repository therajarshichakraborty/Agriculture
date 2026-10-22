import { Section, Reveal } from "@/src/components/aceternity/section";
import LeetCodeCard from "@/app/components/leetcode/LeetCodeCard";
import LeetCodeGraph from "@/app/components/leetcode/LeetCodeGraph";
import DSASheetsCard from "@/app/components/leetcode/DSASheetsCard";
import ContestRatingChart from "@/src/components/charts/ContestRatingChart";
import { getContestData } from "@/src/lib/leetcode/getContestData";
import { HOME_WIDTH } from "@/src/components/home/About";

const LEETCODE_USER = "rajarshi_2005";

export async function DSA() {
  const history: {
    rating: number;
    ranking: number;
    contest: { title: string; startTime: number };
  }[] = await getContestData(LEETCODE_USER);
  const contests = history.map((item, i) => ({
    date: new Date(item.contest.startTime * 1000).toLocaleDateString("en-GB", {
      month: "short",
      year: "2-digit"
    }),
    fullDate: new Date(item.contest.startTime * 1000).toLocaleDateString(
      "en-US",
      { month: "short", day: "numeric", year: "numeric" }
    ),
    title: item.contest.title,
    rating: Math.round(item.rating),
    ranking: item.ranking,
    contestAttend: i + 1
  }));

  return (
    <Section
      id="dsa"
      eyebrow="Problem Solving"
      title="My DSA journey, in numbers."
      description="Consistent practice on LeetCode: live stats, contest rating and the sheets I train with."
      className={HOME_WIDTH}
    >
      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <LeetCodeCard />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <ContestRatingChart data={contests} />
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-5">
          <LeetCodeGraph />
        </Reveal>
        <Reveal delay={0.2} className="lg:col-span-5">
          <DSASheetsCard />
        </Reveal>
      </div>
    </Section>
  );
}
