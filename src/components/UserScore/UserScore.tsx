import colors from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

import cn from '@/utils/cn';

type TextSize = keyof typeof fontSize;

interface UserScoreProps {
  userScore: number;
  size?: number;
  strokeWidth?: number;
  textSize?: TextSize;
  className?: string;
}

function getUserScoreColor(userScorePercentage: number) {
  if (userScorePercentage >= 75) return colors.green[500];
  if (userScorePercentage >= 50) return colors.lime[500];
  if (userScorePercentage >= 25) return colors.yellow[500];
  return colors.red[500];
}

export function calculateCircleSize(size: number) {
  return size / 2;
}

export function formatUserScoreText(userScore: number) {
  return +userScore.toFixed(1);
}

export default function UserScore({
  userScore,
  size = 40,
  strokeWidth = 3,
  textSize = 'xs',
  className,
}: UserScoreProps) {
  const viewBox = `0 0 ${size} ${size}`;
  const formattedUserScore = formatUserScoreText(userScore);
  const userScorePercentage = formattedUserScore * 10;
  const circleRadius = (size - strokeWidth) / 2.5;
  const dashDiameter = Math.PI * 2 * circleRadius;
  const dashRatio = userScore / 10;
  const gapLength = (1 - dashRatio) * dashDiameter;

  return (
    <div
      data-testid="circular-user-score-wrapper"
      className={cn(
        'relative rounded-full bg-background',
        `h-[${size}px] w-[${size}px]`,
        className
      )}
    >
      <div className="-rotate-90">
        <svg
          data-testid="circular-user-score-svg"
          width={size}
          height={size}
          viewBox={viewBox}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            data-testid="circular-user-score-track"
            r={circleRadius}
            cx={calculateCircleSize(size)}
            cy={calculateCircleSize(size)}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={dashDiameter}
            strokeDashoffset="0"
            stroke={getUserScoreColor(userScorePercentage)}
            className="opacity-30"
          />
          <circle
            data-testid="circular-user-score-fill"
            r={circleRadius}
            cx={calculateCircleSize(size)}
            cy={calculateCircleSize(size)}
            stroke={getUserScoreColor(userScorePercentage)}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={gapLength}
            fill="transparent"
            strokeDasharray={dashDiameter}
          />
        </svg>
      </div>
      <span
        className={cn(
          'absolute left-1/2 top-1/2 m-auto -translate-x-1/2 -translate-y-1/2 font-bold',
          `text-${textSize}`
        )}
      >
        {formattedUserScore}
      </span>
    </div>
  );
}
