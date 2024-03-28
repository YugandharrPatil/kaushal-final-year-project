import { config } from "dotenv";
import Blocks from "./components/blocks";
import Heading from "./components/heading";
import Logs from "./components/logs";
import Section from "./components/section";
import Stats from "./components/stats";
import Transactions from "./components/transactions";
config();

export default function HomePage() {
	return (
		<main className="">
			{/* <Blocks /> */}
			<Transactions />
			{/* <Logs /> */}
			{/* <Stats /> */}
		</main>
	);
}
