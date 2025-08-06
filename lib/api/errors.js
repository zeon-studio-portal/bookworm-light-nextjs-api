export class CustomApiError extends Error {
  constructor(statusCode, message, errorMessage = []) {
    super(message);
    this.name = "CustomApiError";
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;
  }
}

export class InvalidCredentials extends Error {
  constructor({ message, errorMessage }) {
    super(message, {
      cause: {
        message,
        errorMessage: errorMessage,
      },
    });
  }
}
