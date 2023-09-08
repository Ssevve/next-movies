import colors from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

import { cn } from '@/lib/utils';

type TextSize = keyof typeof fontSize;

interface CircularRatingProps {
  rating: number;
  size?: number;
  strokeWidth?: number;
  textSize?: TextSize;
  className?: string;
}

function getRatingColor(ratingPercentage: number) {
  if (ratingPercentage >= 75) return colors.green[500];
  if (ratingPercentage >= 50) return colors.lime[500];
  if (ratingPercentage >= 25) return colors.yellow[500];
  return colors.red[500];
}

export default function CircularRating({
  rating,
  size = 40,
  strokeWidth = 3,
  textSize = 'xs',
  className,
}: CircularRatingProps) {
  const viewBox = `0 0 ${size} ${size}`;
  const ratingPercentage = +rating.toFixed(1) * 10;
  const circleRadius = (size - strokeWidth) / 2.5;
  const dashDiameter = Math.PI * 2 * circleRadius;
  const dashRatio = rating / 10;
  const gapLength = (1 - dashRatio) * dashDiameter;

  const ratingColor = getRatingColor(ratingPercentage) as string;

  return (
    <div
      className={cn(
        'relative rounded-full bg-background',
        `h-[${size}px] w-[${size}px]`,
        className
      )}
    >
      <div className="-rotate-90">
        <svg
          width={size}
          height={size}
          viewBox={viewBox}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            r={circleRadius}
            cx={size / 2}
            cy={size / 2}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={dashDiameter}
            strokeDashoffset="0"
            stroke={ratingColor}
            className="opacity-30"
          ></circle>
          <circle
            r={circleRadius}
            cx={size / 2}
            cy={size / 2}
            stroke={ratingColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={gapLength}
            fill="transparent"
            strokeDasharray={dashDiameter}
          ></circle>
        </svg>
      </div>
      <span
        className={cn(
          'absolute left-1/2 top-1/2 m-auto -translate-x-1/2 -translate-y-1/2 font-bold',
          `text-${textSize}`
        )}
      >
        {ratingPercentage}
      </span>
    </div>
  );
}
