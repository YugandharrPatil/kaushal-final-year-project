import Moralis from "moralis";

export default async function stats() {
	try {
		await Moralis.start({
			apiKey: process.env.MORALIS_API_KEY,
		});

		// getBlockStats
		const blockStats = await Moralis.EvmApi.block.getBlockStats({
			chain: "0x1",
			blockNumberOrHash: "1023323",
		});

		return { blockStats };
	} catch (err) {
		console.error(err);
	}
}
