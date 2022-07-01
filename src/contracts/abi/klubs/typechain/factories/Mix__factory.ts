/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Mix } from "../Mix";

export class Mix__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Mix> {
    return super.deploy(overrides || {}) as Promise<Mix>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Mix {
    return super.attach(address) as Mix;
  }
  connect(signer: Signer): Mix__factory {
    return super.connect(signer) as Mix__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Mix {
    return new Contract(address, _abi, signerOrProvider) as Mix;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "name",
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
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
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
    inputs: [],
    name: "booth",
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
        name: "sender",
        type: "address",
      },
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_booth",
        type: "address",
      },
    ],
    name: "setBooth",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
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
        name: "to",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address",
      },
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "isOwner",
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
    inputs: [],
    name: "symbol",
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
    constant: false,
    inputs: [
      {
        name: "_emitter",
        type: "address",
      },
    ],
    name: "setEmitter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address",
      },
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "emitter",
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
        name: "owner",
        type: "address",
      },
      {
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600781526020017f445343204d6978000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d495800000000000000000000000000000000000000000000000000000000008152506012336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3620001546301ffc9a760e01b6200020e60201b60201c565b6200016c636578737160e01b6200020e60201b60201c565b62000184633b5a0bf860e01b6200020e60201b60201c565b82600590805190602001906200019c9291906200056c565b508160069080519060200190620001b59291906200056c565b5080600760006101000a81548160ff021916908360ff160217905550620001e963a219a02560e01b6200020e60201b60201c565b50505062000208336987ee8d8cb213fe0000006200031760201b60201c565b6200061b565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620002ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620003bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4b4950373a206d696e7420746f20746865207a65726f2061646472657373000081525060200191505060405180910390fd5b620003d781600454620004e360201b6200216d1790919060201c565b6004819055506200043681600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620004e360201b6200216d1790919060201c565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008082840190508381101562000562576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620005af57805160ff1916838001178555620005e0565b82800160010185558215620005e0579182015b82811115620005df578251825591602001919060010190620005c2565b5b509050620005ef9190620005f3565b5090565b6200061891905b8082111562000614576000816000905550600101620005fa565b5090565b90565b6124b9806200062b6000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806370a08231116100de5780639f903ff611610097578063dce1137511610071578063dce11375146108a2578063dd62ed3e146108ec578063eb79554914610964578063f2fde38b14610a4957610173565b80639f903ff6146106f3578063a9059cbb14610737578063b88d4fde1461079d57610173565b806370a0823114610554578063715018a6146105ac57806379cc6790146105b65780638da5cb5b146106045780638f32d59b1461064e57806395d89b411461067057610173565b806327c089a71161013057806327c089a7146103b4578063313ce567146103f857806340c10f191461041c578063423f6cef1461046a57806342842e0e146104b857806342966c681461052657610173565b806301ffc9a71461017857806306fdde03146101dd578063095ea7b31461026057806318160ddd146102c65780631ae08425146102e457806323b872dd1461032e575b600080fd5b6101c36004803603602081101561018e57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610a8d565b604051808215151515815260200191505060405180910390f35b6101e5610af5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561022557808201518184015260208101905061020a565b50505050905090810190601f1680156102525780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102ac6004803603604081101561027657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b97565b604051808215151515815260200191505060405180910390f35b6102ce610bae565b6040518082815260200191505060405180910390f35b6102ec610bb8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61039a6004803603606081101561034457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bde565b604051808215151515815260200191505060405180910390f35b6103f6600480360360208110156103ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c8f565b005b610400610d4d565b604051808260ff1660ff16815260200191505060405180910390f35b6104686004803603604081101561043257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d64565b005b6104b66004803603604081101561048057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610dcc565b005b610524600480360360608110156104ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610dea565b005b6105526004803603602081101561053c57600080fd5b8101908080359060200190929190505050610e0a565b005b6105966004803603602081101561056a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e73565b6040518082815260200191505060405180910390f35b6105b4610ebc565b005b610602600480360360408110156105cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ff5565b005b61060c611060565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610656611089565b604051808215151515815260200191505060405180910390f35b6106786110e0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106b857808201518184015260208101905061069d565b50505050905090810190601f1680156106e55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107356004803603602081101561070957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611182565b005b6107836004803603604081101561074d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611240565b604051808215151515815260200191505060405180910390f35b6108a0600480360360808110156107b357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561081a57600080fd5b82018360208201111561082c57600080fd5b8035906020019184600183028401116401000000008311171561084e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611257565b005b6108aa6112ca565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61094e6004803603604081101561090257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112f0565b6040518082815260200191505060405180910390f35b610a476004803603606081101561097a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156109c157600080fd5b8201836020820111156109d357600080fd5b803590602001918460018302840111640100000000831117156109f557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611377565b005b610a8b60048036036020811015610a5f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113e8565b005b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050905090565b6000610ba433848461146e565b6001905092915050565b6000600454905090565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610beb848484611665565b610c848433610c7f85600360008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461190590919063ffffffff16565b61146e565b600190509392505050565b610c97611089565b610d09576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600760009054906101000a900460ff16905090565b600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610dbe57600080fd5b610dc8828261194f565b5050565b610de6828260405180602001604052806000815250611377565b5050565b610e0583838360405180602001604052806000815250611257565b505050565b6000610e346103e8610e26600385611b0c90919063ffffffff16565b611b9290919063ffffffff16565b9050610e62600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682611240565b50610e6f33828403611bdc565b5050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610ec4611089565b610f36576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600061101f6103e8611011600385611b0c90919063ffffffff16565b611b9290919063ffffffff16565b905061104e83600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683610bde565b5061105b83828403611d99565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b606060068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111785780601f1061114d57610100808354040283529160200191611178565b820191906000526020600020905b81548152906001019060200180831161115b57829003601f168201915b5050505050905090565b61118a611089565b6111fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600760016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600061124d338484611665565b6001905092915050565b611262848484610bde565b5061126f84848484611e40565b6112c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806123b0602e913960400191505060405180910390fd5b50505050565b600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6113818383611240565b5061138e33848484611e40565b6113e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806123b0602e913960400191505060405180910390fd5b505050565b6113f0611089565b611462576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61146b81612029565b50565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156114f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061246b6023913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561157a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061238f6021913960400191505060405180910390fd5b80600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156116eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806124266024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611771576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806124046022913960400191505060405180910390fd5b6117c381600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461190590919063ffffffff16565b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061185881600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461216d90919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600061194783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506121f5565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156119f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4b4950373a206d696e7420746f20746865207a65726f2061646472657373000081525060200191505060405180910390fd5b611a078160045461216d90919063ffffffff16565b600481905550611a5f81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461216d90919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080831415611b1f5760009050611b8c565b6000828402905082848281611b3057fe5b0414611b87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061244a6021913960400191505060405180910390fd5b809150505b92915050565b6000611bd483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506122b5565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c7f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4b4950373a206275726e2066726f6d20746865207a65726f206164647265737381525060200191505060405180910390fd5b611c948160045461190590919063ffffffff16565b600481905550611cec81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461190590919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b611da38282611bdc565b611e3c8233611e3784600360008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461190590919063ffffffff16565b61146e565b5050565b6000611e618473ffffffffffffffffffffffffffffffffffffffff1661237b565b611e6e5760019050612021565b60008473ffffffffffffffffffffffffffffffffffffffff16639d188c22338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611f49578082015181840152602081019050611f2e565b50505050905090810190601f168015611f765780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015611f9857600080fd5b505af1158015611fac573d6000803e3d6000fd5b505050506040513d6020811015611fc257600080fd5b81019080805190602001909291905050509050639d188c2260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156120af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806123de6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000808284019050838110156121eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008383111582906122a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561226757808201518184015260208101905061224c565b50505050905090810190601f1680156122945780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008083118290612361576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561232657808201518184015260208101905061230b565b50505050905090810190601f1680156123535780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161236d57fe5b049050809150509392505050565b600080823b90506000811191505091905056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734b4950373a207472616e7366657220746f20746865207a65726f20616464726573734b4950373a207472616e736665722066726f6d20746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a72305820e550050e0a8819abdfbcf7941563152a5e54232f433fa999276f6dfcab1d739d0029";