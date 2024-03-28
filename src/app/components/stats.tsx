import Moralis from "moralis";

export default async function Stats() {
	try {
		await Moralis.start({
			apiKey: process.env.MORALIS_API_KEY,
		});
		const blockStats = await Moralis.EvmApi.block.getBlockStats({
			chain: "0x1",
			blockNumberOrHash: "1023323", // TODO: parse number as string dynamically
		});
	} catch (err) {
		console.error(err);
	}

	return <div>Stats</div>;
}
