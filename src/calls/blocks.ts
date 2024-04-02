import Moralis from "moralis";

export default async function blocks() {
	try {
		await Moralis.start({
			apiKey: process.env.MORALIS_API_KEY,
		});

		// getBlockHash
		const blockHash = await Moralis.EvmApi.block.getBlock({
			chain: "0x1",
			blockNumberOrHash: "18541416", // TODO: NUMBER PASSED AS STRING
		});

		// getBlockByDate
		// const blockByDate = await Moralis.EvmApi.block.getDateToBlock({
		// 	chain: "0x1",
		// 	date: "currentDate", // TODO: MISSING!
		// });

		return { blockHash };
	} catch (err) {
		console.error(err);
	}
}
