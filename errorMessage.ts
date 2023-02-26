import { ErrorCode } from 'interfaces/error/enum'

const ErrorMessage: Record<ErrorCode, string> = {
  U001: 'access with no authentication',
  U002: 'access with no authorization',
  U003: 'try to access to nonexistent content',
  D001: 'db create error',
  D002: 'db connection error',
}

export default ErrorMessage
