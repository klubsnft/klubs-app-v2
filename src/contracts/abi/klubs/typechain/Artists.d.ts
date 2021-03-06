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

interface ArtistsInterface extends ethers.utils.Interface {
  functions: {
    "extras(address)": FunctionFragment;
    "exitOnlyKlubsMembership(address)": FunctionFragment;
    "setExtra(string)": FunctionFragment;
    "add()": FunctionFragment;
    "addedBlocks(address)": FunctionFragment;
    "onlyKlubsMembership(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "added(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "ban(address)": FunctionFragment;
    "banned(address)": FunctionFragment;
    "baseRoyalty(address)": FunctionFragment;
    "setBaseRoyalty(uint256)": FunctionFragment;
    "unban(address)": FunctionFragment;
    "artistCount()": FunctionFragment;
    "joinOnlyKlubsMembership(address)": FunctionFragment;
    "artists(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "extras", values: [string]): string;
  encodeFunctionData(
    functionFragment: "exitOnlyKlubsMembership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setExtra", values: [string]): string;
  encodeFunctionData(functionFragment: "add", values?: undefined): string;
  encodeFunctionData(functionFragment: "addedBlocks", values: [string]): string;
  encodeFunctionData(
    functionFragment: "onlyKlubsMembership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "added", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "ban", values: [string]): string;
  encodeFunctionData(functionFragment: "banned", values: [string]): string;
  encodeFunctionData(functionFragment: "baseRoyalty", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setBaseRoyalty",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unban", values: [string]): string;
  encodeFunctionData(
    functionFragment: "artistCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "joinOnlyKlubsMembership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "artists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "extras", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exitOnlyKlubsMembership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setExtra", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addedBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onlyKlubsMembership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "added", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ban", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "banned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "baseRoyalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBaseRoyalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unban", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "artistCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "joinOnlyKlubsMembership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "artists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Add(address)": EventFragment;
    "SetBaseRoyalty(address,uint256)": EventFragment;
    "SetExtra(address,string)": EventFragment;
    "JoinOnlyKlubsMembership(address)": EventFragment;
    "ExitOnlyKlubsMembership(address)": EventFragment;
    "Ban(address)": EventFragment;
    "Unban(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Add"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetBaseRoyalty"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetExtra"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "JoinOnlyKlubsMembership"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExitOnlyKlubsMembership"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Ban"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unban"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class Artists extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ArtistsInterface;

  functions: {
    extras(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    "extras(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    exitOnlyKlubsMembership(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "exitOnlyKlubsMembership(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setExtra(
      extra: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setExtra(string)"(
      extra: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    add(overrides?: Overrides): Promise<ContractTransaction>;

    "add()"(overrides?: Overrides): Promise<ContractTransaction>;

    addedBlocks(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "addedBlocks(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    onlyKlubsMembership(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "onlyKlubsMembership(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    added(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "added(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    "isOwner()"(overrides?: CallOverrides): Promise<[boolean]>;

    ban(artist: string, overrides?: Overrides): Promise<ContractTransaction>;

    "ban(address)"(
      artist: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    banned(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "banned(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    baseRoyalty(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "baseRoyalty(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setBaseRoyalty(
      _baseRoyalty: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBaseRoyalty(uint256)"(
      _baseRoyalty: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unban(artist: string, overrides?: Overrides): Promise<ContractTransaction>;

    "unban(address)"(
      artist: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    artistCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "artistCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    joinOnlyKlubsMembership(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "joinOnlyKlubsMembership(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    artists(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "artists(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  extras(arg0: string, overrides?: CallOverrides): Promise<string>;

  "extras(address)"(arg0: string, overrides?: CallOverrides): Promise<string>;

  exitOnlyKlubsMembership(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "exitOnlyKlubsMembership(address)"(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setExtra(extra: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setExtra(string)"(
    extra: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  add(overrides?: Overrides): Promise<ContractTransaction>;

  "add()"(overrides?: Overrides): Promise<ContractTransaction>;

  addedBlocks(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "addedBlocks(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  onlyKlubsMembership(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "onlyKlubsMembership(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  added(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "added(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

  ban(artist: string, overrides?: Overrides): Promise<ContractTransaction>;

  "ban(address)"(
    artist: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  banned(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "banned(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  baseRoyalty(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "baseRoyalty(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setBaseRoyalty(
    _baseRoyalty: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBaseRoyalty(uint256)"(
    _baseRoyalty: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unban(artist: string, overrides?: Overrides): Promise<ContractTransaction>;

  "unban(address)"(
    artist: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  artistCount(overrides?: CallOverrides): Promise<BigNumber>;

  "artistCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  joinOnlyKlubsMembership(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "joinOnlyKlubsMembership(address)"(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  artists(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "artists(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    extras(arg0: string, overrides?: CallOverrides): Promise<string>;

    "extras(address)"(arg0: string, overrides?: CallOverrides): Promise<string>;

    exitOnlyKlubsMembership(
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "exitOnlyKlubsMembership(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setExtra(extra: string, overrides?: CallOverrides): Promise<void>;

    "setExtra(string)"(extra: string, overrides?: CallOverrides): Promise<void>;

    add(overrides?: CallOverrides): Promise<void>;

    "add()"(overrides?: CallOverrides): Promise<void>;

    addedBlocks(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "addedBlocks(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onlyKlubsMembership(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "onlyKlubsMembership(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    added(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "added(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

    ban(artist: string, overrides?: CallOverrides): Promise<void>;

    "ban(address)"(artist: string, overrides?: CallOverrides): Promise<void>;

    banned(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "banned(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    baseRoyalty(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "baseRoyalty(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setBaseRoyalty(
      _baseRoyalty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBaseRoyalty(uint256)"(
      _baseRoyalty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unban(artist: string, overrides?: CallOverrides): Promise<void>;

    "unban(address)"(artist: string, overrides?: CallOverrides): Promise<void>;

    artistCount(overrides?: CallOverrides): Promise<BigNumber>;

    "artistCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    joinOnlyKlubsMembership(
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "joinOnlyKlubsMembership(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    artists(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "artists(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Add(artist: string | null): EventFilter;

    SetBaseRoyalty(artist: string | null, baseRoyalty: null): EventFilter;

    SetExtra(artist: string | null, extra: null): EventFilter;

    JoinOnlyKlubsMembership(artist: string | null): EventFilter;

    ExitOnlyKlubsMembership(artist: string | null): EventFilter;

    Ban(artist: string | null): EventFilter;

    Unban(artist: string | null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    extras(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "extras(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exitOnlyKlubsMembership(
      addr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "exitOnlyKlubsMembership(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setExtra(extra: string, overrides?: Overrides): Promise<BigNumber>;

    "setExtra(string)"(
      extra: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    add(overrides?: Overrides): Promise<BigNumber>;

    "add()"(overrides?: Overrides): Promise<BigNumber>;

    addedBlocks(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "addedBlocks(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onlyKlubsMembership(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "onlyKlubsMembership(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    added(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "added(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "isOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    ban(artist: string, overrides?: Overrides): Promise<BigNumber>;

    "ban(address)"(artist: string, overrides?: Overrides): Promise<BigNumber>;

    banned(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "banned(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseRoyalty(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "baseRoyalty(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setBaseRoyalty(
      _baseRoyalty: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBaseRoyalty(uint256)"(
      _baseRoyalty: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unban(artist: string, overrides?: Overrides): Promise<BigNumber>;

    "unban(address)"(artist: string, overrides?: Overrides): Promise<BigNumber>;

    artistCount(overrides?: CallOverrides): Promise<BigNumber>;

    "artistCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    joinOnlyKlubsMembership(
      addr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "joinOnlyKlubsMembership(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    artists(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "artists(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    extras(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "extras(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exitOnlyKlubsMembership(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "exitOnlyKlubsMembership(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setExtra(
      extra: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setExtra(string)"(
      extra: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    add(overrides?: Overrides): Promise<PopulatedTransaction>;

    "add()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    addedBlocks(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addedBlocks(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onlyKlubsMembership(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "onlyKlubsMembership(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    added(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "added(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ban(artist: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "ban(address)"(
      artist: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    banned(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "banned(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseRoyalty(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "baseRoyalty(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBaseRoyalty(
      _baseRoyalty: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBaseRoyalty(uint256)"(
      _baseRoyalty: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unban(artist: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "unban(address)"(
      artist: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    artistCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "artistCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    joinOnlyKlubsMembership(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "joinOnlyKlubsMembership(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    artists(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "artists(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
