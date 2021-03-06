/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Artists } from "../Artists";

export class Artists__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Artists> {
    return super.deploy(overrides || {}) as Promise<Artists>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Artists {
    return super.attach(address) as Artists;
  }
  connect(signer: Signer): Artists__factory {
    return super.connect(signer) as Artists__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Artists {
    return new Contract(address, _abi, signerOrProvider) as Artists;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
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
    constant: false,
    inputs: [
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "exitOnlyKlubsMembership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
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
    inputs: [],
    name: "add",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
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
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "onlyKlubsMembership",
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
        name: "",
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
        name: "artist",
        type: "address",
      },
    ],
    name: "ban",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
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
        name: "",
        type: "address",
      },
    ],
    name: "baseRoyalty",
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
        name: "_baseRoyalty",
        type: "uint256",
      },
    ],
    name: "setBaseRoyalty",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "artist",
        type: "address",
      },
    ],
    name: "unban",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "artistCount",
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
    name: "joinOnlyKlubsMembership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "artists",
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
        name: "artist",
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
        name: "artist",
        type: "address",
      },
      {
        indexed: false,
        name: "baseRoyalty",
        type: "uint256",
      },
    ],
    name: "SetBaseRoyalty",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "artist",
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
        name: "artist",
        type: "address",
      },
    ],
    name: "JoinOnlyKlubsMembership",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "artist",
        type: "address",
      },
    ],
    name: "ExitOnlyKlubsMembership",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "artist",
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
        name: "artist",
        type: "address",
      },
    ],
    name: "Unban",
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
  "0x60806040819052600080546001600160a01b03191633178082556001600160a01b0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610c15806100576000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80638f32d59b116100ad578063b9f1455711610071578063b9f14557146103bc578063be530482146103e2578063c48d2c6c146103ea578063cd7e10c114610410578063f2fde38b1461042d57610121565b80638f32d59b1461032557806397c3ccd81461032d5780639c8d83bb14610353578063a80004cc14610379578063b841296c1461039f57610121565b80635db218e1116100f45780635db218e114610261578063664bc0fa14610299578063715018a6146102d35780637f440103146102db5780638da5cb5b1461030157610121565b80630a1ffba314610126578063113326a0146101c15780632fa25d11146101e95780634f2be91f14610259575b600080fd5b61014c6004803603602081101561013c57600080fd5b50356001600160a01b0316610453565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561018657818101518382015260200161016e565b50505050905090810190601f1680156101b35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101e7600480360360208110156101d757600080fd5b50356001600160a01b03166104ee565b005b6101e7600480360360208110156101ff57600080fd5b81019060208101813564010000000081111561021a57600080fd5b82018360208201111561022c57600080fd5b8035906020019184600183028401116401000000008311171561024e57600080fd5b509092509050610581565b6101e761060a565b6102876004803603602081101561027757600080fd5b50356001600160a01b03166106b5565b60408051918252519081900360200190f35b6102bf600480360360208110156102af57600080fd5b50356001600160a01b03166106c7565b604080519115158252519081900360200190f35b6101e76106dc565b6102bf600480360360208110156102f157600080fd5b50356001600160a01b0316610770565b610309610785565b604080516001600160a01b039092168252519081900360200190f35b6102bf610795565b6101e76004803603602081101561034357600080fd5b50356001600160a01b03166107a6565b6102bf6004803603602081101561036957600080fd5b50356001600160a01b031661083c565b6102876004803603602081101561038f57600080fd5b50356001600160a01b0316610851565b6101e7600480360360208110156103b557600080fd5b5035610863565b6101e7600480360360208110156103d257600080fd5b50356001600160a01b03166108bc565b61028761094f565b6101e76004803603602081101561040057600080fd5b50356001600160a01b0316610955565b6103096004803603602081101561042657600080fd5b50356109eb565b6101e76004803603602081101561044357600080fd5b50356001600160a01b0316610a12565b60056020908152600091825260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156104e65780601f106104bb576101008083540402835291602001916104e6565b820191906000526020600020905b8154815290600101906020018083116104c957829003601f168201915b505050505081565b6104f6610795565b6105385760408051600160e51b62461bcd0281526020600482018190526024820152600080516020610bca833981519152604482015290519081900360640190fd5b6001600160a01b038116600081815260066020526040808220805460ff19169055517fa615a95795e27d8c40a3fe76611bec5fc90955c7536169cb3ccbe211ef0238699190a250565b33600090815260056020526040902061059b908383610b0b565b50336001600160a01b03167f8bddafc1afbb5ffb7978ef140ddf8afae8c1d786c5d32b73f8da2d0c813bc10e838360405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a25050565b3360009081526002602052604090205460ff161561062757600080fd5b6001805480820182557fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b031916339081179091556000818152600260209081526040808320805460ff191690951790945560039052828120439055915190917f87dc5eecd6d6bdeae407c426da6bfba5b7190befc554ed5d4d62dd5cf939fbae91a2565b60036020526000908152604090205481565b60066020526000908152604090205460ff1681565b6106e4610795565b6107265760408051600160e51b62461bcd0281526020600482018190526024820152600080516020610bca833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60026020526000908152604090205460ff1681565b6000546001600160a01b03165b90565b6000546001600160a01b0316331490565b6107ae610795565b6107f05760408051600160e51b62461bcd0281526020600482018190526024820152600080516020610bca833981519152604482015290519081900360640190fd5b6001600160a01b038116600081815260076020526040808220805460ff19166001179055517f9a4e757235705bd178419abc9fa645392c5c7dce5b09940a81ef76794b84bd689190a250565b60076020526000908152604090205460ff1681565b60046020526000908152604090205481565b6103e881111561087257600080fd5b33600081815260046020908152604091829020849055815184815291517f672a635f80ec8e0d5c7062036f64508d97612140c7606c077689e013180bcb3d9281900390910190a250565b6108c4610795565b6109065760408051600160e51b62461bcd0281526020600482018190526024820152600080516020610bca833981519152604482015290519081900360640190fd5b6001600160a01b038116600081815260076020526040808220805460ff19169055517f866c4c4c778f85c380f911e6c43d125e57865fec38a5ccf53b62b74a8473ed169190a250565b60015490565b61095d610795565b61099f5760408051600160e51b62461bcd0281526020600482018190526024820152600080516020610bca833981519152604482015290519081900360640190fd5b6001600160a01b038116600081815260066020526040808220805460ff19166001179055517f4d64f1b94080522b8b79d8aa9fca27d246fef4e3ca2dad8303646f4a12fd81f69190a250565b600181815481106109f857fe5b6000918252602090912001546001600160a01b0316905081565b610a1a610795565b610a5c5760408051600160e51b62461bcd0281526020600482018190526024820152600080516020610bca833981519152604482015290519081900360640190fd5b610a6581610a68565b50565b6001600160a01b038116610ab057604051600160e51b62461bcd028152600401808060200182810382526026815260200180610ba46026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b4c5782800160ff19823516178555610b79565b82800160010185558215610b79579182015b82811115610b79578235825591602001919060010190610b5e565b50610b85929150610b89565b5090565b61079291905b80821115610b855760008155600101610b8f56fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a165627a7a723058203b98eb871300c554210c11fb43c98dc1f2a053ef194e7cf460a96702733bfdf70029";
