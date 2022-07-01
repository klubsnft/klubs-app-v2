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

interface IArtistsInterface extends ethers.utils.Interface {
  functions: {
    "extras(address)": FunctionFragment;
    "setExtra(string)": FunctionFragment;
    "add()": FunctionFragment;
    "addedBlocks(address)": FunctionFragment;
    "onlyKlubsMembership(address)": FunctionFragment;
    "added(address)": FunctionFragment;
    "banned(address)": FunctionFragment;
    "baseRoyalty(address)": FunctionFragment;
    "setBaseRoyalty(uint256)": FunctionFragment;
    "artistCount()": FunctionFragment;
    "artists(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "extras", values: [string]): string;
  encodeFunctionData(functionFragment: "setExtra", values: [string]): string;
  encodeFunctionData(functionFragment: "add", values?: undefined): string;
  encodeFunctionData(functionFragment: "addedBlocks", values: [string]): string;
  encodeFunctionData(
    functionFragment: "onlyKlubsMembership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "added", values: [string]): string;
  encodeFunctionData(functionFragment: "banned", values: [string]): string;
  encodeFunctionData(functionFragment: "baseRoyalty", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setBaseRoyalty",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "artistCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "artists",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "extras", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "added", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "banned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "baseRoyalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBaseRoyalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "artistCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "artists", data: BytesLike): Result;

  events: {
    "Add(address)": EventFragment;
    "SetBaseRoyalty(address,uint256)": EventFragment;
    "SetExtra(address,string)": EventFragment;
    "JoinOnlyKlubsMembership(address)": EventFragment;
    "ExitOnlyKlubsMembership(address)": EventFragment;
    "Ban(address)": EventFragment;
    "Unban(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Add"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetBaseRoyalty"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetExtra"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "JoinOnlyKlubsMembership"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExitOnlyKlubsMembership"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Ban"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unban"): EventFragment;
}

export class IArtists extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IArtistsInterface;

  functions: {
    extras(artist: string, overrides?: CallOverrides): Promise<[string]>;

    "extras(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

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

    addedBlocks(
      artist: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "addedBlocks(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    onlyKlubsMembership(
      artist: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "onlyKlubsMembership(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    added(artist: string, overrides?: CallOverrides): Promise<[boolean]>;

    "added(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    banned(artist: string, overrides?: CallOverrides): Promise<[boolean]>;

    "banned(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    baseRoyalty(
      artist: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "baseRoyalty(address)"(
      artist: string,
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

    artistCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "artistCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    artists(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "artists(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  extras(artist: string, overrides?: CallOverrides): Promise<string>;

  "extras(address)"(artist: string, overrides?: CallOverrides): Promise<string>;

  setExtra(extra: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setExtra(string)"(
    extra: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  add(overrides?: Overrides): Promise<ContractTransaction>;

  "add()"(overrides?: Overrides): Promise<ContractTransaction>;

  addedBlocks(artist: string, overrides?: CallOverrides): Promise<BigNumber>;

  "addedBlocks(address)"(
    artist: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  onlyKlubsMembership(
    artist: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "onlyKlubsMembership(address)"(
    artist: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  added(artist: string, overrides?: CallOverrides): Promise<boolean>;

  "added(address)"(artist: string, overrides?: CallOverrides): Promise<boolean>;

  banned(artist: string, overrides?: CallOverrides): Promise<boolean>;

  "banned(address)"(
    artist: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  baseRoyalty(artist: string, overrides?: CallOverrides): Promise<BigNumber>;

  "baseRoyalty(address)"(
    artist: string,
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

  artistCount(overrides?: CallOverrides): Promise<BigNumber>;

  "artistCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  artists(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "artists(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    extras(artist: string, overrides?: CallOverrides): Promise<string>;

    "extras(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setExtra(extra: string, overrides?: CallOverrides): Promise<void>;

    "setExtra(string)"(extra: string, overrides?: CallOverrides): Promise<void>;

    add(overrides?: CallOverrides): Promise<void>;

    "add()"(overrides?: CallOverrides): Promise<void>;

    addedBlocks(artist: string, overrides?: CallOverrides): Promise<BigNumber>;

    "addedBlocks(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onlyKlubsMembership(
      artist: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "onlyKlubsMembership(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    added(artist: string, overrides?: CallOverrides): Promise<boolean>;

    "added(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    banned(artist: string, overrides?: CallOverrides): Promise<boolean>;

    "banned(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    baseRoyalty(artist: string, overrides?: CallOverrides): Promise<BigNumber>;

    "baseRoyalty(address)"(
      artist: string,
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

    artistCount(overrides?: CallOverrides): Promise<BigNumber>;

    "artistCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    artists(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "artists(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    Add(artist: string | null): EventFilter;

    SetBaseRoyalty(artist: string | null, baseRoyalty: null): EventFilter;

    SetExtra(artist: string | null, extra: null): EventFilter;

    JoinOnlyKlubsMembership(artist: string | null): EventFilter;

    ExitOnlyKlubsMembership(artist: string | null): EventFilter;

    Ban(artist: string | null): EventFilter;

    Unban(artist: string | null): EventFilter;
  };

  estimateGas: {
    extras(artist: string, overrides?: CallOverrides): Promise<BigNumber>;

    "extras(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setExtra(extra: string, overrides?: Overrides): Promise<BigNumber>;

    "setExtra(string)"(
      extra: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    add(overrides?: Overrides): Promise<BigNumber>;

    "add()"(overrides?: Overrides): Promise<BigNumber>;

    addedBlocks(artist: string, overrides?: CallOverrides): Promise<BigNumber>;

    "addedBlocks(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onlyKlubsMembership(
      artist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "onlyKlubsMembership(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    added(artist: string, overrides?: CallOverrides): Promise<BigNumber>;

    "added(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    banned(artist: string, overrides?: CallOverrides): Promise<BigNumber>;

    "banned(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseRoyalty(artist: string, overrides?: CallOverrides): Promise<BigNumber>;

    "baseRoyalty(address)"(
      artist: string,
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

    artistCount(overrides?: CallOverrides): Promise<BigNumber>;

    "artistCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    artists(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "artists(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    extras(
      artist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "extras(address)"(
      artist: string,
      overrides?: CallOverrides
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
      artist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addedBlocks(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onlyKlubsMembership(
      artist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "onlyKlubsMembership(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    added(
      artist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "added(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    banned(
      artist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "banned(address)"(
      artist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseRoyalty(
      artist: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "baseRoyalty(address)"(
      artist: string,
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

    artistCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "artistCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    artists(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "artists(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
