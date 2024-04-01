import transactions from "@/calls/transactions";
import Heading from "../components/heading";

export default async function TransactionsPage() {
	const data = await transactions();
	const decodedWalletTransaction = data?.decodedWalletTransaction;
	const transactionByHash = data?.transactionByHash;
	// const decodedTransactionByHash = data?.decodedTransactionByHash;
	const internalTransactions = data?.internalTransactions;
	const walletTransactions = data?.walletTransactions;
	// console.log(data?.decodedWalletTransaction.result);
	return (
		<div>
			<Heading>Transactions</Heading>
			<h1 className="text-xl bg-gray-500 font-bold text-center">Decoded Wallet Transaction</h1>
			{/* ONLY FOR FIRST TRANSACTIONS */}
			<p>{decodedWalletTransaction?.raw.result[0].from_address}</p>
			<p>{decodedWalletTransaction?.raw.result[0].to_address}</p>
			<p>{decodedWalletTransaction?.raw.result[0].value}</p>
			<p>{decodedWalletTransaction?.raw.result[0].gas_price}</p>
			<p>{decodedWalletTransaction?.raw.result[0].block_timestamp}</p>
			<p>{decodedWalletTransaction?.raw.result[0].block_number}</p>
			<p>{decodedWalletTransaction?.raw.result[0].block_hash}</p>

			<h1 className="text-xl bg-gray-500 font-bold text-center">Transaction By Hash</h1>
			<p>{transactionByHash?.raw.from_address}</p>
			<p>{transactionByHash?.raw.to_address}</p>
			<p>{transactionByHash?.raw.value}</p>
			<p>{transactionByHash?.raw.gas}</p>
			<p>{transactionByHash?.raw.transaction_index}</p>
			<p>
				Log 1: {transactionByHash?.raw.logs && transactionByHash?.raw.logs[0].transaction_hash}
				{transactionByHash?.raw.logs && transactionByHash?.raw.logs[0].transaction_index}
			</p>
			<p>
				Log 2: {transactionByHash?.raw.logs && transactionByHash?.raw.logs[1].transaction_hash}
				{transactionByHash?.raw.logs && transactionByHash?.raw.logs[1].transaction_index}
			</p>

			<h1 className="text-xl bg-gray-500 font-bold text-center">Internal Transactions</h1>
			<p>{internalTransactions?.raw[0].transaction_hash}</p>
			<p>{internalTransactions?.raw[0].block_number}</p>
			<p>{internalTransactions?.raw[0].block_hash}</p>
			<p>{internalTransactions?.raw[0].type}</p>
			<p>{internalTransactions?.raw[0].from}</p>
			<p>{internalTransactions?.raw[0].to}</p>
			<p>{internalTransactions?.raw[0].value}</p>
			<p>{internalTransactions?.raw[0].gas}</p>
			<p>{internalTransactions?.raw[0].gas_used}</p>
			<p>{internalTransactions?.raw[0].input}</p>
			<p>{internalTransactions?.raw[0].output}</p>

			<h1 className="text-xl bg-gray-500 font-bold text-center">Get Wallet Transactions</h1>
			<p>{walletTransactions?.raw.result[0].from_address}</p>
			<p>{walletTransactions?.raw.result[0].to_address}</p>
			<p>{walletTransactions?.raw.result[0].gas_price}</p>
			<p>{walletTransactions?.raw.result[0].block_timestamp}</p>
		</div>
	);
}

// {result?.map((transaction) => {
// 	let output = "";
// 	for (const [k, v] of Object.entries(transaction)) {
// 		console.log(k, v);
// 		return JSON.stringify(k, v);
// 	}
// })}
