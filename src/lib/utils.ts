import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  console.log(dateString);
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(dateString));
}

export function getYoutubeThumbnail(videoKey: string) {
  return `https://i.ytimg.com/vi/${videoKey}/hqdefault.jpg`;
}
