import { config } from "dotenv";
import Link from "next/link";
import Blocks from "./components/blocks";
import Heading from "./components/heading";
import Logs from "./components/logs";
import Section from "./components/section";
import Stats from "./components/stats";
import { Button } from "./components/ui/button";
import Transactions from "./transactions/page";
config();

export default function HomePage() {
	return (
		<main className="container text-center mt-8">
			<h1 className="text-3xl font-semibold">Heading</h1>
			<div className="flex gap-4 mx-auto w-fit mt-6">
				<Button asChild>
					<Link href="/blocks">Blocks</Link>
				</Button>
				<Button asChild>
					<Link href="/transactions">Transactions</Link>
				</Button>
				<Button asChild>
					<Link href="/logs">Logs</Link>
				</Button>
				<Button asChild>
					<Link href="/stats">Stats</Link>
				</Button>
			</div>
		</main>
	);
}
