import { getLeetCodeStats } from "@/lib/leetcode";
import LeetCodeCardUI from "./LeetCodeCardUI";

async function LeetCodeCard() {
  const data = await getLeetCodeStats("rajarshi_2005");

  return <LeetCodeCardUI data={data} />;
}

export default LeetCodeCard;
