/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestERC721 } from "../TestERC721";

export class TestERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestERC721> {
    return super.deploy(overrides || {}) as Promise<TestERC721>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestERC721 {
    return super.attach(address) as TestERC721;
  }
  connect(signer: Signer): TestERC721__factory {
    return super.connect(signer) as TestERC721__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC721 {
    return new Contract(address, _abi, signerOrProvider) as TestERC721;
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
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "tos",
        type: "address[]",
      },
      {
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "bulkTransfer",
    outputs: [],
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
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    name: "unpause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
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
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
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
        name: "tokenId",
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
    name: "isPauser",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
    name: "paused",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "renouncePauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
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
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "isTokenExistent",
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
        name: "account",
        type: "address",
      },
    ],
    name: "addPauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
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
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "fromId",
        type: "uint256",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "massMint2",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
        name: "account",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
    name: "isMinter",
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
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "_data",
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
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "owner",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "PauserAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "PauserRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
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
        indexed: true,
        name: "tokenId",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
];

const _bytecode =
  "0x600460809081527f544553540000000000000000000000000000000000000000000000000000000060a052610100604052600160c09081527f540000000000000000000000000000000000000000000000000000000000000060e05281816200008f7f01ffc9a700000000000000000000000000000000000000000000000000000000620001f1602090811b901c565b620000a76380ac58cd60e01b620001f160201b60201c565b620000bf63780e9d6360e01b620001f160201b60201c565b8151620000d49060099060208501906200048b565b508051620000ea90600a9060208401906200048b565b5062000103635b5e139f60e01b620001f160201b60201c565b505050506200011833620002c060201b60201c565b6200013063eab83e2060e01b620001f160201b60201c565b620001486342966c6860e01b620001f160201b60201c565b62000159336200031260201b60201c565b600e805460ff19169055620001957f4d5507ff00000000000000000000000000000000000000000000000000000000620001f1602090811b901c565b600e8054610100338102610100600160a81b0319909216919091179182905560405191046001600160a01b0316906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a362000530565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200028357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b620002db81600c6200036460201b62001eaa1790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6200032d81600d6200036460201b62001eaa1790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6200037682826200040860201b60201c565b15620003e357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b0382166200046b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018062002d696022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004ce57805160ff1916838001178555620004fe565b82800160010185558215620004fe579182015b82811115620004fe578251825591602001919060010190620004e1565b506200050c92915062000510565b5090565b6200052d91905b808211156200050c576000815560010162000517565b90565b61282980620005406000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c806370a082311161011a57806395d89b41116100ad578063aa271e1a1161007c578063aa271e1a1461067e578063b88d4fde146106a4578063c87b56dd1461076a578063e985e9c514610787578063f2fde38b146107b557610206565b806395d89b411461061a578063983b2d56146106225780639865027514610648578063a22cb4651461065057610206565b80638456cb59116100e95780638456cb59146105d05780638da5cb5b146105d85780638f32d59b146105e0578063951ad599146105e857610206565b806370a082311461055f578063715018a6146105855780637ed28e0f1461058d57806382dc1ec4146105aa57610206565b80633f4ba83a1161019d57806346fbf68e1161016c57806346fbf68e146104ef5780634f6ccce7146105155780635c975abb146105325780636352211e1461053a5780636ef8d66d1461055757610206565b80633f4ba83a1461046857806340c10f191461047057806342842e0e1461049c57806342966c68146104d257610206565b8063153a1f3e116101d9578063153a1f3e1461032a57806318160ddd146103ec57806323b872dd146104065780632f745c591461043c57610206565b806301ffc9a71461020b57806306fdde0314610246578063081812fc146102c3578063095ea7b3146102fc575b600080fd5b6102326004803603602081101561022157600080fd5b50356001600160e01b0319166107db565b604080519115158252519081900360200190f35b61024e6107fa565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610288578181015183820152602001610270565b50505050905090810190601f1680156102b55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102e0600480360360208110156102d957600080fd5b5035610891565b604080516001600160a01b039092168252519081900360200190f35b6103286004803603604081101561031257600080fd5b506001600160a01b0381351690602001356108f6565b005b6103286004803603604081101561034057600080fd5b81019060208101813564010000000081111561035b57600080fd5b82018360208201111561036d57600080fd5b8035906020019184602083028401116401000000008311171561038f57600080fd5b9193909290916020810190356401000000008111156103ad57600080fd5b8201836020820111156103bf57600080fd5b803590602001918460208302840111640100000000831117156103e157600080fd5b509092509050610955565b6103f46109a9565b60408051918252519081900360200190f35b6103286004803603606081101561041c57600080fd5b506001600160a01b038135811691602081013590911690604001356109af565b6103f46004803603604081101561045257600080fd5b506001600160a01b038135169060200135610a10565b610328610a92565b6102326004803603604081101561048657600080fd5b506001600160a01b038135169060200135610b72565b610328600480360360608110156104b257600080fd5b506001600160a01b03813581169160208101359091169060400135610bce565b610328600480360360208110156104e857600080fd5b5035610be9565b6102326004803603602081101561050557600080fd5b50356001600160a01b0316610c3d565b6103f46004803603602081101561052b57600080fd5b5035610c56565b610232610cbf565b6102e06004803603602081101561055057600080fd5b5035610cc8565b610328610d1f565b6103f46004803603602081101561057557600080fd5b50356001600160a01b0316610d2a565b610328610d95565b610232600480360360208110156105a357600080fd5b5035610e41565b610328600480360360208110156105c057600080fd5b50356001600160a01b0316610e4c565b610328610e9c565b6102e0610f76565b610232610f8a565b610328600480360360608110156105fe57600080fd5b506001600160a01b038135169060208101359060400135610fa0565b61024e610fc6565b6103286004803603602081101561063857600080fd5b50356001600160a01b0316611027565b610328611077565b6103286004803603604081101561066657600080fd5b506001600160a01b0381351690602001351515611080565b6102326004803603602081101561069457600080fd5b50356001600160a01b03166110db565b610328600480360360808110156106ba57600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156106f557600080fd5b82018360208201111561070757600080fd5b8035906020019184600183028401116401000000008311171561072957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506110ee945050505050565b61024e6004803603602081101561078057600080fd5b5035611143565b6102326004803603604081101561079d57600080fd5b506001600160a01b038135811691602001351661122b565b610328600480360360208110156107cb57600080fd5b50356001600160a01b0316611259565b6001600160e01b03191660009081526020819052604090205460ff1690565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108865780601f1061085b57610100808354040283529160200191610886565b820191906000526020600020905b81548152906001019060200180831161086957829003601f168201915b505050505090505b90565b600061089c826112be565b6108da57604051600160e51b62461bcd02815260040180806020018281038252602b815260200180612771602b913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600e5460ff16156109475760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b61095182826112db565b5050565b8060005b818110156109a1576109993387878481811061097157fe5b905060200201356001600160a01b031686868581811061098d57fe5b905060200201356109af565b600101610959565b505050505050565b60075490565b600e5460ff1615610a005760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b610a0b838383611408565b505050565b6000610a1b83610d2a565b8210610a5b57604051600160e51b62461bcd02815260040180806020018281038252602a81526020018061257d602a913960400191505060405180910390fd5b6001600160a01b0383166000908152600560205260409020805483908110610a7f57fe5b9060005260206000200154905092915050565b610a9b33610c3d565b610ad957604051600160e51b62461bcd0281526004018080602001828103825260308152602001806125046030913960400191505060405180910390fd5b600e5460ff16610b335760408051600160e51b62461bcd02815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b600e805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b6000610b7d336110db565b610bbb57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806125a76030913960400191505060405180910390fd5b610bc5838361145b565b50600192915050565b610a0b838383604051806020016040528060008152506110ee565b610bf33382611478565b610c3157604051600160e51b62461bcd02815260040180806020018281038252602f8152602001806126a2602f913960400191505060405180910390fd5b610c3a8161151f565b50565b6000610c50600d8363ffffffff61153116565b92915050565b6000610c606109a9565b8210610ca057604051600160e51b62461bcd02815260040180806020018281038252602b815260200180612722602b913960400191505060405180910390fd5b60078281548110610cad57fe5b90600052602060002001549050919050565b600e5460ff1690565b6000818152600160205260408120546001600160a01b031680610c5057604051600160e51b62461bcd0281526004018080602001828103825260288152602001806125f86028913960400191505060405180910390fd5b610d283361159b565b565b60006001600160a01b038216610d7457604051600160e51b62461bcd0281526004018080602001828103825260298152602001806126d16029913960400191505060405180910390fd5b6001600160a01b0382166000908152600360205260409020610c50906115e3565b610d9d610f8a565b610df15760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600e5460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600e8054610100600160a81b0319169055565b6000610c50826112be565b610e5533610c3d565b610e9357604051600160e51b62461bcd0281526004018080602001828103825260308152602001806125046030913960400191505060405180910390fd5b610c3a816115e7565b610ea533610c3d565b610ee357604051600160e51b62461bcd0281526004018080602001828103825260308152602001806125046030913960400191505060405180910390fd5b600e5460ff1615610f345760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b600e805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b600e5461010090046001600160a01b031690565b600e5461010090046001600160a01b0316331490565b60005b81811015610fc057610fb784828501610b72565b50600101610fa3565b50505050565b600a8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108865780601f1061085b57610100808354040283529160200191610886565b611030336110db565b61106e57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806125a76030913960400191505060405180910390fd5b610c3a8161162f565b610d2833611677565b600e5460ff16156110d15760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b61095182826116bf565b6000610c50600c8363ffffffff61153116565b6110f98484846109af565b6111058484848461178e565b610fc057604051600160e51b62461bcd0281526004018080602001828103825260308152602001806126726030913960400191505060405180910390fd5b606061114e826112be565b61118c57604051600160e51b62461bcd02815260040180806020018281038252602e8152602001806124d6602e913960400191505060405180910390fd5b6000828152600b602090815260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452909183018282801561121f5780601f106111f45761010080835404028352916020019161121f565b820191906000526020600020905b81548152906001019060200180831161120257829003601f168201915b50505050509050919050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b611261610f8a565b6112b55760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610c3a81611b71565b6000908152600160205260409020546001600160a01b0316151590565b60006112e682610cc8565b9050806001600160a01b0316836001600160a01b031614156113525760408051600160e51b62461bcd02815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b038216148061136e575061136e813361122b565b6113ac57604051600160e51b62461bcd02815260040180806020018281038252603781526020018061279c6037913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6114123382611478565b61145057604051600160e51b62461bcd0281526004018080602001828103825260308152602001806126206030913960400191505060405180910390fd5b610a0b838383611c20565b6114658282611c3f565b61146f8282611d76565b61095181611db4565b6000611483826112be565b6114c157604051600160e51b62461bcd02815260040180806020018281038252602b8152602001806127d3602b913960400191505060405180910390fd5b60006114cc83610cc8565b9050806001600160a01b0316846001600160a01b031614806115075750836001600160a01b03166114fc84610891565b6001600160a01b0316145b806115175750611517818561122b565b949350505050565b610c3a61152b82610cc8565b82611df8565b60006001600160a01b03821661157b57604051600160e51b62461bcd0281526004018080602001828103825260228152602001806126506022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b6115ac600d8263ffffffff611e4016565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b5490565b6115f8600d8263ffffffff611eaa16565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b611640600c8263ffffffff611eaa16565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b611688600c8263ffffffff611e4016565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6001600160a01b0382163314156117205760408051600160e51b62461bcd02815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b60008060606117a5866001600160a01b0316611f2e565b6117b457600192505050611517565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611840578181015183820152602001611828565b50505050905090810190601f16801561186d5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106118d55780518252601f1990920191602091820191016118b6565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611937576040519150601f19603f3d011682016040523d82523d6000602084013e61193c565b606091505b50805191935091501580159061197c57508051600160e11b630a85bd0102906020808401919081101561196e57600080fd5b50516001600160e01b031916145b1561198c57600192505050611517565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611a18578181015183820152602001611a00565b50505050905090810190601f168015611a455780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b60208310611aad5780518252601f199092019160209182019101611a8e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611b0f576040519150601f19603f3d011682016040523d82523d6000602084013e611b14565b606091505b508051919350915015801590611b5457508051600160e01b636745782b029060208084019190811015611b4657600080fd5b50516001600160e01b031916145b15611b6457600192505050611517565b5060009695505050505050565b6001600160a01b038116611bb957604051600160e51b62461bcd0281526004018080602001828103825260268152602001806125346026913960400191505060405180910390fd5b600e546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600e80546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b611c2b838383611f34565b611c35838261207e565b610a0b8282611d76565b6001600160a01b038216611c9d5760408051600160e51b62461bcd02815260206004820152601f60248201527f4b495031373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611ca6816112be565b15611cfb5760408051600160e51b62461bcd02815260206004820152601b60248201527f4b495031373a20746f6b656e20616c7265616479206d696e7465640000000000604482015290519081900360640190fd5b600081815260016020908152604080832080546001600160a01b0319166001600160a01b038716908117909155835260039091529020611d3a90612173565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b0390911660009081526005602081815260408084208054868652600684529185208290559282526001810183559183529091200155565b600780546000838152600860205260408120829055600182018355919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880155565b611e02828261217c565b6000818152600b60205260409020546002600019610100600184161502019091160415610951576000818152600b6020526040812061095191612453565b611e4a8282611531565b611e8857604051600160e51b62461bcd0281526004018080602001828103825260218152602001806125d76021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b611eb48282611531565b15611f095760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b826001600160a01b0316611f4782610cc8565b6001600160a01b031614611f8f57604051600160e51b62461bcd0281526004018080602001828103825260288152602001806126fa6028913960400191505060405180910390fd5b6001600160a01b038216611fd757604051600160e51b62461bcd02815260040180806020018281038252602381526020018061255a6023913960400191505060405180910390fd5b611fe0816121a8565b6001600160a01b0383166000908152600360205260409020612001906121e3565b6001600160a01b038216600090815260036020526040902061202290612173565b60008181526001602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b0382166000908152600560205260408120546120a890600163ffffffff6121fa16565b600083815260066020526040902054909150808214612143576001600160a01b03841660009081526005602052604081208054849081106120e557fe5b906000526020600020015490508060056000876001600160a01b03166001600160a01b03168152602001908152602001600020838154811061212357fe5b600091825260208083209091019290925591825260069052604090208190555b6001600160a01b038416600090815260056020526040902080549061216c906000198301612497565b5050505050565b80546001019055565b6121868282612243565b612190828261207e565b6000818152600660205260408120556109518161231d565b6000818152600260205260409020546001600160a01b031615610c3a57600090815260026020526040902080546001600160a01b0319169055565b80546121f690600163ffffffff6121fa16565b9055565b600061223c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506123b9565b9392505050565b816001600160a01b031661225682610cc8565b6001600160a01b03161461229e57604051600160e51b62461bcd02815260040180806020018281038252602481526020018061274d6024913960400191505060405180910390fd5b6122a7816121a8565b6001600160a01b03821660009081526003602052604090206122c8906121e3565b60008181526001602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60075460009061233490600163ffffffff6121fa16565b6000838152600860205260408120546007805493945090928490811061235657fe5b90600052602060002001549050806007838154811061237157fe5b600091825260208083209091019290925582815260089091526040902082905560078054906123a4906000198301612497565b50505060009182525060086020526040812055565b6000818484111561244b57604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156124105781810151838201526020016123f8565b50505050905090810190601f16801561243d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b50805460018160011615610100020316600290046000825580601f106124795750610c3a565b601f016020900490600052602060002090810190610c3a91906124b7565b815481835581811115610a0b57600083815260209020610a0b9181019083015b61088e91905b808211156124d157600081556001016124bd565b509056fe4b495031374d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031374275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a206275726e206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a723058200275f52d432124654b73aaf5f307b083c6bbaea4368ccc200e28c0d5e5a57b210029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
