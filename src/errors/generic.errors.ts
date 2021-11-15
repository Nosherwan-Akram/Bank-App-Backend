import { BaseHttpError, ExtendProps } from "./base-http.errors";

export class BadRequestError extends BaseHttpError {
  constructor({ message, devMessage, controller }: ExtendProps) {
    super({
      statusCode: 400,
      message,
      devMessage,
      controller,
      name: "badRequestError",
    });
  }
}

export class NotFoundError extends BaseHttpError {
  constructor({ message, devMessage, controller }: ExtendProps) {
    super({
      statusCode: 404,
      message,
      devMessage,
      controller,
      name: "notFoundError",
    });
  }
}

export class ConflictError extends BaseHttpError {
  constructor({ message, devMessage, controller }: ExtendProps) {
    super({
      statusCode: 409,
      message,
      devMessage,
      controller,
      name: "conflictError",
    });
  }
}
