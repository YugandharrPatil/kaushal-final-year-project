"use client";

import "@/stylesheets/App.css";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import Heading from "../components/heading";
import AssetTable from "../components/networth-project/asset-table";
import ChainSelector from "../components/networth-project/chain-selector";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function NetWorthPage() {
	const { theme, setTheme } = useTheme();

	const [selectedChains, setSelectedChains] = useState(["eth", "polygon", "bsc", "optimism", "base"]);

	const [tempAddress, setTempAddress] = useState("0x209c8bbE2454257Eb1A8E630f59f4b1b50a98543");
	const [address, setAddress] = useState(tempAddress);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTempAddress(e.target.value);
	};

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAddress(tempAddress);
	};

	return (
		<div className="App">
			<h1 className="text-3xl font-bold text-center my-5">My Crypto Portfolio</h1>
			<div className="flex gap-3 w-11/12 xl:w-1/2 mx-auto">
				<Label htmlFor="walletAddress" className="text-lg">
					Wallet Address:
				</Label>
				<Input
					id="walletAddress"
					className="addressInput"
					type="text"
					value={tempAddress}
					onChange={handleInputChange}
					placeholder="Enter wallet address"
				/>
				<Button onClick={handleButtonClick} variant="default" className="fetchButton text-lg">
					Fetch assets
				</Button>
			</div>
			<ChainSelector selectedChains={selectedChains} onSelectionChange={setSelectedChains} />
			<AssetTable address={address} selectedChains={selectedChains} />
		</div>
	);
}
