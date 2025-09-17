export type TuskyErrorResponse = {
  message: string;
  errors: { [key: string]: string[] };
};