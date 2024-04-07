"use client";

import Image from "next/image";

import React from "react";
import baseLogo from "../../../../public/chainLogos/base-logo.svg";
import BNBLogo from "../../../../public/chainLogos/bnb-bnb-logo.svg";
import ethereumLogo from "../../../../public/chainLogos/ethereum-eth-logo.svg";
import optimismLogo from "../../../../public/chainLogos/optimism-op-logo.svg";
import polygonLogo from "../../../../public/chainLogos/polygon-matic-logo.svg";

const blockchainOptions = [
	{ id: "eth", name: "Ethereum", logo: ethereumLogo },
	{ id: "polygon", name: "Polygon", logo: polygonLogo },
	{ id: "bsc", name: "BNB Chain", logo: BNBLogo },
	{ id: "optimism", name: "Optimism", logo: optimismLogo },
	{ id: "base", name: "Base", logo: baseLogo },
];

const ChainSelector = ({ selectedChains, onSelectionChange }: any) => {
	const toggleChain = (chainId: any) => {
		onSelectionChange((prevSelected: any) => {
			const isCurrentlySelected = prevSelected.includes(chainId);
			if (isCurrentlySelected) {
				// Remove chainId from the array if it's currently selected
				return prevSelected.filter((id: any) => id !== chainId);
			} else {
				// Add chainId to the array if it's not currently selected
				return [...prevSelected, chainId];
			}
		});
	};

	return (
		<div className="chain-selector">
			{blockchainOptions.map((chain) => (
				<button
					key={chain.id}
					className={`chain-button ${selectedChains.includes(chain.id) ? "selected" : ""}`}
					onClick={() => toggleChain(chain.id)}
				>
					<Image src={chain.logo} alt={chain.name} className="chain-logo" />
					<div className="chain-details">
						<div className="chain-name">{chain.name}</div>
					</div>
				</button>
			))}
		</div>
	);
};

export default ChainSelector;
