import { AxiosResponse } from 'axios'
import { ErrorCode } from './enum'

export interface IError {
  errorCode: ErrorCode
  errorMessage: string
}

export interface IErrorWithStatus extends IError {
  status: Pick<AxiosResponse, 'status'>
}
