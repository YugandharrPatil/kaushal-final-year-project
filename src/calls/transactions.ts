import Moralis from "moralis";

export default async function transactions() {
	try {
		await Moralis.start({
			apiKey: process.env.MORALIS_API_KEY,
		});

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

		return { decodedWalletTransaction, transactionByHash, decodedTransactionByHash, internalTransactions, walletTransactions };
	} catch (err) {
		console.error(err);
	}
}
