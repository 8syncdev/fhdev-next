import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn: công cụ hỗ trợ để kết hợp các class và merge chúng lại với nhau
 * Example:
 * ```ts
 * const button = cn("btn", "btn-primary", "btn-lg") // "btn btn-primary btn-lg"
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
