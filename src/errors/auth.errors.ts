import { BaseHttpError, ExtendProps } from "./base-http.errors";

export class UnAuthorizedError extends BaseHttpError {
  constructor({ message, devMessage, controller }: ExtendProps) {
    super({
      statusCode: 401,
      message,
      devMessage,
      controller,
      name: "unAuthorizedError",
    });
  }
}

/**
 * This is different from UnAuthorized Error. What this means is that the server recognizes the user and the user is a valid user.
 * But the resource user wants to access is not allowed. Example: A lower access level like tech trying to access some resource allowed only
 * to Super Admin
 */
export class ForbiddenResourceError extends BaseHttpError {
  constructor({ message, devMessage, controller }: ExtendProps) {
    super({
      statusCode: 403,
      devMessage,
      controller,
      message,
      name: "forbiddenResourceError",
    });
  }
}
