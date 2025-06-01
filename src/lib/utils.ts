import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToForm() {
  const formElement = document.getElementById('inscription-form-section');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}