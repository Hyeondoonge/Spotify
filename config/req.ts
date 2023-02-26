import { IError } from 'interfaces/error/dto'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
})

// 인터셉트!
instance.interceptors.response.use(
  function (response) {
    const { method, url } = response.config as AxiosRequestConfig
    const { status, data } = response

    // TODO: dev 모드에서만 출력
    console.log(`💚 ${method?.toUpperCase()} ${url}\n🟢 ${status}\n${data?.message ?? ''}`)

    return response
  },
  function (error: any) {
    const { method, url } = error.config as AxiosRequestConfig
    const { status, data } = error.response as AxiosResponse<IError>

    if (error.response) {
      const { errorCode, errorMessage } = data

      // TODO: dev 모드에서만 출력
      console.log(`❤️‍🔥 ${method?.toUpperCase()} ${url}\n🔴 ${status}\n${errorMessage ?? ''}`)

      return Promise.reject({
        status,
        errorCode,
        errorMessage,
      })
    } else {
      return error
    }
  },
)

export default instance
