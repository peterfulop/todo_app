export enum DBErrorMessages {
  MISSING_FIELDS = 'MISSING_FIELDS',
  MINIMUM_FIELDS_TO_UPDATE = 'MINIMUM_FIELDS_TO_UPDATE',
  MISSING_RECORD = 'MISSING_RECORD',
  SERVER_ERROR = 'SERVER_ERROR',
  MISSING_SIGNUP_DATA = 'MISSING_SIGNUP_DATA',
  SHORT_PASSWORD = 'SHORT_PASSWORD',
  PASSWORDS_DO_NOT_MATCH = 'PASSWORDS_DO_NOT_MATCH',
  MISSING_INPUTS = 'MISSING_INPUTS',
  INVALID_EMAIL_ADDRESS = 'INVALID_EMAIL_ADDRESS',
  EMAIL_ADDRESS_ALREADY_IN_USE = 'EMAIL_ADDRESS_ALREADY_IN_USE',
  AUTHORIZATION_FAILED = 'AUTHORIZATION_FAILED',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  USER_UNAUTHORIZED = 'USER_UNAUTHORIZED',
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  UNIQUE_CONSTRAINT_FAIL = 'UNIQUE_CONSTRAINT_FAIL',
  UNCONFIRMED_USER = 'UNCONFIRMED_USER',
  EXPIRED_TOKEN = 'EXPIRED_TOKEN',
}