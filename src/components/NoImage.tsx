import { CameraOff, LucideIcon } from 'lucide-react';

interface NoImageProps {
  icon?: LucideIcon;
  iconSize?: number;
}

export default function NoImage({ icon = CameraOff, iconSize = 80 }: NoImageProps) {
  const Icon = icon;
  return (
    <div
      data-testid="no-image"
      className="flex h-full w-full items-center justify-center rounded-md bg-gray-400 text-2xl dark:bg-gray-800"
    >
      <Icon aria-hidden="true" className="stroke-gray-600" size={iconSize} />
    </div>
  );
}
