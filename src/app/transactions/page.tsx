import transactions from "@/calls/transactions";
import Heading from "../components/heading";

export default async function TransactionsPage() {
	const data = await transactions();
	const decodedWalletTransaction = data?.decodedWalletTransaction.result;
	const transactionByHash = data?.transactionByHash?.result;
	const decodedTransactionByHash = data?.decodedTransactionByHash?.result;
	const internalTransactions = data?.internalTransactions.result;
	const walletTransactions = data?.walletTransactions.result;
	console.log(data?.decodedWalletTransaction.result);
	return (
		<div>
			<Heading>Transactions</Heading>
			<h1 className="text-xl bg-gray-500 font-bold text-center">Decoded Wallet Transaction</h1>
			{decodedWalletTransaction?.map((transaction) => (
				<p className="my-5 font-bold" key={transaction.hash}>
					{JSON.stringify(transaction)}
				</p>
			))}
			{/* <h1 className="text-xl bg-gray-500 font-bold text-center">Decoded Wallet Transaction</h1>
			{transactionByHash?.map((transaction) => (
				<p className="my-5 font-bold" key={transaction.hash}>
					{JSON.stringify(transaction)}
				</p>
			))}
			<h1 className="text-xl bg-gray-500 font-bold text-center">Decoded Wallet Transaction</h1>
			{decodedTransactionByHash?.map((transaction) => (
				<p className="my-5 font-bold" key={transaction.hash}>
					{JSON.stringify(transaction)}
				</p>
			))}
			<h1 className="text-xl bg-gray-500 font-bold text-center">Decoded Wallet Transaction</h1>
			{internalTransactions?.map((transaction) => (
				<p className="my-5 font-bold" key={transaction}>
					{JSON.stringify(transaction)}
				</p>
			))}
			<h1 className="text-xl bg-gray-500 font-bold text-center">Decoded Wallet Transaction</h1>
			{walletTransactions?.map((transaction) => (
				<p className="my-5 font-bold" key={transaction.hash}>
					{JSON.stringify(transaction)}
				</p>
			))} */}
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
