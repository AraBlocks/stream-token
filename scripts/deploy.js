const { task } = require("hardhat/config");
const wallets = require('./approvedWallets.json');

task("deploy", "Deploy the contract to the blockchain").setAction(async (args, hardhat) => {

	const { ethers } = hardhat;
	const { keccak256 } = ethers.utils
	const signer = await ethers.getSigner();
	const recipient = signer.address;

	const f = await ethers.getContractFactory("StreamA");
	const d = await f.deploy(wallets.data);

	await d.deployed();
	console.log("Deployed contract address:", d.address);
	console.log("Recipient balance:", await d.balanceOf(recipient));
});
