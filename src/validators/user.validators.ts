import { string, object, number } from "yup";

export const createUserValidator = object().shape({
  uniqueId: string().required(),
  email: string().email(),
  password: string().required(),
  firstName: string().required(),
  lastName: string().required(),
  accountNumber: string().required(),
  accountAmount: number(),
});
