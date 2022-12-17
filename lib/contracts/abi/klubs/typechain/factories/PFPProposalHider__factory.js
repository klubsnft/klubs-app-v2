"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PFPProposalHider__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class PFPProposalHider__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.PFPProposalHider__factory = PFPProposalHider__factory;
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "hiding",
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
        constant: false,
        inputs: [
            {
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "show",
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
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "hide",
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "Hide",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "Show",
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
const _bytecode = "0x60806040819052600080546001600160a01b03191633178082556001600160a01b0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610497806100576000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100da5780638f32d59b146100fe578063e5283cc714610106578063f2fde38b146101235761007d565b80636a965d0d14610082578063715018a6146100b35780638b514ed7146100bd575b600080fd5b61009f6004803603602081101561009857600080fd5b5035610149565b604080519115158252519081900360200190f35b6100bb61015e565b005b6100bb600480360360208110156100d357600080fd5b50356101f2565b6100e261027c565b604080516001600160a01b039092168252519081900360200190f35b61009f61028b565b6100bb6004803603602081101561011c57600080fd5b503561029c565b6100bb6004803603602081101561013957600080fd5b50356001600160a01b031661032c565b60016020526000908152604090205460ff1681565b61016661028b565b6101a85760408051600160e51b62461bcd028152602060048201819052602482015260008051602061044c833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6101fa61028b565b61023c5760408051600160e51b62461bcd028152602060048201819052602482015260008051602061044c833981519152604482015290519081900360640190fd5b600081815260016020526040808220805460ff191690555182917f5f069990bf41db1b954531895361939c97a4102bcdec49ac76981d486c9e4f1d91a250565b6000546001600160a01b031690565b6000546001600160a01b0316331490565b6102a461028b565b6102e65760408051600160e51b62461bcd028152602060048201819052602482015260008051602061044c833981519152604482015290519081900360640190fd5b6000818152600160208190526040808320805460ff19169092179091555182917f9745c6e950831f00be461f6cb17bf20ae86dd6dc7f5877ac9b14019e168470a091a250565b61033461028b565b6103765760408051600160e51b62461bcd028152602060048201819052602482015260008051602061044c833981519152604482015290519081900360640190fd5b61037f81610382565b50565b6001600160a01b0381166103ca57604051600160e51b62461bcd0281526004018080602001828103825260268152602001806104266026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a165627a7a72305820b12075a2e4b2cd1c52673165477da581b358f57ec4ff6a7fe3286666e24989410029";
//# sourceMappingURL=PFPProposalHider__factory.js.map