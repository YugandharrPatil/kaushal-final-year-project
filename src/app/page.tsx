import { config } from "dotenv";
import Moralis from "moralis";
import Block from "./components/block";
import Heading from "./components/heading";
config();

const getData = async () => {
	try {
		// response not required here, just execution
		await Moralis.start({
			apiKey: process.env.MORALIS_API_KEY,
		});

		// CALLS

		// GET BLOCKS

		// getBlockByHash
		const blockByHash = await Moralis.EvmApi.block.getBlock({
			chain: "0x1",
			blockNumberOrHash: "18541416",
		});

		// getBlockByDate
		// const blockByDate = await Moralis.EvmApi.block.getDateToBlock({
		// 	date: "", //TODO: MISSING!!!
		// 	chain: "0x1",
		// });

		// Get Transactions

		// getDecodedWalletTransaction
		const decodedWalletTransaction = await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({
			chain: "0x1",
			order: "DESC",
			address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
		});

		// getTransactionByHash
		const transactionByHash = await Moralis.EvmApi.transaction.getTransaction({
			chain: "0x1",
			transactionHash: "0xdc85cb1b75fd09c2f6d001fea4aba83764193cbd7881a1fa8ccde350a5681109",
		});

		// getDecodedTransactionByHash
		const decodedTransactionByHash = await Moralis.EvmApi.transaction.getTransactionVerbose({
			chain: "0x1",
			transactionHash: "0x012b9b98e21664117ec0b499d726a39f492ac8bd402cca8bebcbd163b9f75760",
		});

		// getInternalTransactions
		const internalTransactions = await Moralis.EvmApi.transaction.getInternalTransactions({
			chain: "0x1",
			transactionHash: "0xdc85cb1b75fd09c2f6d001fea4aba83764193cbd7881a1fa8ccde350a5681109",
		});

		// getWalletTransactions
		const walletTransactions = await Moralis.EvmApi.transaction.getWalletTransactions({
			chain: "0x1",
			order: "DESC",
			address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
		});

		// GET LOGS
		// getContractLogs
		// const contractLogs = await Moralis.EvmApi.events.getContractLogs({
		// 	chain: "0x1",
		// 	order: "DESC",
		// 	address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
		// 	topic0: "", // TODO: MISSING!!!
		// });

		// getContractEvents
		// const contractEvents = await Moralis.EvmApi.events.getContractEvents({
		// 	chain: "0x1",
		// 	order: "DESC",
		// 	address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
		// 	abi: {}, // TODO: MISSING
		// 	topic: "",
		// });

		// GET STATS

		// getBlockStats
		// const blockStats = await Moralis.EvmApi.block.getBlockStats({
		// 	chain: "0x1",
		// 	blockNumberOrHash: "1023323", // TODO: parse number as string dynamically
		// });

		return {
			blocks: { blockByHash },
			// transactions: { decodedWalletTransaction, transactionByHash, decodedTransactionByHash, internalTransactions, walletTransactions },
			// logs: { contractLogs, contractEvents },
			// stats: { blockStats },
		};
	} catch (err) {
		console.error(err);
	}
};

export default async function HomePage() {
	const data = await getData();
	const t = data?.blocks.blockByHash.raw.transactions;
	// const logs = data?.blocks.blockByHash.raw.transactions[0].logs
	// const internetTransactions = data?.blocks.blockByHash.raw.transactions[0].internal_transactions
	return (
		<main className="flex">
			<Block>
				<Heading>Block Stats</Heading>
				<div>
					{/* <p>{data?.blocks.blockByHash?.raw.timestamp}</p>
					<p>{data?.blocks.blockByHash?.raw.number}</p>
					<p>{data?.blocks.blockByHash?.raw.hash}</p>
					<p>{data?.blocks.blockByHash?.raw.parent_hash}</p>
					<p>{data?.blocks.blockByHash?.raw.nonce}</p>
					<p>{data?.blocks.blockByHash?.raw.sha3_uncles}</p>
					<p>{data?.blocks.blockByHash?.raw.transactions_root}</p>
					<p>{data?.blocks.blockByHash?.raw.state_root}</p>
					<p>{data?.blocks.blockByHash?.raw.receipts_root}</p>
					<p>{data?.blocks.blockByHash?.raw.miner}</p>
					<p>{data?.blocks.blockByHash?.raw.difficulty}</p>
					<p>{data?.blocks.blockByHash?.raw.total_difficulty}</p>
					<p>{data?.blocks.blockByHash?.raw.size}</p>
					<p>{data?.blocks.blockByHash?.raw.extra_data}</p>
					<p>{data?.blocks.blockByHash?.raw.gas_limit}</p>
					<p>{data?.blocks.blockByHash?.raw.gas_used}</p>
					<p>{data?.blocks.blockByHash?.raw.transaction_count}</p> */}
					<h3 className="text-xl font-bold">Transactions</h3>
					{t?.map((item) => (
						<p key={item}>{item.block_hash}</p>
					))}
				</div>
				<div className=""></div>
			</Block>
		</main>
	);
}
