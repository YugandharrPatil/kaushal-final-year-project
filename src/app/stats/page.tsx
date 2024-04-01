import stats from "@/calls/stats";
import Heading from "../components/heading";

export default async function StatsPage() {
	const data = await stats();
	const blockStats = data?.blockStats;
	return (
		<div>
			<Heading>Stats</Heading>
			<p>NFT Transfers: {blockStats?.raw.nft_transfers.total}</p>
			<p>Total Transactions: {blockStats?.raw.transactions.total}</p>
		</div>
	);
}
