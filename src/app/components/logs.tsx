import Moralis from "moralis";

export default async function Logs() {
	try {
		await Moralis.start({
			apiKey: process.env.MORALIS_API_KEY,
		});

		// getContractLogs
		const contractLogs = await Moralis.EvmApi.events.getContractLogs({
			chain: "0x1",
			order: "DESC",
			address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
			topic0: "", // TODO: MISSING!!!
		});

		// getContractEvents
		const contractEvents = await Moralis.EvmApi.events.getContractEvents({
			chain: "0x1",
			order: "DESC",
			address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
			abi: {}, // TODO: MISSING
			topic: "",
		});
	} catch (err) {
		console.error(err);
	}

	return <div>Logs</div>;
}
