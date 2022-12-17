"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PFPStoreV2__factory = void 0;
const ethers_1 = require("ethers");
class PFPStoreV2__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.PFPStoreV2__factory = PFPStoreV2__factory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "addrs",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
            {
                name: "to",
                type: "address[]",
            },
        ],
        name: "batchTransfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "seller",
                type: "address",
            },
        ],
        name: "userAuctionInfoLength",
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
                name: "id",
                type: "uint256",
            },
            {
                name: "offerId",
                type: "uint256",
            },
        ],
        name: "cancelOffer",
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
                name: "id",
                type: "uint256",
            },
            {
                name: "price",
                type: "uint256",
            },
        ],
        name: "bid",
        outputs: [
            {
                name: "biddingId",
                type: "uint256",
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
                name: "user",
                type: "address",
            },
        ],
        name: "banUser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_pfps",
                type: "address",
            },
        ],
        name: "setPFPs",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "mileage",
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
        name: "onSalesCount",
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
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "userAuctionInfo",
        outputs: [
            {
                name: "pfp",
                type: "address",
            },
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "price",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "offerCount",
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
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "sales",
        outputs: [
            {
                name: "seller",
                type: "address",
            },
            {
                name: "price",
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
                name: "addrs",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
            {
                name: "offerIds",
                type: "uint256[]",
            },
        ],
        name: "cancelOfferByOwner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "bidder",
                type: "address",
            },
        ],
        name: "userBiddingInfoLength",
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
                name: "id",
                type: "uint256",
            },
            {
                name: "offerId",
                type: "uint256",
            },
        ],
        name: "acceptOffer",
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
        name: "auctions",
        outputs: [
            {
                name: "seller",
                type: "address",
            },
            {
                name: "startPrice",
                type: "uint256",
            },
            {
                name: "endBlock",
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
            {
                name: "",
                type: "uint256",
            },
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "biddings",
        outputs: [
            {
                name: "bidder",
                type: "address",
            },
            {
                name: "price",
                type: "uint256",
            },
            {
                name: "mileage",
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
                name: "addrs",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
            {
                name: "prices",
                type: "uint256[]",
            },
            {
                name: "mileages",
                type: "uint256[]",
            },
        ],
        name: "buy",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "pfps",
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
                type: "address",
            },
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "userOfferInfo",
        outputs: [
            {
                name: "pfp",
                type: "address",
            },
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "price",
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
                name: "user",
                type: "address",
            },
        ],
        name: "unbanUser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "seller",
                type: "address",
            },
        ],
        name: "userSellInfoLength",
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
                name: "id",
                type: "uint256",
            },
            {
                name: "startPrice",
                type: "uint256",
            },
            {
                name: "endBlock",
                type: "uint256",
            },
        ],
        name: "createAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_fee",
                type: "uint256",
            },
        ],
        name: "setFee",
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
        name: "onAuctionsIndex",
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
                name: "addr",
                type: "address",
            },
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "price",
                type: "uint256",
            },
        ],
        name: "makeOffer",
        outputs: [
            {
                name: "offerId",
                type: "uint256",
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
                name: "interval",
                type: "uint256",
            },
        ],
        name: "setAuctionExtensionInterval",
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
        name: "onAuctions",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "cancelAuction",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "biddingCount",
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
        constant: false,
        inputs: [
            {
                name: "addr",
                type: "address",
            },
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "price",
                type: "uint256",
            },
            {
                name: "_mileage",
                type: "uint256",
            },
        ],
        name: "bid",
        outputs: [
            {
                name: "biddingId",
                type: "uint256",
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
                name: "addrs",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
        ],
        name: "cancelSaleByOwner",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "checkAuction",
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
        name: "isBanned",
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
                name: "offeror",
                type: "address",
            },
        ],
        name: "userOfferInfoLength",
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
                name: "addrs",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
            {
                name: "prices",
                type: "uint256[]",
            },
        ],
        name: "sell",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "auctionExtensionInterval",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "claim",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "addrs",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
        ],
        name: "cancelSale",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "addrs",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
            {
                name: "prices",
                type: "uint256[]",
            },
        ],
        name: "changeSellPrice",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "addrs",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
        ],
        name: "cancelAuctionByOwner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "feeReceiver",
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
                type: "address",
            },
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "userSellInfo",
        outputs: [
            {
                name: "pfp",
                type: "address",
            },
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "price",
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
        name: "mix",
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
        name: "onAuctionsCount",
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
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "onSales",
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
                name: "addrs",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
        ],
        name: "buy",
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
        name: "userBiddingInfo",
        outputs: [
            {
                name: "pfp",
                type: "address",
            },
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "price",
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
        name: "fee",
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
            {
                name: "",
                type: "uint256",
            },
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "offers",
        outputs: [
            {
                name: "offeror",
                type: "address",
            },
            {
                name: "price",
                type: "uint256",
            },
            {
                name: "mileage",
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
                name: "id",
                type: "uint256",
            },
            {
                name: "price",
                type: "uint256",
            },
            {
                name: "_mileage",
                type: "uint256",
            },
        ],
        name: "makeOffer",
        outputs: [
            {
                name: "offerId",
                type: "uint256",
            },
        ],
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
        name: "onSalesIndex",
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
                name: "_receiver",
                type: "address",
            },
        ],
        name: "setFeeReceiver",
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
        constant: true,
        inputs: [
            {
                name: "addr",
                type: "address",
            },
            {
                name: "id",
                type: "uint256",
            },
        ],
        name: "checkSelling",
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
        inputs: [
            {
                name: "_pfps",
                type: "address",
            },
            {
                name: "_mix",
                type: "address",
            },
            {
                name: "_mileage",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                name: "price",
                type: "uint256",
            },
        ],
        name: "Sell",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                name: "price",
                type: "uint256",
            },
        ],
        name: "ChangeSellPrice",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "buyer",
                type: "address",
            },
            {
                indexed: false,
                name: "price",
                type: "uint256",
            },
        ],
        name: "Buy",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
        ],
        name: "CancelSale",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "offerId",
                type: "uint256",
            },
            {
                indexed: false,
                name: "offeror",
                type: "address",
            },
            {
                indexed: false,
                name: "price",
                type: "uint256",
            },
        ],
        name: "MakeOffer",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "offerId",
                type: "uint256",
            },
            {
                indexed: false,
                name: "offeror",
                type: "address",
            },
        ],
        name: "CancelOffer",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "offerId",
                type: "uint256",
            },
            {
                indexed: false,
                name: "acceptor",
                type: "address",
            },
        ],
        name: "AcceptOffer",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                name: "startPrice",
                type: "uint256",
            },
            {
                indexed: false,
                name: "endBlock",
                type: "uint256",
            },
        ],
        name: "CreateAuction",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
        ],
        name: "CancelAuction",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "bidder",
                type: "address",
            },
            {
                indexed: false,
                name: "price",
                type: "uint256",
            },
        ],
        name: "Bid",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "bidder",
                type: "address",
            },
            {
                indexed: false,
                name: "price",
                type: "uint256",
            },
        ],
        name: "Claim",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "CancelSaleByOwner",
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
                name: "id",
                type: "uint256",
            },
            {
                indexed: true,
                name: "offerId",
                type: "uint256",
            },
        ],
        name: "CancelOfferByOwner",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "CancelAuctionByOwner",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "user",
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
                name: "user",
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
//# sourceMappingURL=PFPStoreV2__factory.js.map