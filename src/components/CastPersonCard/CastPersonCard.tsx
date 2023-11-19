import PersonImage from '@/components/PersonImage/PersonImage';

interface CastPersonCardProps {
  name: string;
  imagePath: string;
  children: React.ReactNode;
}

export default function CastPersonCard({ name, imagePath, children }: CastPersonCardProps) {
  return (
    <div>
      <PersonImage imagePath={imagePath} alt={name} />
      <div>
        <h3 className="font-bold">{name}</h3>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}
