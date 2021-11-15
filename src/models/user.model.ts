import { model, Schema, Document } from "mongoose";
import { IUser } from "~/types";
import { beneficiary } from "./beneficiary.model";
const userSchema = new Schema(
  {
    uniqueId: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    accountNumber: { type: String, unique: true },
    password: { type: String },
    beneficiaries: {
      type: [beneficiary],
    },
    balance: { type: Number },
    bankName: { type: String },
    bills: {
      type: [
        {
          referenceNumber: { type: String },
          amount: { type: Number },
          amountAfterDueDate: { type: Number },
          dueDate: { type: Date },
          billType: {
            type: String,
            enum: [
              "Utility Bill",
              "Phone Bill",
              "Electricity Bill",
              "Gas Bill",
            ],
          },
          paid: { type: Boolean, default: false },
        },
      ],
    },
    transactions: {
      type: [
        {
          transactionAccountTitle: { type: String, required: true },
          transactionAccountNumber: { type: String, required: true },
          transactionType: { type: String, required: true },
          balanceAfterTransaction: { type: Number, required: true },
          transactionAmount: { type: Number, required: true },
          transactionId: { type: String, required: true },
          transactionAt: { type: Date, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export const userModel = model<IUser & Document>("User", userSchema);
