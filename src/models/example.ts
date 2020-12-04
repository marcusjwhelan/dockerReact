interface company{
  name: string
  catchPhrase: string
  bs: string
}
interface geo{
  lat: string
  lng: string
}
interface address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: geo
}
export interface IExample {
  id: number
  name: string
  username: string
  email: string
  address: address
  phone: string
  website: string
  company: company
}