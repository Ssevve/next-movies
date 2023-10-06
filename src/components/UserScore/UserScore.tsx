import colors from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip';
import cn from '@/lib/cn';

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

type TextSize = keyof typeof fontSize;

interface WithTooltipProps {
  withTooltip: true;
  userScoreCount: number;
}

interface WithoutTooltipProps {
  withTooltip?: never | false;
  userScoreCount?: never;
}

type UserScoreProps = {
  userScore: number;
  size?: number;
  strokeWidth?: number;
  textSize?: TextSize;
  className?: string;
} & (WithTooltipProps | WithoutTooltipProps);

export default function UserScore({
  userScore,
  userScoreCount,
  size = 40,
  strokeWidth = 3,
  textSize = 'xs',
  className,
  withTooltip,
}: UserScoreProps) {
  const viewBox = `0 0 ${size} ${size}`;
  const formattedUserScore = formatUserScoreText(userScore);
  const userScorePercentage = formattedUserScore * 10;
  const circleRadius = (size - strokeWidth) / 2.5;
  const dashDiameter = Math.PI * 2 * circleRadius;
  const dashRatio = userScore / 10;
  const gapLength = (1 - dashRatio) * dashDiameter;

  const UserScoreDisplay = () => {
    return (
      <div
        data-testid="user-score-wrapper"
        className={cn(
          'relative rounded-full bg-background',
          `h-[${size}px] w-[${size}px]`,
          className
        )}
      >
        <div className="-rotate-90">
          <svg
            data-testid="user-score-svg"
            width={size}
            height={size}
            viewBox={viewBox}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              data-testid="user-score-track"
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
              data-testid="user-score-fill"
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
  };

  if (withTooltip) {
    return (
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger className={className}>
            <UserScoreDisplay />
          </TooltipTrigger>
          <TooltipContent>
            <span>{userScoreCount} votes</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return <UserScoreDisplay />;
}
