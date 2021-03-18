
export const getCookie = (key: string) => {
  return Object.fromEntries(document.cookie.split('; ').map(v => v.split('=').map(decodeURIComponent)))[key]
}