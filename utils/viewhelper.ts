import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { customAlphabet } from 'nanoid'
dayjs.extend(utc)
export const generateUUID = () => {
  const id = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 16)()
  return id
}
export const generateLongUUID = () => {
  const id = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 30)()
  return id
}
export const generateShortUUID = () => {
  const id = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 6)()
  return id
}
export const generateMiddleUUID = () => {
  const id = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 12)()
  return id
}

export const getUTC = () => {
  return dayjs.utc().format()
}

export const getLS = (key: string) => {
  let val = localStorage.getItem(`br-${key}`) || ''
  let i = val ? JSON.parse(val as any) : null
  return i
}
export const setLS = (key: string, val: any) => {
  return localStorage.setItem(`br-${key}`, JSON.stringify(val))
}