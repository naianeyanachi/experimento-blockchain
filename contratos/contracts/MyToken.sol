// contracts/MyToken.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";

contract MyToken is ERC20PresetMinterPauser {
	constructor(string memory _name, string memory _symbol, uint8 decimals) 
	ERC20PresetMinterPauser(_name, _symbol) {
	}
}
