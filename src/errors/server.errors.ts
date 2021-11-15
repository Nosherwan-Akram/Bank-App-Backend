import { BaseHttpError, ExtendProps } from "./base-http.errors";

export class InternalServerError extends BaseHttpError {
  constructor({ message, devMessage, controller }: ExtendProps) {
    super({
      statusCode: 500,
      message,
      devMessage,
      controller,
      name: "internalServerError",
    });
  }
}
