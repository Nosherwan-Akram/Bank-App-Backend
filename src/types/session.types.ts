import { IUser } from "./user.types";
import { Document } from "mongoose";
import { Response } from "express";

export type SessionTokenPayload = Pick<
  IUser & Document,
  | "firstName"
  | "lastName"
  | "uniqueId"
  | "_id"
  | "balance"
  | "accountNumber"
  | "bankName"
>;
export interface Session {
  token: string;
  user: SessionTokenPayload;
  tokenExpirationDate: Date;
}

export interface CreateSession {
  email: string;
  password: string;
  type: "website";
}

export type SessionMiddlewareResponse<t = any> = Response<
  t,
  { user: SessionTokenPayload }
>;
