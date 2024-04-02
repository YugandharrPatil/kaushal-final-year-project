import blocks from "@/calls/blocks";
import Heading from "../components/heading";

export default async function BlocksPage() {
	const data = await blocks();
	const blockByHash = data?.blockHash;
	// const blockByDate = data?.blockByDate;

	return (
		<div>
			<Heading>Stats</Heading>
			<h1 className="text-xl bg-gray-500 font-bold text-center">Block By Hash</h1>
			<p>{blockByHash?.raw.timestamp}</p>
			<p>{blockByHash?.raw.transactions[0].from_address}</p>
			<p>{blockByHash?.raw.transactions[0].to_address}</p>
			<p>{blockByHash?.raw.transactions[0].receipt_contract_address}</p>
			<p>{blockByHash?.raw.receipts_root}</p>
			<h1 className="text-xl bg-gray-500 font-bold text-center">Block By Date</h1>
			<p>{}</p>
		</div>
	);
}
