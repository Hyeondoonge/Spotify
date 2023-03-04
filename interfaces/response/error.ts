import { AxiosResponse } from 'axios'

export enum ErrorCode {
  U001 = 'U001', // 승인되지 않은 사용자 요청
  U002 = 'U002', // 허가되지 않은 사용자 요청
  U003 = 'U003', //  존재하지 않는 콘텐츠 요청
  D001 = 'D001', //  레코드 생성 에러
  D002 = 'D002', //  DB 연결 에러
  /* 필요한 ErrorCode 추가 */
}

export interface IError {
  errorCode: ErrorCode
  errorMessage: string
}

export interface IErrorWithStatus extends IError {
  status: Pick<AxiosResponse, 'status'>
}
