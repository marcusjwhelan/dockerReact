
export const removeCookie = (key: string) => {
  let cookie = `${key}=`

  document.cookie = `${cookie};Max-Age=-9999999`
}