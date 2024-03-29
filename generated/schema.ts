// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AddEmployee extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AddEmployee entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type AddEmployee must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AddEmployee", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): AddEmployee | null {
    return changetype<AddEmployee | null>(
      store.get("AddEmployee", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get employeeAddress(): Bytes {
    let value = this.get("employeeAddress");
    return value!.toBytes();
  }

  set employeeAddress(value: Bytes) {
    this.set("employeeAddress", Value.fromBytes(value));
  }

  get fName(): string {
    let value = this.get("fName");
    return value!.toString();
  }

  set fName(value: string) {
    this.set("fName", Value.fromString(value));
  }

  get lName(): string {
    let value = this.get("lName");
    return value!.toString();
  }

  set lName(value: string) {
    this.set("lName", Value.fromString(value));
  }

  get salary(): BigInt {
    let value = this.get("salary");
    return value!.toBigInt();
  }

  set salary(value: BigInt) {
    this.set("salary", Value.fromBigInt(value));
  }

  get vestingPeriod(): BigInt {
    let value = this.get("vestingPeriod");
    return value!.toBigInt();
  }

  set vestingPeriod(value: BigInt) {
    this.set("vestingPeriod", Value.fromBigInt(value));
  }

  get employeeAvatar(): string {
    let value = this.get("employeeAvatar");
    return value!.toString();
  }

  set employeeAvatar(value: string) {
    this.set("employeeAvatar", Value.fromString(value));
  }

  get isVested(): boolean {
    let value = this.get("isVested");
    return value!.toBoolean();
  }

  set isVested(value: boolean) {
    this.set("isVested", Value.fromBoolean(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value!.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get department(): string {
    let value = this.get("department");
    return value!.toString();
  }

  set department(value: string) {
    this.set("department", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class DelEmployee extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DelEmployee entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type DelEmployee must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DelEmployee", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): DelEmployee | null {
    return changetype<DelEmployee | null>(
      store.get("DelEmployee", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get employeeAddress(): Bytes {
    let value = this.get("employeeAddress");
    return value!.toBytes();
  }

  set employeeAddress(value: Bytes) {
    this.set("employeeAddress", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Payment extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Payment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Payment must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Payment", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Payment | null {
    return changetype<Payment | null>(store.get("Payment", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get employeeAddress(): Bytes {
    let value = this.get("employeeAddress");
    return value!.toBytes();
  }

  set employeeAddress(value: Bytes) {
    this.set("employeeAddress", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
