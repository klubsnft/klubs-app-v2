/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IItemStoreCommonInterface extends ethers.utils.Interface {
  functions: {
    "banUser(address)": FunctionFragment;
    "mileage()": FunctionFragment;
    "batchTransfer(uint256[],address[],uint256[],address[],uint256[])": FunctionFragment;
    "unbanUser(address)": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "setAuctionExtensionInterval(uint256)": FunctionFragment;
    "setMetaverses(address)": FunctionFragment;
    "isBannedUser(address)": FunctionFragment;
    "metaverses()": FunctionFragment;
    "auctionExtensionInterval()": FunctionFragment;
    "feeReceiver()": FunctionFragment;
    "mix()": FunctionFragment;
    "fee()": FunctionFragment;
    "isMetaverseWhitelisted(uint256)": FunctionFragment;
    "setFeeReceiver(address)": FunctionFragment;
    "isItemWhitelisted(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "banUser", values: [string]): string;
  encodeFunctionData(functionFragment: "mileage", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "batchTransfer",
    values: [BigNumberish[], string[], BigNumberish[], string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "unbanUser", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuctionExtensionInterval",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMetaverses",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isBannedUser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "metaverses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "auctionExtensionInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mix", values?: undefined): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isMetaverseWhitelisted",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeReceiver",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isItemWhitelisted",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "banUser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mileage", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unbanUser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuctionExtensionInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMetaverses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBannedUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "metaverses", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "auctionExtensionInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mix", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isMetaverseWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isItemWhitelisted",
    data: BytesLike
  ): Result;

  events: {
    "Ban(address)": EventFragment;
    "Unban(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Ban"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unban"): EventFragment;
}

export class IItemStoreCommon extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IItemStoreCommonInterface;

  functions: {
    banUser(user: string, overrides?: Overrides): Promise<ContractTransaction>;

    "banUser(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mileage(overrides?: CallOverrides): Promise<[string]>;

    "mileage()"(overrides?: CallOverrides): Promise<[string]>;

    batchTransfer(
      metaverseIds: BigNumberish[],
      items: string[],
      ids: BigNumberish[],
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "batchTransfer(uint256[],address[],uint256[],address[],uint256[])"(
      metaverseIds: BigNumberish[],
      items: string[],
      ids: BigNumberish[],
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unbanUser(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unbanUser(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFee(uint256)"(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setAuctionExtensionInterval(
      interval: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAuctionExtensionInterval(uint256)"(
      interval: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMetaverses(
      _metaverses: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMetaverses(address)"(
      _metaverses: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isBannedUser(user: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isBannedUser(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    metaverses(overrides?: CallOverrides): Promise<[string]>;

    "metaverses()"(overrides?: CallOverrides): Promise<[string]>;

    auctionExtensionInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    "auctionExtensionInterval()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    feeReceiver(overrides?: CallOverrides): Promise<[string]>;

    "feeReceiver()"(overrides?: CallOverrides): Promise<[string]>;

    mix(overrides?: CallOverrides): Promise<[string]>;

    "mix()"(overrides?: CallOverrides): Promise<[string]>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    "fee()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    isMetaverseWhitelisted(
      metaverseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isMetaverseWhitelisted(uint256)"(
      metaverseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setFeeReceiver(
      _receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFeeReceiver(address)"(
      _receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isItemWhitelisted(
      metaverseId: BigNumberish,
      item: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isItemWhitelisted(uint256,address)"(
      metaverseId: BigNumberish,
      item: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  banUser(user: string, overrides?: Overrides): Promise<ContractTransaction>;

  "banUser(address)"(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mileage(overrides?: CallOverrides): Promise<string>;

  "mileage()"(overrides?: CallOverrides): Promise<string>;

  batchTransfer(
    metaverseIds: BigNumberish[],
    items: string[],
    ids: BigNumberish[],
    to: string[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "batchTransfer(uint256[],address[],uint256[],address[],uint256[])"(
    metaverseIds: BigNumberish[],
    items: string[],
    ids: BigNumberish[],
    to: string[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unbanUser(user: string, overrides?: Overrides): Promise<ContractTransaction>;

  "unbanUser(address)"(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setFee(
    _fee: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFee(uint256)"(
    _fee: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setAuctionExtensionInterval(
    interval: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAuctionExtensionInterval(uint256)"(
    interval: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMetaverses(
    _metaverses: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMetaverses(address)"(
    _metaverses: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isBannedUser(user: string, overrides?: CallOverrides): Promise<boolean>;

  "isBannedUser(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  metaverses(overrides?: CallOverrides): Promise<string>;

  "metaverses()"(overrides?: CallOverrides): Promise<string>;

  auctionExtensionInterval(overrides?: CallOverrides): Promise<BigNumber>;

  "auctionExtensionInterval()"(overrides?: CallOverrides): Promise<BigNumber>;

  feeReceiver(overrides?: CallOverrides): Promise<string>;

  "feeReceiver()"(overrides?: CallOverrides): Promise<string>;

  mix(overrides?: CallOverrides): Promise<string>;

  "mix()"(overrides?: CallOverrides): Promise<string>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  "fee()"(overrides?: CallOverrides): Promise<BigNumber>;

  isMetaverseWhitelisted(
    metaverseId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isMetaverseWhitelisted(uint256)"(
    metaverseId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setFeeReceiver(
    _receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFeeReceiver(address)"(
    _receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isItemWhitelisted(
    metaverseId: BigNumberish,
    item: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isItemWhitelisted(uint256,address)"(
    metaverseId: BigNumberish,
    item: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    banUser(user: string, overrides?: CallOverrides): Promise<void>;

    "banUser(address)"(user: string, overrides?: CallOverrides): Promise<void>;

    mileage(overrides?: CallOverrides): Promise<string>;

    "mileage()"(overrides?: CallOverrides): Promise<string>;

    batchTransfer(
      metaverseIds: BigNumberish[],
      items: string[],
      ids: BigNumberish[],
      to: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "batchTransfer(uint256[],address[],uint256[],address[],uint256[])"(
      metaverseIds: BigNumberish[],
      items: string[],
      ids: BigNumberish[],
      to: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    unbanUser(user: string, overrides?: CallOverrides): Promise<void>;

    "unbanUser(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFee(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setFee(uint256)"(
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAuctionExtensionInterval(
      interval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAuctionExtensionInterval(uint256)"(
      interval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMetaverses(
      _metaverses: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMetaverses(address)"(
      _metaverses: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isBannedUser(user: string, overrides?: CallOverrides): Promise<boolean>;

    "isBannedUser(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    metaverses(overrides?: CallOverrides): Promise<string>;

    "metaverses()"(overrides?: CallOverrides): Promise<string>;

    auctionExtensionInterval(overrides?: CallOverrides): Promise<BigNumber>;

    "auctionExtensionInterval()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeReceiver(overrides?: CallOverrides): Promise<string>;

    "feeReceiver()"(overrides?: CallOverrides): Promise<string>;

    mix(overrides?: CallOverrides): Promise<string>;

    "mix()"(overrides?: CallOverrides): Promise<string>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    "fee()"(overrides?: CallOverrides): Promise<BigNumber>;

    isMetaverseWhitelisted(
      metaverseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isMetaverseWhitelisted(uint256)"(
      metaverseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setFeeReceiver(_receiver: string, overrides?: CallOverrides): Promise<void>;

    "setFeeReceiver(address)"(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isItemWhitelisted(
      metaverseId: BigNumberish,
      item: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isItemWhitelisted(uint256,address)"(
      metaverseId: BigNumberish,
      item: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Ban(user: string | null): EventFilter;

    Unban(user: string | null): EventFilter;
  };

  estimateGas: {
    banUser(user: string, overrides?: Overrides): Promise<BigNumber>;

    "banUser(address)"(user: string, overrides?: Overrides): Promise<BigNumber>;

    mileage(overrides?: CallOverrides): Promise<BigNumber>;

    "mileage()"(overrides?: CallOverrides): Promise<BigNumber>;

    batchTransfer(
      metaverseIds: BigNumberish[],
      items: string[],
      ids: BigNumberish[],
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "batchTransfer(uint256[],address[],uint256[],address[],uint256[])"(
      metaverseIds: BigNumberish[],
      items: string[],
      ids: BigNumberish[],
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    unbanUser(user: string, overrides?: Overrides): Promise<BigNumber>;

    "unbanUser(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setFee(_fee: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setFee(uint256)"(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setAuctionExtensionInterval(
      interval: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAuctionExtensionInterval(uint256)"(
      interval: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMetaverses(
      _metaverses: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMetaverses(address)"(
      _metaverses: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isBannedUser(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isBannedUser(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    metaverses(overrides?: CallOverrides): Promise<BigNumber>;

    "metaverses()"(overrides?: CallOverrides): Promise<BigNumber>;

    auctionExtensionInterval(overrides?: CallOverrides): Promise<BigNumber>;

    "auctionExtensionInterval()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    "feeReceiver()"(overrides?: CallOverrides): Promise<BigNumber>;

    mix(overrides?: CallOverrides): Promise<BigNumber>;

    "mix()"(overrides?: CallOverrides): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    "fee()"(overrides?: CallOverrides): Promise<BigNumber>;

    isMetaverseWhitelisted(
      metaverseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isMetaverseWhitelisted(uint256)"(
      metaverseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFeeReceiver(
      _receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setFeeReceiver(address)"(
      _receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isItemWhitelisted(
      metaverseId: BigNumberish,
      item: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isItemWhitelisted(uint256,address)"(
      metaverseId: BigNumberish,
      item: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    banUser(user: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "banUser(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mileage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mileage()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    batchTransfer(
      metaverseIds: BigNumberish[],
      items: string[],
      ids: BigNumberish[],
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "batchTransfer(uint256[],address[],uint256[],address[],uint256[])"(
      metaverseIds: BigNumberish[],
      items: string[],
      ids: BigNumberish[],
      to: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unbanUser(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unbanUser(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFee(uint256)"(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setAuctionExtensionInterval(
      interval: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAuctionExtensionInterval(uint256)"(
      interval: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMetaverses(
      _metaverses: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMetaverses(address)"(
      _metaverses: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isBannedUser(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBannedUser(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    metaverses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "metaverses()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auctionExtensionInterval(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "auctionExtensionInterval()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeReceiver()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mix(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mix()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fee()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isMetaverseWhitelisted(
      metaverseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isMetaverseWhitelisted(uint256)"(
      metaverseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFeeReceiver(
      _receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFeeReceiver(address)"(
      _receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isItemWhitelisted(
      metaverseId: BigNumberish,
      item: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isItemWhitelisted(uint256,address)"(
      metaverseId: BigNumberish,
      item: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
