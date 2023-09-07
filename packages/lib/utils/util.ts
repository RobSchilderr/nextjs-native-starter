import { twMerge } from 'tailwind-merge'
import { ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getInitialNameAvatar = (name?: string | null, color?: string) =>
  `https://ui-avatars.com/api/?background=${color || '478130'}&color=fff&name=${
    name || ''
  }`
