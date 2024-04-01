import Moralis from "moralis";

export default async function blocks() {
	try {
		await Moralis.start({
			apiKey: process.env.MORALIS_API_KEY,
		});

		// getLogsByContract
		const contractLogs = await Moralis.EvmApi.events.getContractLogs({
			chain: "0x1",
			order: "DESC",
			address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
			topic0: "", // TODO: MISSING!
		});

		// getEventsByContract
		const contractEvents = await Moralis.EvmApi.events.getContractEvents({
			chain: "0x1",
			order: "DESC",
			address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
			abi: {}, // TODO: MISSING!
			topic: "", // TODO: MISSING!
		});

		return { contractLogs, contractEvents };
	} catch (err) {
		console.error(err);
	}
}
