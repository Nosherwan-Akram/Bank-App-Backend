export interface BaseHttpErrorProps {
  statusCode: number;
  message: string;
  devMessage?: string;
  controller?: string;
  name: string;
}
export type ExtendProps = Pick<
  BaseHttpErrorProps,
  "message" | "devMessage" | "controller"
>;
export class BaseHttpError extends Error {
  statusCode: number;
  devMessage?: string;
  controller?: string;
  name = "baseHttpError";
  constructor({
    message,
    statusCode,
    devMessage,
    controller,
    name,
  }: BaseHttpErrorProps) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.devMessage = devMessage;
    this.controller = controller;
  }
}
