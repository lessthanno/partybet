/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface PartyBetInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "absSub"
      | "authorizeOperator"
      | "available"
      | "betFee"
      | "betPrice"
      | "claim"
      | "claimedRewards"
      | "getBalance"
      | "getIssueNo"
      | "guess"
      | "issueBetRecordRows"
      | "issueRecordStaticRow"
      | "issueResultRows"
      | "makeUintKey"
      | "open"
      | "personBetIssueRows"
      | "revokeOperator"
      | "setBetAvailable"
      | "setBetFee"
      | "setBetPrice"
      | "withdrawETH"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AuthorizedOperator"
      | "ClaimSuccess"
      | "GuessSuccess"
      | "OpenSuccess"
      | "RevokedOperator"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "absSub",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizeOperator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "available", values?: undefined): string;
  encodeFunctionData(functionFragment: "betFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "betPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimedRewards",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIssueNo",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "guess", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "issueBetRecordRows",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "issueRecordStaticRow",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "issueResultRows",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "makeUintKey", values: [string]): string;
  encodeFunctionData(
    functionFragment: "open",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "personBetIssueRows",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeOperator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setBetAvailable",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setBetFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBetPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "absSub", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authorizeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "betFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "betPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getIssueNo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guess", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "issueBetRecordRows",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issueRecordStaticRow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issueResultRows",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makeUintKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "personBetIssueRows",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBetAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBetFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
    data: BytesLike
  ): Result;
}

export namespace AuthorizedOperatorEvent {
  export type InputTuple = [operator: AddressLike, holder: AddressLike];
  export type OutputTuple = [operator: string, holder: string];
  export interface OutputObject {
    operator: string;
    holder: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimSuccessEvent {
  export type InputTuple = [operator: AddressLike, amount: BigNumberish];
  export type OutputTuple = [operator: string, amount: bigint];
  export interface OutputObject {
    operator: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GuessSuccessEvent {
  export type InputTuple = [
    operator: AddressLike,
    guessPrice: BigNumberish,
    betPrice: BigNumberish,
    issueNo: string,
    pricePool: BigNumberish
  ];
  export type OutputTuple = [
    operator: string,
    guessPrice: bigint,
    betPrice: bigint,
    issueNo: string,
    pricePool: bigint
  ];
  export interface OutputObject {
    operator: string;
    guessPrice: bigint;
    betPrice: bigint;
    issueNo: string;
    pricePool: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OpenSuccessEvent {
  export type InputTuple = [
    operator: AddressLike,
    resultPrice: BigNumberish,
    issueNo: string
  ];
  export type OutputTuple = [
    operator: string,
    resultPrice: bigint,
    issueNo: string
  ];
  export interface OutputObject {
    operator: string;
    resultPrice: bigint;
    issueNo: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RevokedOperatorEvent {
  export type InputTuple = [operator: AddressLike, holder: AddressLike];
  export type OutputTuple = [operator: string, holder: string];
  export interface OutputObject {
    operator: string;
    holder: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PartyBet extends BaseContract {
  connect(runner?: ContractRunner | null): PartyBet;
  waitForDeployment(): Promise<this>;

  interface: PartyBetInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  absSub: TypedContractMethod<
    [_a: BigNumberish, _b: BigNumberish],
    [bigint],
    "view"
  >;

  authorizeOperator: TypedContractMethod<
    [_operator: AddressLike],
    [void],
    "nonpayable"
  >;

  available: TypedContractMethod<[], [boolean], "view">;

  betFee: TypedContractMethod<[], [bigint], "view">;

  betPrice: TypedContractMethod<[], [bigint], "view">;

  claim: TypedContractMethod<[issueNo: string], [void], "nonpayable">;

  claimedRewards: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;

  getBalance: TypedContractMethod<[], [bigint], "view">;

  getIssueNo: TypedContractMethod<[], [string], "view">;

  guess: TypedContractMethod<[guessPrice: BigNumberish], [void], "payable">;

  issueBetRecordRows: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [
      [string, string, bigint, bigint, bigint] & {
        betAddress: string;
        issueNo: string;
        timestamp: bigint;
        guessPrice: bigint;
        betPrice: bigint;
      }
    ],
    "view"
  >;

  issueRecordStaticRow: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        orderNum: bigint;
        pricePool: bigint;
        resultPrice: bigint;
      }
    ],
    "view"
  >;

  issueResultRows: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [
      [string, string, bigint, bigint, bigint] & {
        betAddress: string;
        issueNo: string;
        timestamp: bigint;
        guessPrice: bigint;
        betPrice: bigint;
      }
    ],
    "view"
  >;

  makeUintKey: TypedContractMethod<[issueNo: string], [bigint], "view">;

  open: TypedContractMethod<
    [resultPrice: BigNumberish, issueNo: string],
    [void],
    "nonpayable"
  >;

  personBetIssueRows: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  revokeOperator: TypedContractMethod<
    [_operator: AddressLike],
    [void],
    "nonpayable"
  >;

  setBetAvailable: TypedContractMethod<
    [_available: boolean],
    [void],
    "nonpayable"
  >;

  setBetFee: TypedContractMethod<[_betFee: BigNumberish], [void], "nonpayable">;

  setBetPrice: TypedContractMethod<
    [_price: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawETH: TypedContractMethod<
    [recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "absSub"
  ): TypedContractMethod<
    [_a: BigNumberish, _b: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "authorizeOperator"
  ): TypedContractMethod<[_operator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "available"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "betFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "betPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[issueNo: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimedRewards"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getIssueNo"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "guess"
  ): TypedContractMethod<[guessPrice: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "issueBetRecordRows"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [
      [string, string, bigint, bigint, bigint] & {
        betAddress: string;
        issueNo: string;
        timestamp: bigint;
        guessPrice: bigint;
        betPrice: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "issueRecordStaticRow"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        orderNum: bigint;
        pricePool: bigint;
        resultPrice: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "issueResultRows"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [
      [string, string, bigint, bigint, bigint] & {
        betAddress: string;
        issueNo: string;
        timestamp: bigint;
        guessPrice: bigint;
        betPrice: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "makeUintKey"
  ): TypedContractMethod<[issueNo: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "open"
  ): TypedContractMethod<
    [resultPrice: BigNumberish, issueNo: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "personBetIssueRows"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "revokeOperator"
  ): TypedContractMethod<[_operator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setBetAvailable"
  ): TypedContractMethod<[_available: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setBetFee"
  ): TypedContractMethod<[_betFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setBetPrice"
  ): TypedContractMethod<[_price: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawETH"
  ): TypedContractMethod<[recipient: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AuthorizedOperator"
  ): TypedContractEvent<
    AuthorizedOperatorEvent.InputTuple,
    AuthorizedOperatorEvent.OutputTuple,
    AuthorizedOperatorEvent.OutputObject
  >;
  getEvent(
    key: "ClaimSuccess"
  ): TypedContractEvent<
    ClaimSuccessEvent.InputTuple,
    ClaimSuccessEvent.OutputTuple,
    ClaimSuccessEvent.OutputObject
  >;
  getEvent(
    key: "GuessSuccess"
  ): TypedContractEvent<
    GuessSuccessEvent.InputTuple,
    GuessSuccessEvent.OutputTuple,
    GuessSuccessEvent.OutputObject
  >;
  getEvent(
    key: "OpenSuccess"
  ): TypedContractEvent<
    OpenSuccessEvent.InputTuple,
    OpenSuccessEvent.OutputTuple,
    OpenSuccessEvent.OutputObject
  >;
  getEvent(
    key: "RevokedOperator"
  ): TypedContractEvent<
    RevokedOperatorEvent.InputTuple,
    RevokedOperatorEvent.OutputTuple,
    RevokedOperatorEvent.OutputObject
  >;

  filters: {
    "AuthorizedOperator(address,address)": TypedContractEvent<
      AuthorizedOperatorEvent.InputTuple,
      AuthorizedOperatorEvent.OutputTuple,
      AuthorizedOperatorEvent.OutputObject
    >;
    AuthorizedOperator: TypedContractEvent<
      AuthorizedOperatorEvent.InputTuple,
      AuthorizedOperatorEvent.OutputTuple,
      AuthorizedOperatorEvent.OutputObject
    >;

    "ClaimSuccess(address,uint256)": TypedContractEvent<
      ClaimSuccessEvent.InputTuple,
      ClaimSuccessEvent.OutputTuple,
      ClaimSuccessEvent.OutputObject
    >;
    ClaimSuccess: TypedContractEvent<
      ClaimSuccessEvent.InputTuple,
      ClaimSuccessEvent.OutputTuple,
      ClaimSuccessEvent.OutputObject
    >;

    "GuessSuccess(address,uint256,uint256,string,uint256)": TypedContractEvent<
      GuessSuccessEvent.InputTuple,
      GuessSuccessEvent.OutputTuple,
      GuessSuccessEvent.OutputObject
    >;
    GuessSuccess: TypedContractEvent<
      GuessSuccessEvent.InputTuple,
      GuessSuccessEvent.OutputTuple,
      GuessSuccessEvent.OutputObject
    >;

    "OpenSuccess(address,uint256,string)": TypedContractEvent<
      OpenSuccessEvent.InputTuple,
      OpenSuccessEvent.OutputTuple,
      OpenSuccessEvent.OutputObject
    >;
    OpenSuccess: TypedContractEvent<
      OpenSuccessEvent.InputTuple,
      OpenSuccessEvent.OutputTuple,
      OpenSuccessEvent.OutputObject
    >;

    "RevokedOperator(address,address)": TypedContractEvent<
      RevokedOperatorEvent.InputTuple,
      RevokedOperatorEvent.OutputTuple,
      RevokedOperatorEvent.OutputObject
    >;
    RevokedOperator: TypedContractEvent<
      RevokedOperatorEvent.InputTuple,
      RevokedOperatorEvent.OutputTuple,
      RevokedOperatorEvent.OutputObject
    >;
  };
}
