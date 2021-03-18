export interface ISetCookieOptions {
  expires?: number
  path?: string
  domain?: string
  sameSite?: string
  maxAge?: string
  secure?: boolean
}
export const setCookie = (key: string, value: string, options: ISetCookieOptions) => {
  let cookie = `${key}=${value}`
  if (options.expires) {
    let date = new Date()
    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000))
    cookie += `;expires=${date.toUTCString()}`
  }
  if (options.domain) {
    cookie += `;domain=${options.domain}`
  }
  if (options.sameSite) {
    cookie += `;samesite=${options.sameSite};`
  }
  if (options.secure) {
    cookie += `;secure`
  }
  if (options.maxAge) {
    cookie += `;Max-Age=${options.maxAge}`
  }
  if (options.path) {
    cookie += `;path=${options.path}`
  } else {
    cookie += `;path=/`
  }
  document.cookie = cookie
}