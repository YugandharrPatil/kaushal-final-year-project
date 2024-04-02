import logs from "@/calls/logs";
import Heading from "../components/heading";
export default async function LogsPage() {
	const data = await logs();
	const contractEvents = data?.contractEvents;
	return (
		<div>
			<Heading>Stats</Heading>
			<h1 className="text-xl bg-gray-500 font-bold text-center">Contract Events</h1>
			<p>{}</p>
		</div>
	);
}
