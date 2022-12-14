const { task } = require("hardhat/config");

task("deploy", "Deploy the contract to the blockchain").setAction(async (args, hardhat) => {

	const { ethers } = hardhat;

	const signer = await ethers.getSigner();
	const recipient = signer.address;
	const f = await ethers.getContractFactory("StreamA");
	const d = await f.deploy();

	await d.deployed();
	console.log("Deployed contract address:", d.address);
	console.log("Recipient balance:", await d.balanceOf(recipient));
});
