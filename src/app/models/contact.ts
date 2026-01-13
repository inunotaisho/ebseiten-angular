

/**
 * Lambda Email validation error for a single field.
 */
export interface LambdaFieldError {
  code: string;
  field: string;
  message: string;
}

/**
 * Formspree 422 error response structure.
 */
export interface LambdaErrorResponse {
  error: string;
  errors: LambdaFieldError[];
}

export interface IContact {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    _gotcha?: string;
}
