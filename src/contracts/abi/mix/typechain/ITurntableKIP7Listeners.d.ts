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
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ITurntableKIP7ListenersInterface extends ethers.utils.Interface {
  functions: {
    "totalShares()": FunctionFragment;
    "listen(uint256,uint256)": FunctionFragment;
    "claim(uint256[])": FunctionFragment;
    "shares(uint256,address)": FunctionFragment;
    "unlisten(uint256,uint256)": FunctionFragment;
    "claimableOf(uint256,address)": FunctionFragment;
    "accumulativeOf(uint256,address)": FunctionFragment;
    "turntableFee()": FunctionFragment;
    "claimedOf(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listen",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "shares",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unlisten",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimableOf",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "accumulativeOf",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "turntableFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimedOf",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listen", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlisten", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimableOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accumulativeOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "turntableFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimedOf", data: BytesLike): Result;

  events: {
    "Distribute(address,uint256)": EventFragment;
    "Claim(uint256,address,uint256)": EventFragment;
    "Listen(uint256,address,uint256)": EventFragment;
    "Unlisten(uint256,address,uint256)": EventFragment;
    "SetTurntableFee(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Distribute"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Listen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unlisten"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTurntableFee"): EventFragment;
}

export type DistributeEvent = TypedEvent<
  [string, BigNumber] & { by: string; distributed: BigNumber }
>;

export type ClaimEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    turntableId: BigNumber;
    to: string;
    claimed: BigNumber;
  }
>;

export type ListenEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    turntableId: BigNumber;
    owner: string;
    amount: BigNumber;
  }
>;

export type UnlistenEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    turntableId: BigNumber;
    owner: string;
    amount: BigNumber;
  }
>;

export type SetTurntableFeeEvent = TypedEvent<[BigNumber] & { fee: BigNumber }>;

export class ITurntableKIP7Listeners extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ITurntableKIP7ListenersInterface;

  functions: {
    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    listen(
      turntableId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      turntableIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shares(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    unlisten(
      turntableId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimableOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    accumulativeOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    turntableFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimedOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  listen(
    turntableId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    turntableIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shares(
    turntableId: BigNumberish,
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unlisten(
    turntableId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimableOf(
    turntableId: BigNumberish,
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  accumulativeOf(
    turntableId: BigNumberish,
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  turntableFee(overrides?: CallOverrides): Promise<BigNumber>;

  claimedOf(
    turntableId: BigNumberish,
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    listen(
      turntableId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(
      turntableIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    shares(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlisten(
      turntableId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimableOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    accumulativeOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    turntableFee(overrides?: CallOverrides): Promise<BigNumber>;

    claimedOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Distribute(address,uint256)"(
      by?: string | null,
      distributed?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { by: string; distributed: BigNumber }
    >;

    Distribute(
      by?: string | null,
      distributed?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { by: string; distributed: BigNumber }
    >;

    "Claim(uint256,address,uint256)"(
      turntableId?: BigNumberish | null,
      to?: string | null,
      claimed?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { turntableId: BigNumber; to: string; claimed: BigNumber }
    >;

    Claim(
      turntableId?: BigNumberish | null,
      to?: string | null,
      claimed?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { turntableId: BigNumber; to: string; claimed: BigNumber }
    >;

    "Listen(uint256,address,uint256)"(
      turntableId?: BigNumberish | null,
      owner?: string | null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { turntableId: BigNumber; owner: string; amount: BigNumber }
    >;

    Listen(
      turntableId?: BigNumberish | null,
      owner?: string | null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { turntableId: BigNumber; owner: string; amount: BigNumber }
    >;

    "Unlisten(uint256,address,uint256)"(
      turntableId?: BigNumberish | null,
      owner?: string | null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { turntableId: BigNumber; owner: string; amount: BigNumber }
    >;

    Unlisten(
      turntableId?: BigNumberish | null,
      owner?: string | null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { turntableId: BigNumber; owner: string; amount: BigNumber }
    >;

    "SetTurntableFee(uint256)"(
      fee?: null
    ): TypedEventFilter<[BigNumber], { fee: BigNumber }>;

    SetTurntableFee(
      fee?: null
    ): TypedEventFilter<[BigNumber], { fee: BigNumber }>;
  };

  estimateGas: {
    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    listen(
      turntableId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      turntableIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shares(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlisten(
      turntableId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimableOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    accumulativeOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    turntableFee(overrides?: CallOverrides): Promise<BigNumber>;

    claimedOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listen(
      turntableId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      turntableIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shares(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlisten(
      turntableId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimableOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    accumulativeOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    turntableFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimedOf(
      turntableId: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
