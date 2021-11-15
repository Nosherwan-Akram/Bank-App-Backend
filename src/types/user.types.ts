import { Request } from "express";
import { Document } from "mongoose";
export interface Beneficiary {
  accountNumber: string;
  firstName: string;
  lastName: string;
  bankName: string;
}

export interface Transaction {
  transactionAccountTitle: string;
  transactionAccountNumber: string;
  transactionType: "credit" | "debit";
  balanceAfterTransaction: number;
  transactionAmount: number;
  transactionId: string;
  transactionAt: Date;
}
export type CreateTransaction = Pick<
  Transaction,
  "transactionAccountNumber" | "transactionAmount"
>;
export interface Bill {
  referenceNumber: string;
  amount: number;
  amountAfterDueDate: number;
  dueDate: Date;
  billType: "Utility Bill" | "Phone Bill" | "Electricity Bill" | "Gas Bill";
  paid: boolean;
}
export interface IUser {
  uniqueId: string;
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: string;
  beneficiaries: Beneficiary[];
  balance: number;
  transactions: Transaction[];
  bankName: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
  bills: Bill[];
}

export type GetUserRequest = Request<{ accountNumber: string }>;
export type GetUserTransactionRequest = Request<{ accountNumber: string }>;

export type PatchUserRequest = Request<
  { accountNumber: string },
  IUser & Document,
  Partial<IUser>
>;
