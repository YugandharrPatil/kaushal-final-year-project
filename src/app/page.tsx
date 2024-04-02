import { config } from "dotenv";
import Image from "next/image";
import Link from "next/link";
import ethereumLogo from "../../public/ethereum.png";
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
		<main className="h-screen bg-black">
			<div className="container pt-4">
				<Image className="w-24 mx-auto" src={ethereumLogo} alt="ethereum" />
				<p className="text-center font-semibold text-[#2a3192]">Nexus</p>
				<div className="text-center mt-8">
					<div className="flex gap-4 mx-auto w-fit mt-6">
						<Button asChild variant="purple">
							<Link href="/blocks">Blocks</Link>
						</Button>
						<Button asChild variant="purple">
							<Link href="/transactions">Transactions</Link>
						</Button>
						{/* <Button asChild>
					<Link href="/logs">Logs</Link>
				</Button> */}
						<Button asChild variant="purple">
							<Link href="/stats">Stats</Link>
						</Button>
					</div>
				</div>
				<hr className="mt-6 text-gray-900 border-gray-600" />
			</div>
		</main>
	);
}
