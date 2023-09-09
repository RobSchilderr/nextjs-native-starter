import { twMerge } from 'tailwind-merge'
import { ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getInitialNameAvatar = (name?: string | null, color?: string) =>
  `https://ui-avatars.com/api/?background=${color || '0D8ABC'}&color=fff&name=${
    name || ''
  }`

export function truncateString(
  str: string,
  maxLen: number,
): {
  value: string
  isTruncated: boolean
} {
  if (!str) {
    return {
      value: '',
      isTruncated: false,
    }
  }
  return {
    value: str.length <= maxLen ? str : `${str.slice(0, maxLen)}...`,
    isTruncated: !(str.length <= maxLen),
  }
}
