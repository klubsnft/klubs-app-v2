"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metaverses__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class Metaverses__factory extends contracts_1.ContractFactory {
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
exports.Metaverses__factory = Metaverses__factory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "id",
                type: "uint256",
            },
        ],
        name: "unban",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "id",
                type: "uint256",
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
                type: "address",
            },
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "managerMetaverses",
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
        name: "itemProposalCount",
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
                name: "id",
                type: "uint256",
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
                name: "id",
                type: "uint256",
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
                name: "extra",
                type: "string",
            },
        ],
        name: "addMetaverse",
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
        name: "itemProposals",
        outputs: [
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "item",
                type: "address",
            },
            {
                name: "itemType",
                type: "uint8",
            },
            {
                name: "proposer",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "mileageOff",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "item",
                type: "address",
            },
            {
                name: "totalSupply",
                type: "uint256",
            },
        ],
        name: "setItemTotalSupply",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "metaverseCount",
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
                type: "uint256",
            },
            {
                name: "",
                type: "address",
            },
        ],
        name: "itemTypes",
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
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "removeProposal",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "item",
                type: "address",
            },
            {
                name: "itemType",
                type: "uint8",
            },
        ],
        name: "updateItemType",
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
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256",
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
                name: "id",
                type: "uint256",
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
        constant: false,
        inputs: [
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "item",
                type: "address",
            },
            {
                name: "itemType",
                type: "uint8",
            },
        ],
        name: "proposeItem",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "id",
                type: "uint256",
            },
        ],
        name: "ban",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
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
                type: "uint256",
            },
            {
                name: "",
                type: "address",
            },
        ],
        name: "itemEnumerables",
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
                name: "id",
                type: "uint256",
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
                name: "",
                type: "uint256",
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
                name: "manager",
                type: "address",
            },
        ],
        name: "managerMetaversesCount",
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
                type: "uint256",
            },
            {
                name: "",
                type: "address",
            },
        ],
        name: "managersIndex",
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
        inputs: [
            {
                name: "",
                type: "uint256",
            },
            {
                name: "",
                type: "address",
            },
        ],
        name: "itemAddedBlocks",
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
                type: "uint256",
            },
            {
                name: "",
                type: "address",
            },
        ],
        name: "itemTotalSupplies",
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
                name: "id",
                type: "uint256",
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
        constant: false,
        inputs: [
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "item",
                type: "address",
            },
            {
                name: "enumerable",
                type: "bool",
            },
        ],
        name: "setItemEnumerable",
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
        name: "mileageMode",
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
                name: "id",
                type: "uint256",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "itemAddrCount",
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
                type: "uint256",
            },
            {
                name: "",
                type: "address",
            },
        ],
        name: "itemAdded",
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
                name: "id",
                type: "uint256",
            },
            {
                name: "item",
                type: "address",
            },
            {
                name: "extra",
                type: "string",
            },
        ],
        name: "setItemExtra",
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
            {
                name: "",
                type: "address",
            },
        ],
        name: "itemExtras",
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
                name: "proposalId",
                type: "uint256",
            },
            {
                name: "extra",
                type: "string",
            },
        ],
        name: "passProposal",
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
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "managerMetaversesIndex",
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
                type: "uint256",
            },
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "itemAddrs",
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
                name: "",
                type: "uint256",
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
        constant: false,
        inputs: [
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "item",
                type: "address",
            },
            {
                name: "itemType",
                type: "uint8",
            },
            {
                name: "extra",
                type: "string",
            },
        ],
        name: "addItem",
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
            {
                name: "",
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
        constant: false,
        inputs: [
            {
                name: "id",
                type: "uint256",
            },
        ],
        name: "mileageOn",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "item",
                type: "address",
            },
        ],
        name: "getItemTotalSupply",
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
        constant: false,
        inputs: [
            {
                name: "id",
                type: "uint256",
            },
        ],
        name: "exitOnlyKlubsMembership",
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
                name: "id",
                type: "uint256",
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
                name: "id",
                type: "uint256",
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
                name: "id",
                type: "uint256",
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
                name: "id",
                type: "uint256",
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
                name: "id",
                type: "uint256",
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
                name: "id",
                type: "uint256",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "MileageOn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "uint256",
            },
        ],
        name: "MileageOff",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "uint256",
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
                name: "id",
                type: "uint256",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "item",
                type: "address",
            },
            {
                indexed: false,
                name: "itemType",
                type: "uint8",
            },
            {
                indexed: true,
                name: "proposer",
                type: "address",
            },
        ],
        name: "ProposeItem",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "item",
                type: "address",
            },
            {
                indexed: false,
                name: "itemType",
                type: "uint8",
            },
        ],
        name: "AddItem",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "item",
                type: "address",
            },
            {
                indexed: false,
                name: "enumerable",
                type: "bool",
            },
        ],
        name: "SetItemEnumerable",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "item",
                type: "address",
            },
            {
                indexed: false,
                name: "totalSupply",
                type: "uint256",
            },
        ],
        name: "SetItemTotalSupply",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "item",
                type: "address",
            },
            {
                indexed: false,
                name: "extra",
                type: "string",
            },
        ],
        name: "SetItemExtra",
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
const _bytecode = "0x60806040819052600080546001600160a01b03191633178082556001600160a01b0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3612985806100576000396000f3fe608060405234801561001057600080fd5b50600436106102955760003560e01c806385a5679a11610167578063b88fc4af116100ce578063c963b25f11610087578063c963b25f14610abc578063d0bea84114610b49578063d8553a2114610b6c578063dd4fd81114610b89578063f2fde38b14610bb5578063fffa387814610bdb57610295565b8063b88fc4af1461092c578063bc9da132146109af578063c08b6adb146109db578063c5978f7b14610a50578063c59b7f8414610a7c578063c86352f314610a9f57610295565b80639fa5e772116101205780639fa5e77214610849578063a341e05114610866578063a7b63a4b1461089a578063ae846071146108b7578063b1f32e77146108e3578063b2c9d1891461090057610295565b806385a5679a1461077357806388d7cab6146107995780638da5cb5b146107c55780638f32d59b146107e95780639480c8fc146107f1578063958a772d1461081d57610295565b806349d1834a1161020b5780635a7e013a116101c45780635a7e013a1461067b5780636b6ece26146106b0578063715018a6146106cd5780637aed10af146106d55780637db3c828146107015780637f77f5741461073357610295565b806349d1834a146104ea5780634ce4e6c71461053a578063517b46ca146105575780635184eca81461058c5780635468bc2f146105bd57806358f8318d1461064f57610295565b806338cf0b151161025d57806338cf0b15146103915780633d0d69cb146103bd5780633e4417a51461042b578063411dabc91461049357806345374c74146104b057806347241575146104e257610295565b80631519ff4c1461029a5780631a5d8bd3146102b95780631c3679bb146102d657806327f17fef146103145780633740cfa61461031c575b600080fd5b6102b7600480360360208110156102b057600080fd5b5035610bf8565b005b6102b7600480360360208110156102cf57600080fd5b5035610c90565b610302600480360360408110156102ec57600080fd5b506001600160a01b038135169060200135610d2b565b60408051918252519081900360200190f35b610302610d59565b6102b76004803603604081101561033257600080fd5b81359190810190604081016020820135600160201b81111561035357600080fd5b82018360208201111561036557600080fd5b803590602001918460018302840111600160201b8311171561038657600080fd5b509092509050610d60565b6102b7600480360360408110156103a757600080fd5b50803590602001356001600160a01b0316610e1b565b6102b7600480360360208110156103d357600080fd5b810190602081018135600160201b8111156103ed57600080fd5b8201836020820111156103ff57600080fd5b803590602001918460018302840111600160201b8311171561042057600080fd5b509092509050610e6e565b6104486004803603602081101561044157600080fd5b5035610f08565b604080518581526001600160a01b038516602082015290810183600181111561046d57fe5b60ff1681526001600160a01b039092166020830152506040805191829003019350915050f35b6102b7600480360360208110156104a957600080fd5b5035610f50565b6102b7600480360360608110156104c657600080fd5b508035906001600160a01b036020820135169060400135610fc1565b6103026110b6565b6105166004803603604081101561050057600080fd5b50803590602001356001600160a01b03166110bc565b6040518082600181111561052657fe5b60ff16815260200191505060405180910390f35b6102b76004803603602081101561055057600080fd5b50356110dc565b6102b76004803603606081101561056d57600080fd5b5080359060208101356001600160a01b0316906040013560ff16611175565b6105a9600480360360208110156105a257600080fd5b5035611242565b604080519115158252519081900360200190f35b6105da600480360360208110156105d357600080fd5b5035611257565b6040805160208082528351818301528351919283929083019185019080838360005b838110156106145781810151838201526020016105fc565b50505050905090810190601f1680156106415780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102b76004803603604081101561066557600080fd5b50803590602001356001600160a01b03166112f2565b6102b76004803603606081101561069157600080fd5b5080359060208101356001600160a01b0316906040013560ff166115c5565b6102b7600480360360208110156106c657600080fd5b5035611723565b6102b76117be565b6105a9600480360360408110156106eb57600080fd5b50803590602001356001600160a01b0316611852565b6102b76004803603606081101561071757600080fd5b508035906001600160a01b036020820135169060400135611872565b6107506004803603602081101561074957600080fd5b5035611939565b604080516001600160a01b03909316835260208301919091528051918290030190f35b6103026004803603602081101561078957600080fd5b50356001600160a01b031661195e565b610302600480360360408110156107af57600080fd5b50803590602001356001600160a01b031661197d565b6107cd61199a565b604080516001600160a01b039092168252519081900360200190f35b6105a96119a9565b6103026004803603604081101561080757600080fd5b50803590602001356001600160a01b03166119ba565b6103026004803603604081101561083357600080fd5b50803590602001356001600160a01b03166119d7565b6103026004803603602081101561085f57600080fd5b50356119f4565b6102b76004803603606081101561087c57600080fd5b508035906001600160a01b0360208201351690604001351515611a06565b6105a9600480360360208110156108b057600080fd5b5035611b12565b6105a9600480360360408110156108cd57600080fd5b50803590602001356001600160a01b0316611b27565b610302600480360360208110156108f957600080fd5b5035611b7b565b6105a96004803603604081101561091657600080fd5b50803590602001356001600160a01b0316611b8d565b6102b76004803603606081101561094257600080fd5b8135916001600160a01b0360208201351691810190606081016040820135600160201b81111561097157600080fd5b82018360208201111561098357600080fd5b803590602001918460018302840111600160201b831117156109a457600080fd5b509092509050611bad565b6105da600480360360408110156109c557600080fd5b50803590602001356001600160a01b0316611c7d565b6102b7600480360360408110156109f157600080fd5b81359190810190604081016020820135600160201b811115610a1257600080fd5b820183602082011115610a2457600080fd5b803590602001918460018302840111600160201b83111715610a4557600080fd5b509092509050611cee565b61030260048036036040811015610a6657600080fd5b506001600160a01b038135169060200135611ea0565b6107cd60048036036040811015610a9257600080fd5b5080359060200135611ebd565b6105a960048036036020811015610ab557600080fd5b5035611ef2565b6102b760048036036080811015610ad257600080fd5b8135916001600160a01b036020820135169160ff6040830135169190810190608081016060820135600160201b811115610b0b57600080fd5b820183602082011115610b1d57600080fd5b803590602001918460018302840111600160201b83111715610b3e57600080fd5b509092509050611f07565b6107cd60048036036040811015610b5f57600080fd5b5080359060200135611ffc565b6102b760048036036020811015610b8257600080fd5b5035612015565b61030260048036036040811015610b9f57600080fd5b50803590602001356001600160a01b0316612089565b6102b760048036036020811015610bcb57600080fd5b50356001600160a01b0316612185565b6102b760048036036020811015610bf157600080fd5b50356121db565b610c006119a9565b610c425760408051600160e51b62461bcd028152602060048201819052602482015260008051602061293a833981519152604482015290519081900360640190fd5b6001548110610c5057600080fd5b6000818152600a6020526040808220805460ff191690555182917fee8bed8386b48244e3cabc7d4a19386d2b144c15ead008998c9052f8f46cb40a91a250565b610c986119a9565b610cda5760408051600160e51b62461bcd028152602060048201819052602482015260008051602061293a833981519152604482015290519081900360640190fd5b6001548110610ce857600080fd5b600081815260086020526040808220805460ff191660011790555182917f8b0547e634b6dd1d60d1ea7633051e2c226c65c3435a8a6fa1e588b2ff27ce0391a250565b60046020528160005260406000208181548110610d4457fe5b90600052602060002001600091509150505481565b600b545b90565b82610d6b8133611b27565b80610d795750610d796119a9565b610d8257600080fd5b6001548410610d9057600080fd5b81610d9a57600080fd5b6000848152600760205260409020610db390848461282f565b50837fd8a7cdf25af53a78bfdd37aece9275e10f48c4a034807823353c0eaac0112eef848460405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a250505050565b81610e268133611b27565b80610e345750610e346119a9565b610e3d57600080fd5b610e478383611b27565b15610e5157600080fd5b6001548310610e5f57600080fd5b610e698383612273565b505050565b60018054808201909155610e828133612273565b8115610e69576000818152600760205260409020610ea190848461282f565b50807fd8a7cdf25af53a78bfdd37aece9275e10f48c4a034807823353c0eaac0112eef848460405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a2505050565b600b8181548110610f1557fe5b60009182526020909120600390910201805460018201546002909201549092506001600160a01b0380831692600160a01b900460ff16911684565b80610f5b8133611b27565b80610f695750610f696119a9565b610f7257600080fd5b6001548210610f8057600080fd5b600082815260096020526040808220805460ff191690555183917f816cdf0bf7d8ce4a9626e65c552dae62a9c2e9ff6473f519eaa9895dde6d1e2391a25050565b82610fcc8133611b27565b80610fda5750610fda6119a9565b610fe357600080fd5b6001548410610ff157600080fd5b6000848152600d602090815260408083206001600160a01b038716845290915290205460ff1661102057600080fd5b60008481526010602090815260408083206001600160a01b038716845290915290205460ff16156110575761105784846000611a06565b60008481526011602090815260408083206001600160a01b038716808552908352928190208590558051858152905187927fc53f1bb251102b1474ba235c4a4530fde1aafe9e344ee2c1114bbd79474de0af928290030190a350505050565b60015481565b600f60209081526000928352604080842090915290825290205460ff1681565b6000600b82815481106110eb57fe5b90600052602060002090600302019050611109816000015433611b27565b8061112657506001810154611126906001600160a01b0316612321565b61112f57600080fd5b600b828154811061113c57fe5b6000918252602082206003909102019081556001810180546001600160a81b031916905560020180546001600160a01b03191690555050565b826111808133611b27565b8061118e575061118e6119a9565b61119757600080fd5b60015484106111a557600080fd5b6111ae83612321565b6111b757600080fd5b8160018111156111c357fe5b6000858152600f602090815260408083206001600160a01b038816845290915290205460ff1660018111156111f457fe5b14156111ff57600080fd5b6000848152600f602090815260408083206001600160a01b03871684529091529020805483919060ff19166001838181111561123757fe5b021790555050505050565b60086020526000908152604090205460ff1681565b60076020908152600091825260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156112ea5780601f106112bf576101008083540402835291602001916112ea565b820191906000526020600020905b8154815290600101906020018083116112cd57829003601f168201915b505050505081565b816112fd8133611b27565b8061130b575061130b6119a9565b61131457600080fd5b6001600160a01b038216331480159061133257506113328383611b27565b61133b57600080fd5b60008381526002602052604081205461135b90600163ffffffff61258416565b90508061136757600080fd5b60008481526003602090815260408083206001600160a01b03871684529091529020548181146114255760008581526002602052604081208054849081106113ab57fe5b60009182526020808320909101548883526002909152604090912080546001600160a01b0390921692508291849081106113e157fe5b600091825260208083209190910180546001600160a01b0319166001600160a01b039485161790558882526003815260408083209490931682529290925290208190555b60008581526002602052604090208054906114449060001983016128ad565b5060008581526003602090815260408083206001600160a01b03881684528252808320839055600490915290205461148390600163ffffffff61258416565b6001600160a01b03851660009081526005602090815260408083208984529091529020549092509050808214611547576001600160a01b03841660009081526004602052604081208054849081106114d757fe5b906000526020600020015490508060046000876001600160a01b03166001600160a01b03168152602001908152602001600020838154811061151557fe5b60009182526020808320909101929092556001600160a01b038716815260058252604080822093825292909152208190555b6001600160a01b03841660009081526004602052604090208054906115709060001983016128ad565b506001600160a01b03841660008181526005602090815260408083208984529091528082208290555187917f6b7e88c325c1af81275e48ab46629385b9cfba94d44acde2249c125cb6e8cb4d91a35050505050565b826115d08133611b27565b806115de57506115de6119a9565b6115e757600080fd5b60015484106115f557600080fd5b600b6040518060800160405280868152602001856001600160a01b0316815260200184600181111561162357fe5b8152336020918201528254600180820180865560009586529483902084516003909302019182559183015181830180546001600160a01b0319166001600160a01b03909216919091178082556040850151929374ff00000000000000000000000000000000000000001990911690600160a01b9084908111156116a257fe5b021790555060609190910151600290910180546001600160a01b0319166001600160a01b039283161790556040513392509085169086907f1a516475f5ec523509e0db2abd11aabb4b7c649bcbce725aea5823308aa871bf9086908082600181111561170a57fe5b60ff16815260200191505060405180910390a450505050565b61172b6119a9565b61176d5760408051600160e51b62461bcd028152602060048201819052602482015260008051602061293a833981519152604482015290519081900360640190fd5b600154811061177b57600080fd5b6000818152600a6020526040808220805460ff191660011790555182917f10c91cab40bd045b8ac5fdc1ca69bfc3f8a63ab08131495a922b3653382187f691a250565b6117c66119a9565b6118085760408051600160e51b62461bcd028152602060048201819052602482015260008051602061293a833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b601060209081526000928352604080842090915290825290205460ff1681565b8261187d8133611b27565b8061188b575061188b6119a9565b61189457600080fd5b60015484106118a257600080fd5b6103e88211156118b157600080fd5b6040805180820182526001600160a01b03858116808352602080840187815260008a815260068352869020945185546001600160a01b0319169416939093178455915160019093019290925582519182528101849052815186927fdcca22f295107e6117b181366b355281e48778fed7e9a60d7cf39b41b1ae27b0928290030190a250505050565b600660205260009081526040902080546001909101546001600160a01b039091169082565b6001600160a01b0381166000908152600460205260409020545b919050565b600360209081526000928352604080842090915290825290205481565b6000546001600160a01b031690565b6000546001600160a01b0316331490565b600e60209081526000928352604080842090915290825290205481565b601160209081526000928352604080842090915290825290205481565b60009081526002602052604090205490565b82611a118133611b27565b80611a1f5750611a1f6119a9565b611a2857600080fd5b6001548410611a3657600080fd5b6000848152600d602090815260408083206001600160a01b038716845290915290205460ff16611a6557600080fd5b6000848152600f602090815260408083206001600160a01b038716845290915281205460ff166001811115611a9657fe5b1415611aa7578115611aa757600080fd5b60008481526010602090815260408083206001600160a01b03871680855290835292819020805460ff19168615159081179091558151908152905187927f408fc105e6ebb9eda2e6c81321c2e8c4b0adca17c8ad6d0b6318960fd1183504928290030190a350505050565b60096020526000908152604090205460ff1681565b6000828152600260209081526040808320600383528184206001600160a01b03861680865293529083205481548110611b5c57fe5b6000918252602090912001546001600160a01b03161490505b92915050565b6000908152600c602052604090205490565b600d60209081526000928352604080842090915290825290205460ff1681565b83611bb88133611b27565b80611bc65750611bc66119a9565b611bcf57600080fd5b6001548510611bdd57600080fd5b60008581526012602090815260408083206001600160a01b03881684529091529020611c0a90848461282f565b50836001600160a01b0316857f8200cee62b7d18ce0bfe2fc7aaf4fdf7a04feda2ef7c0a997ba154c01e0a014f858560405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a35050505050565b60126020908152600092835260408084208252918352918190208054825160026001831615610100026000190190921691909104601f8101859004850282018501909352828152929091908301828280156112ea5780601f106112bf576101008083540402835291602001916112ea565b611cf66128d1565b600b8481548110611d0357fe5b600091825260209182902060408051608081018252600393909302909101805483526001808201546001600160a01b038116958501959095529293909291840191600160a01b90910460ff1690811115611d5957fe5b6001811115611d6457fe5b8152600291909101546001600160a01b0316602091820152810151909150611d8b90612321565b611d9457600080fd5b611dab8160000151826020015183604001516125cd565b8115611e585780516000908152601260209081526040808320828501516001600160a01b031684529091529020611de390848461282f565b5080602001516001600160a01b031681600001517f8200cee62b7d18ce0bfe2fc7aaf4fdf7a04feda2ef7c0a997ba154c01e0a014f858560405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a35b600b8481548110611e6557fe5b6000918252602082206003909102019081556001810180546001600160a81b031916905560020180546001600160a01b031916905550505050565b600560209081526000928352604080842090915290825290205481565b600c6020528160005260406000208181548110611ed657fe5b6000918252602090912001546001600160a01b03169150829050565b600a6020526000908152604090205460ff1681565b84611f128133611b27565b80611f205750611f206119a9565b611f2957600080fd5b6001548610611f3757600080fd5b611f4085612321565b611f4957600080fd5b611f548686866125cd565b8115611ff45760008681526012602090815260408083206001600160a01b03891684529091529020611f8790848461282f565b50846001600160a01b0316867f8200cee62b7d18ce0bfe2fc7aaf4fdf7a04feda2ef7c0a997ba154c01e0a014f858560405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a35b505050505050565b60026020528160005260406000208181548110611ed657fe5b806120208133611b27565b8061202e575061202e6119a9565b61203757600080fd5b600154821061204557600080fd5b600082815260096020526040808220805460ff191660011790555183917f80855aed77c32a14f6d17b1086b5bcfef149b937fa539597f6186ab810d6436991a25050565b60008281526010602090815260408083206001600160a01b038516845290915281205460ff1680156120eb575060016000848152600f602090815260408083206001600160a01b038716845290915290205460ff1660018111156120e957fe5b145b1561215c57816001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561212957600080fd5b505afa15801561213d573d6000803e3d6000fd5b505050506040513d602081101561215357600080fd5b50519050611b75565b5060008281526011602090815260408083206001600160a01b0385168452909152902054611b75565b61218d6119a9565b6121cf5760408051600160e51b62461bcd028152602060048201819052602482015260008051602061293a833981519152604482015290519081900360640190fd5b6121d8816126ec565b50565b6121e36119a9565b6122255760408051600160e51b62461bcd028152602060048201819052602482015260008051602061293a833981519152604482015290519081900360640190fd5b600154811061223357600080fd5b600081815260086020526040808220805460ff191690555182917f6f036f355d0fadd7449ea1ab869f806506bc9d65e2324ee15f5cdbc38f1e6f6f91a250565b60008281526002602090815260408083208054600384528285206001600160a01b0387168087529085528386208290556001808301845592865284862090910180546001600160a01b0319168217905580855260048085528386208054600587528588208a8952875285882081905591865292810183559185529284200185905551909184917f3d80aae9ad3ea837921477baf4e489f629f74ce07ddf1959858f52aab67ed91d9190a35050565b600061232b6119a9565b1561233857506001611978565b6123418261278f565b1561257c5760408051600481526024810182526020810180516001600160e01b0316600160e01b638da5cb5b02178152915181516000936060936001600160a01b038816939092909182918083835b602083106123af5780518252601f199092019160209182019101612390565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d806000811461240f576040519150601f19603f3d011682016040523d82523d6000602084013e612414565b606091505b509150915081801561244d5750336001600160a01b031681806020019051602081101561244057600080fd5b50516001600160a01b0316145b1561245d57600192505050611978565b604080513360248083019190915282518083039091018152604490910182526020810180516001600160e01b0316600160e11b6355138f0d02178152915181516000936060936001600160a01b038a16939092909182918083835b602083106124d75780518252601f1990920191602091820191016124b8565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114612537576040519150601f19603f3d011682016040523d82523d6000602084013e61253c565b606091505b5091509150818015612561575080806020019051602081101561255e57600080fd5b50515b15612573576001945050505050611978565b50505050611978565b506000611978565b60006125c683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612795565b9392505050565b6000838152600d602090815260408083206001600160a01b038616845290915290205460ff16156125fd57600080fd5b6000838152600c602090815260408083208054600180820183559185528385200180546001600160a01b0319166001600160a01b038816908117909155878552600d84528285208186528452828520805460ff199081168417909155888652600e85528386208287528552838620439055888652600f8552838620918652935292208054849391921690838181111561269257fe5b0217905550816001600160a01b0316837f82c425020ede9514a37cf1371246462fcc753765ee8baceb113b89b9f58848e283604051808260018111156126d457fe5b60ff16815260200191505060405180910390a3505050565b6001600160a01b03811661273457604051600160e51b62461bcd0281526004018080602001828103825260268152602001806129146026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b6000818484111561282757604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156127ec5781810151838201526020016127d4565b50505050905090810190601f1680156128195780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106128705782800160ff1982351617855561289d565b8280016001018555821561289d579182015b8281111561289d578235825591602001919060010190612882565b506128a99291506128f9565b5090565b815481835581811115610e6957600083815260209020610e699181019083016128f9565b6040805160808101825260008082526020820181905290918201908152600060209091015290565b610d5d91905b808211156128a957600081556001016128ff56fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a165627a7a72305820bf37aa10cc400c5660cdb8348ab8e42c407c1d747b1b333a1cc9bea4433364950029";
//# sourceMappingURL=Metaverses__factory.js.map