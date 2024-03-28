// getBlockByHash
import Moralis from "moralis";

export default async function Blocks() {
	try {
		await Moralis.start({
			apiKey: process.env.MORALIS_API_KEY,
		});

		const blockByHash = await Moralis.EvmApi.block.getBlock({
			chain: "0x1",
			blockNumberOrHash: "18541416",
		});

		// getBlockByDate
		const blockByDate = await Moralis.EvmApi.block.getDateToBlock({
			date: "", //TODO: MISSING!!!
			chain: "0x1",
		});
	} catch (err) {
		console.error(err);
	}

	return <div>Blocks</div>;
}
