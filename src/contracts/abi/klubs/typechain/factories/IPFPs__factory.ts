/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IPFPs } from "../IPFPs";

export class IPFPs__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): IPFPs {
    return new Contract(address, _abi, signerOrProvider) as IPFPs;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "propose",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "extras",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "addrs",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "manager",
        type: "address",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "managerPFPs",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "extra",
        type: "string",
      },
    ],
    name: "setExtra",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "receiver",
        type: "address",
      },
      {
        name: "royalty",
        type: "uint256",
      },
    ],
    name: "setRoyalty",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "addedBlocks",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "addByPFPOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "managers",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "getTotalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "totalSupply",
        type: "uint256",
      },
    ],
    name: "setTotalSupply",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "added",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "manager",
        type: "address",
      },
    ],
    name: "addManager",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "addByMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "managerCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "enumerables",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "totalSupplies",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "banned",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "royalties",
    outputs: [
      {
        name: "receiver",
        type: "address",
      },
      {
        name: "royalty",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "manager",
        type: "address",
      },
    ],
    name: "existsManager",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "manager",
        type: "address",
      },
    ],
    name: "managerPFPCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "enumerable",
        type: "bool",
      },
    ],
    name: "setEnumerable",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
      {
        name: "manager",
        type: "address",
      },
    ],
    name: "removeManager",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "addrCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "addr",
        type: "address",
      },
      {
        indexed: true,
        name: "manager",
        type: "address",
      },
    ],
    name: "Propose",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "addr",
        type: "address",
      },
      {
        indexed: true,
        name: "manager",
        type: "address",
      },
    ],
    name: "Add",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "addr",
        type: "address",
      },
      {
        indexed: true,
        name: "manager",
        type: "address",
      },
    ],
    name: "AddManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "addr",
        type: "address",
      },
      {
        indexed: true,
        name: "manager",
        type: "address",
      },
    ],
    name: "RemoveManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        name: "enumerable",
        type: "bool",
      },
    ],
    name: "SetEnumerable",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        name: "totalSupply",
        type: "uint256",
      },
    ],
    name: "SetTotalSupply",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        name: "royalty",
        type: "uint256",
      },
    ],
    name: "SetRoyalty",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        name: "extra",
        type: "string",
      },
    ],
    name: "SetExtra",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "addr",
        type: "address",
      },
    ],
    name: "Ban",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "addr",
        type: "address",
      },
    ],
    name: "Unban",
    type: "event",
  },
];
